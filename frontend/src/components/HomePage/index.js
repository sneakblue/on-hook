import Footer from "./footer";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFishingSpots } from "../../store/fishing_spots";
import { Link } from "react-router-dom";

import './HomePage.css';

export default function HomePage() {
    const dispatch = useDispatch();
    const fishingSpots = useSelector(state => Object.values(state.fishing_spots));

    useEffect(() => {
        dispatch(getFishingSpots());
    }, [dispatch]);

    return (
        <div className='Homepage__main--div'>
            <div className='Homepage__content--div'>
                <h1 className='Homepage__title--h1'>Current Fishing Spots</h1>
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
