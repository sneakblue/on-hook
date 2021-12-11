import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function SpotMarker ({ fishingSpot }) {
    const [showInfo, setShowInfo] = useState(false);

    let xtraInfo;

    useEffect(() => {

    }, [showInfo])

    if (showInfo) {
        xtraInfo = (
            <Link to={`/fishing-spot/${fishingSpot.id}`} className='xtraInfo--Link'>
                <div className='xtraInfo--div'>
                    {fishingSpot.name}
                    <img className='xtraInfo--img' alt='xtraimg' src={fishingSpot.pic} />
                    <h5>{fishingSpot.description}</h5>
                </div>
            </Link>
        )
    } else {
        xtraInfo = (
            <>
            </>
        )
    }

    return (
        <div
            className='marker--div'
            onMouseEnter={() => showInfo === false ? setShowInfo(true) : setShowInfo(false)}
            onMouseLeave={() => showInfo === true ? setShowInfo(false) : setShowInfo(true)}
        >
            {/* <h4>{fishingSpot.name}</h4> */}
            {xtraInfo}
        </div>
    )
}
