import GoogleMapReact from 'google-map-react';
import SpotMarker from './SpotMarker';
import NewSpotMarker from './NewSpotMarker';
import FishingSpotForm from '../FishingSpotForm';
import { Modal } from '../../context/Modal';
import { useState, useEffect } from 'react';

import './MapSection.css';

function MapSection({ fishingSpots, currLat, currLong }) {
    const [mapLat, setCurrLat] = useState(currLat ? currLat : 0);
    const [mapLong, setCurrLong] = useState(currLong ? currLong : 0);
    const [newLat, setNewLat] = useState(0);
    const [newLong, setNewLong] = useState(0);
    const [createLat, setCreateLat] = useState(0);
    const [createLng, setCreateLng] = useState(0);
    const [showModal, setShowModal] = useState(false);
    // const [nearby, setNearby] = useState([]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            setCurrLat(pos.coords.latitude);
            setCurrLong(pos.coords.longitude);
        }, (err) => console.warn(`ERROR(${err.code}) ${err.message}`));
    }, [])

    useEffect(() => {

    }, [showModal])

    // useEffect(() => {
    //     console.log(fishingSpots)
    // }, [])

    const onClick = ({x, y, lat, lng, event}) => {
        if (newLat === 0) {
            setNewLat(lat);
        } else {
            setNewLat(0);
        }
        if (newLong === 0) {
            setNewLong(lng);
        } else {
            setNewLong(0);
        }
    };

    return (
        <div className="map--div">
            {(mapLat !== 0 && mapLong !== 0) && <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_KEY }}
                center={{ lat: currLat, lng: currLong }}
                defaultZoom={ 10.5 }
                onClick={onClick}
            >
                {(newLat !== 0 && newLong !== 0) && <NewSpotMarker
                    lat={newLat}
                    lng={newLong}
                    setShowModal={setShowModal}
                    setCreateLat={setCreateLat}
                    setCreateLng={setCreateLng}
                />}
                {fishingSpots.map((fishingSpot) => {
                    if (fishingSpot.lat === 0 || fishingSpot.lng === 0) {
                        return (
                            <>
                            </>
                        )
                    }
                    return (
                        <SpotMarker
                            lat={fishingSpot.lat}
                            lng={fishingSpot.lng}
                            text='spot'
                            key={fishingSpot.lat}
                            fishingSpot={fishingSpot}
                        />
                    )
                })}
            </GoogleMapReact>}
            {showModal && <Modal onClose={() => {
                setShowModal(false);
                setNewLat(0);
            }}>
                <FishingSpotForm
                    mapLat={createLat}
                    mapLng={createLng}
                    isMapEdit={true}
                    setShowModal={setShowModal}
                    setNewLat={setNewLat}
                />
            </Modal>}
        </div>
    )
}

export default MapSection;
