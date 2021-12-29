import GoogleMapReact from 'google-map-react';
import SpotMarker from './SpotMarker';
import { Modal } from '../../context/Modal';
import { useState, useEffect } from 'react';

import './MapSection.css';

function MapSection({ fishingSpots }) {
    const [currLat, setCurrLat] = useState(0);
    const [currLong, setCurrLong] = useState(0);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            setCurrLat(pos.coords.latitude);
            setCurrLong(pos.coords.longitude);
        });
    }, [])

    // const onClick = ({x, y, lat, lng, event}) => {

    // };

    return (
        <div className="map--div">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_KEY }}
                center={{ lat: currLat, lng: currLong }}
                defaultZoom={ 10.5 }
                onClick={onClick}

            >
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
            </GoogleMapReact>
        </div>
    )
}

export default MapSection;
