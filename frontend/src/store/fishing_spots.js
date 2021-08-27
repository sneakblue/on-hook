import { csrfFetch } from "./csrf.js";


const LOAD_FISHING_SPOTS =  'fishing_spots/LOAD_FISHING_SPOTS';

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
        default: {
            return state;
        }
    }
}

const loadFishingSpots = (payload) => ({
    type: LOAD_FISHING_SPOTS,
    payload
})

export const getFishingSpots = () => async dispatch => {
    const res = await csrfFetch('/api/fishing_spots');

    if (res.ok) {
        const data = await res.json();
        dispatch(loadFishingSpots(data.fishing_spots))
    }
}
