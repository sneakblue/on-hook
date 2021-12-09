import GoogleMapReact from 'google-map-react';

function MapSection() {
    console.log(process.env.REACT_APP_MAPS_KEY)


    return (
        <div className="map--div">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_KEY }}
                defaultCenter={{ lat: 59.95, lng: 30.33 }}
                defaultZoom={ 11 }
            >
                
            </GoogleMapReact>
        </div>
    )
}

export default MapSection;
