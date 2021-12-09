import GoogleMapReact from 'google-map-react';
import SpotMarker from './SpotMarker';

function MapSection() {
    console.log(process.env.REACT_APP_MAPS_KEY)


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
