import { csrfFetch } from "./csrf.js";

const LOAD_COMMENTS = 'comments/LOAD_COMMENTS';
const CREATE_COMMENT = 'comments/CREATE_COMMENT';
const UPDATE_COMMENT = 'comments/UPDATE_COMMENT';
const DELETE_COMMENT = 'comments/DELETE_COMMENT';


const initialState = {};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case LOAD_COMMENTS: {
            const newState = { }
            action.payload.forEach(comment => {
                newState[comment.id] = comment;
            });
            return newState;
        }
        case CREATE_COMMENT: {
            const newState = { ...state }
            newState[action.payload.id] = action.payload;
            return newState;
        }
        case UPDATE_COMMENT: {
            const newState = { ...state }
            newState[action.payload.id] = action.payload;
            return newState;
        }
        case DELETE_COMMENT: {
            const newState = { ...state };
            delete newState[action.id];
            return newState;
        }
        default: {
            return state;
        }
    }
};

const loadComments = (payload) => ({
    type: LOAD_COMMENTS,
    payload
});

const addComment = (payload) => ({
    type: CREATE_COMMENT,
    payload
});

const removeComment = (id) => ({
    type: DELETE_COMMENT,
    id
});

const updateComment = (payload) => ({
    type: UPDATE_COMMENT,
    payload
});

export const getComments = (fishing_spot_id) => async dispatch => {
    const res = await csrfFetch(`/api/comments/${fishing_spot_id}`);

    if (res.ok) {
        const data = await res.json();
        dispatch(loadComments(data.comments))
    }
}

export const createComment = (data) => async dispatch => {
    const { user_id, fishing_spot_id, comment } = data;
    const res = await csrfFetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ user_id, fishing_spot_id, comment })
    });

    if (res.ok) {
        const payload = await res.json();
        dispatch(addComment( payload.newComment ));
        return payload;
    }
}

export const putComment = (data) => async dispatch => {
    const { user_id, fishing_spot_id, comment, id } = data;
    const res = await csrfFetch(`/api/comments/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ user_id, fishing_spot_id, comment, id })
    });

    if (res.ok) {
        const payload = await res.json();
        dispatch(updateComment( payload.updatedComment ));
        return payload;
    }
}

export const deleteComment = (id) => async dispatch => {
    const res = await csrfFetch(`/api/comments/${id}`, {
        method: 'DELETE'
    });

    if (res.ok) {
        dispatch(removeComment(id))
    }
};
