import { csrfFetch } from "./csrf.js";


const LOAD_FISHING_SPOTS =  'fishing_spots/LOAD_FISHING_SPOTS';
const LOAD_FISHING_SPOT = 'fishing_spots/LOAD_FISHING_SPOT';
const CREATE_FISHING_SPOT = 'fishing_spots/CREATE_FISHING_SPOT';
const DELETE_FISHING_SPOT = 'fishing_spots/DELETE_FISHING_SPOT';
const UPDATE_FISHING_SPOT = 'fishing_spots/UPDATE_FISHING_SPOT';

const initialState = {};

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case LOAD_FISHING_SPOTS: {
            const newFishingSpots = {};
            action.payload.forEach(fishingSpot => {
                newFishingSpots[fishingSpot.id] = fishingSpot;
            });
            return { ...state, ...newFishingSpots};
        }
        case LOAD_FISHING_SPOT: {
            const newState = { ...state };
            newState[action.payload.id] = action.payload;
            return newState;
        }
        case CREATE_FISHING_SPOT: {
            const newState = { ...state };
            newState[action.fishing_spot.id] = action.fishing_spot;
            return newState;
        }
        case DELETE_FISHING_SPOT: {
            const newState = { ...state };
            delete newState[action.id]
            return newState;
        }
        case UPDATE_FISHING_SPOT: {
            const newState = { ...state };
            newState[action.payload.id] = action.payload
            return newState;
        }
        default: {
            return state;
        }
    }
}

const loadFishingSpots = (payload) => ({
    type: LOAD_FISHING_SPOTS,
    payload
});

const loadFishingSpot = (payload) => ({
    type: LOAD_FISHING_SPOT,
    payload
});

const addFishingSpot = (payload) => ({
    type: CREATE_FISHING_SPOT,
    payload
});

const removeFishingSpot = (id) => ({
    type: DELETE_FISHING_SPOT,
    id
});

const updateFishingSpot = (payload) => ({
    type: UPDATE_FISHING_SPOT,
    payload
});

export const getFishingSpots = () => async dispatch => {
    const res = await csrfFetch('/api/fishing_spots');

    if (res.ok) {
        const data = await res.json();
        dispatch(loadFishingSpots(data.fishing_spots))
    }
}

export const getFishingSpot = (id) => async dispatch => {
    const res = await csrfFetch(`/api/fishing_spots/${id}`);

    if (res.ok) {
        const data = await res.json();
        dispatch(loadFishingSpot(data.fishing_spot));
    }
}

export const createFishingSpot = (data) => async dispatch => {
    const { user_id, name, pic, description, city, state, country, lat, lng } = data;
    const res = await csrfFetch('/api/fishing_spots', {
        method: 'POST',
        body: JSON.stringify({ user_id, pic, city, state, country, lat, lng, name, description })
    });

    if (res.ok) {
        const payload = await res.json();
        dispatch(addFishingSpot(payload));
        return payload;
    }
}

export const deleteFishingSpot = (id) => async dispatch => {
    const res = await csrfFetch(`/api/fishing_spots/${id}`, {
        method: 'DELETE'
    });

    if (res.ok) {
        dispatch(removeFishingSpot(id))
    }
};

export const renewFishingSpot = (data) => async dispatch => {
    const { user_id, name, pic, description, city, state, country, lat, lng, id } = data;
    const res = await csrfFetch(`/api/fishing_spots/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ user_id, pic, city, state, country, lat, lng, name, description })
    });

    if (res.ok) {
        const payload = await res.json();
        dispatch(updateFishingSpot(payload.updatedSpot));
        return payload;
    }
}
