import Footer from "./footer";
import MapSection from "../MapSection";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFishingSpots } from "../../store/fishing_spots";
import { Link } from "react-router-dom";
import defaultImage from '../../images/fishing-rod.jpg';

import './HomePage.css';

function distanceCalc(lat1, long1, lat2, long2) {
    const earthRadKm = 6371;
    // const earthRadMi = 3959;

    const degToRadians = (degree) => {
        return degree * Math.PI / 180;
    }

    const dLat = degToRadians(lat2 - lat1);
    const dLon = degToRadians(long2 - long1);

    lat1 = degToRadians(lat1);
    lat2 = degToRadians(lat2);

    const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return earthRadKm * c;
}

export default function HomePage() {
    const dispatch = useDispatch();
    const fishingSpots = useSelector(state => Object.values(state.fishing_spots));
    const [currLat, setCurrLat] = useState(40.17751);
    const [ currLong, setCurrLong ] = useState(-105.10269);

    useEffect(() => {
        dispatch(getFishingSpots());
        navigator.geolocation.getCurrentPosition((pos) => {
            setCurrLat(pos.coords.latitude);
            setCurrLong(pos.coords.longitude);
        });
    }, [dispatch]);

    let nearby = [];
    if (fishingSpots.length > 0) {
        fishingSpots.forEach(spot => {
            let res = distanceCalc(currLat, currLong, spot.lat, spot.lng);
            if (res < 20) {
                nearby.push(spot)
            }
        })
    }
    if (fishingSpots.length > 0 && nearby.length === 0) {
        for (let i  = 0; i < 5; i++) {
            if (fishingSpots[i]) {
                nearby.push(fishingSpots[i])
            }
        }
    }

    return (
        <div className='Homepage__main--div'>
            <span className="nav-lead-span"></span>
            <div className='Homepage__content--div'>
                <h1 className='Homepage__title--h1'>Nearby Fishing Spots</h1>
                {(currLat !== 0 && currLong !== 0) && <MapSection
                    fishingSpots={fishingSpots}
                    currLat={currLat}
                    currLong={currLong}
                />}
                <div className='Homepage__main-fishing-spot--div'>
                    {nearby.length > 0 && nearby.map(fishingSpot => {
                        return (
                            <Link to={`/fishing-spot/${fishingSpot.id}`} className='home_fishing-spot-outerlink'>
                                <div key={fishingSpot.id} className='home__fishing-spot--div'>
                                        <div className='home__fishing-spot-img--div'>
                                            <img alt={fishingSpot.id} src={fishingSpot.images.length > 0 ? fishingSpot.images[0].url : defaultImage} className='home__fishing-spot--img'/>
                                        </div>
                                    <div>
                                        <h4>{fishingSpot.name}</h4>
                                        <h5>{fishingSpot.city}, {fishingSpot.state}</h5>
                                        <h5>{fishingSpot.lat}, {fishingSpot.lng}</h5>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}
