import { Loader } from "@googlemaps/js-api-loader"

function MapSection() {
    console.log(process.env.REACT_APP_MAPS_KEY)
    const loader = new Loader({
        apiKey: process.env.REACT_APP_MAPS_KEY,
        version: "weekly",
    });

    loader.load().then(() => {
        let map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644 },
            zoom: 8,
        });
    });


    return (
        <div id="map">
        </div>
    )
}

export default MapSection;
