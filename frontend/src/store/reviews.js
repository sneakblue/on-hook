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
            const newState = { ...state };
            action.payload.forEach(review => {
                newState[review.id] = review
            });
            return newState;
        }
        case LOAD_REVIEW: {
            const newState = { ...state };
            return newState;
        }
        case CREATE_REVIEW: {
            const newState = { ...state };
            return newState;
        }
        case DELETE_REVIEW: {
            const newState = { ...state };
            return newState;
        }
        case UPDATE_REVIEW: {
            const newState = { ...state };
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

const loadReview = (payload) => ({
    type: LOAD_REVIEW,
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

export const getReviews = () => async dispatch => {
    const res = await csrfFetch('/api/reviews');

    if (res.ok) {
        const data = await res.json();
        dispatch(loadReviews(data.reviews))
    }
}
