import { csrfFetch } from "./csrf.js";

const LOAD_REVIEWS =  'fishing_spots/LOAD_REVIEWS';
const LOAD_REVIEW = 'fishing_spots/LOAD_REVIEW';
const CREATE_REVIEW = 'fishing_spots/CREATE_REVIEW';
const DELETE_REVIEW = 'fishing_spots/DELETE_REVIEW';
const UPDATE_REVIEW = 'fishing_spots/UPDATE_REVIEW';

const initialState = {};

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case LOAD_REVIEWS: {
            const newState = { };
            action.payload.forEach(review => {
                newState[review.id] = review;
            });
            return newState;
        }
        case LOAD_REVIEW: {
            const newState = { ...state };
            return newState;
        }
        case CREATE_REVIEW: {
            const newState = { ...state };
            newState[action.payload.id] = action.payload;
            return newState;
        }
        case DELETE_REVIEW: {
            const newState = { ...state };
            delete newState[action.id]
            return newState;
        }
        case UPDATE_REVIEW: {
            const newState = { ...state };
            newState[action.payload.id] = action.payload
            return newState;
        }
        default: {
            return state;
        }
    }
}

const loadReviews = (payload) => ({
    type: LOAD_REVIEWS,
    payload
});

const addReview = (payload) => ({
    type: CREATE_REVIEW,
    payload
});

const removeReview = (id) => ({
    type: DELETE_REVIEW,
    id
});

const updateReview = (payload) => ({
    type: UPDATE_REVIEW,
    payload
});

export const getReviews = (id) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${id}`);

    if (res.ok) {
        const data = await res.json();
        dispatch(loadReviews(data.reviews));
        return data;
    }
}

export const createReview = (data) => async dispatch => {
    const { user_id, fishing_spot_id, review, rating } = data;
    const res = await csrfFetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify({ user_id, fishing_spot_id, review, rating })
    });

    if (res.ok) {
        const payload = await res.json();
        dispatch(addReview( payload.newReview ));
        return payload;
    }
}

export const putReview = (data) => async dispatch => {
    const { user_id, fishing_spot_id, review, rating, id } = data;
    const res = await csrfFetch(`/api/reviews/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ user_id, fishing_spot_id, review, rating, id })
    });

    if (res.ok) {
        const payload = await res.json();
        dispatch(updateReview( payload.updatedReview ));
        return payload;
    }
}

export const deleteReview = (id) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${id}`, {
        method: 'DELETE'
    });

    if (res.ok) {
        dispatch(removeReview(id))
    }
};
