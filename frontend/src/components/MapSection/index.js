import GoogleMapReact from 'google-map-react';
import SpotMarker from './SpotMarker';
import { useState, useEffect } from 'react';

import './MapSection.css';

function MapSection() {
    const [currLat, setCurrLat] = useState(0);
    const [currLong, setCurrLong] = useState(0);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            setCurrLat(pos.coords.latitude);
            setCurrLong(pos.coords.longitude);
        });
    }, [])

    return (
        <div className="map--div">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_KEY }}
                defaultCenter={{ lat: 59.95, lng: 30.33 }}
                defaultZoom={ 11 }
            >
                <SpotMarker
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    )
}

export default MapSection;
