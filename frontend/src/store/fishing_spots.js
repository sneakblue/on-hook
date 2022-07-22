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
            const newState = {...state};
            action.payload.forEach(fishingSpot => {
                newState[fishingSpot.id] = fishingSpot;
            });
            return newState;
        }
        case LOAD_FISHING_SPOT: {
            const newState = { ...state };
            newState[action.payload.id] = action.payload;
            return newState;
        }
        case CREATE_FISHING_SPOT: {
            const newState = { ...state };
            let newImages = [];
            if (action.images.image !== undefined) {
                newImages.push(action.images.image.url)
            } else {
                action.images.newImages.forEach(image => {
                    newImages.push(image.url);
                });
            }
            action.payload.fishing_spot.images = newImages;
            newState[action.payload.fishing_spot.id] = action.payload.fishing_spot;
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

const addFishingSpot = (payload, images) => ({
    type: CREATE_FISHING_SPOT,
    payload,
    images
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
    const { user_id, name, description, city, state, country, lat, lng, images, image } = data;
    const fishingRes = await csrfFetch('/api/fishing_spots', {
        method: 'POST',
        body: JSON.stringify({ user_id, city, state, country, lat, lng, name, description })
    });

    if (fishingRes.ok) {
        const payload = await fishingRes.json();
        const formData = new FormData();

        if (images && images.length !== 1) {
            for (let i = 0; i < images.length; i++) {
                formData.append("images", images[i]);
            }
        }

        if (image) formData.append("image", image);
        let res;
        if (images.length !== 1) {
            res = await csrfFetch(`/api/images/create-mult/${payload.fishing_spot.id}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                body: formData,
            })
        } else {
            res = await csrfFetch(`/api/images/create-single/${payload.fishing_spot.id}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                body: formData,
            });
        }

        const newImages = await res.json();

        dispatch(addFishingSpot(payload, newImages));
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
