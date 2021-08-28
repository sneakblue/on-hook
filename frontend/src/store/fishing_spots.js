import { csrfFetch } from "./csrf.js";


const LOAD_FISHING_SPOTS =  'fishing_spots/LOAD_FISHING_SPOTS';
const CREATE_FISHING_SPOT = 'fishing_spots/CREATE_FISHING_SPOT';

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
        case CREATE_FISHING_SPOT: {
            const newState = { ...state }
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

const addFishingSpot = (payload) => ({
    type: CREATE_FISHING_SPOT,
    payload
})

export const getFishingSpots = () => async dispatch => {
    const res = await csrfFetch('/api/fishing_spots');

    if (res.ok) {
        const data = await res.json();
        dispatch(loadFishingSpots(data.fishing_spots))
    }
}

export const createFishingSpot = (data) => async dispatch => {
    const { user_id, name, pic, description, city, state, country, lat, lng } = data;
    const res = await csrfFetch('/api/fishing_spots', {
        method: 'POST',
        body: JSON.stringify({ user_id, pic, city, state, country, lat, lng, name, description })
    });

    if (res.ok) {
        const payload = res.json();
        console.log(payload);
        dispatch(addFishingSpot(payload));
        return payload;
    }
}
