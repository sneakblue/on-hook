import Footer from "./footer";
import MapSection from "../MapSection";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFishingSpots } from "../../store/fishing_spots";
import { Link } from "react-router-dom";

import './HomePage.css';

export default function HomePage() {
    const dispatch = useDispatch();
    const fishingSpots = useSelector(state => Object.values(state.fishing_spots));
    const [currLat, setCurrLat] = useState(0);
    const [ currLong, setCurrLong ] = useState(0);
    const [nearby, setNearby] = useState([]);

    useEffect(() => {
        dispatch(getFishingSpots());
        navigator.geolocation.getCurrentPosition((pos) => {
            setCurrLat(pos.coords.latitude);
            setCurrLong(pos.coords.longitude);
        });
    }, [dispatch]);

    useEffect(() => {
        let newNearby = [];
        fishingSpots.forEach(spot => {

        })
    }, [])

    return (
        <div className='Homepage__main--div'>
            <div className='Homepage__content--div'>
                <h1 className='Homepage__title--h1'>Nearby Fishing Spots</h1>
                {(currLat !== 0 && currLong !== 0) && <MapSection
                    fishingSpots={fishingSpots} />}
                <div className='Homepage__main-fishing-spot--div'>
                    {fishingSpots.map(fishingSpot => {
                        return (
                            <div key={fishingSpot.id} className='home__fishing-spot--div'>
                                <Link to={`/fishing-spot/${fishingSpot.id}`}>
                                    <div className='home__fishing-spot-img--div'>
                                        <img alt={fishingSpot.id} src={fishingSpot.pic} className='home__fishing-spot--img'/>
                                    </div>
                                </Link>
                                <div>
                                    <h4>{fishingSpot.name}</h4>
                                    <h5>{fishingSpot.city}, {fishingSpot.state}</h5>
                                    <h5>{fishingSpot.lat}, {fishingSpot.lng}</h5>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}
