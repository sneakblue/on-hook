import Footer from "./footer";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFishingSpots } from "../../store/fishing_spots";

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
                <h1>HomePage</h1>
                {fishingSpots.map(fishingSpot => {
                    return (
                        <div key={fishingSpot.id}>
                            <h4>{fishingSpot.name}</h4>
                            <img alt={fishingSpot.id} src={fishingSpot.pic}/>
                        </div>
                    )
                })}
            </div>
            <Footer />
        </div>
    )
}
