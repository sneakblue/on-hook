import { useEffect, useState } from "react";


export default function SpotMarker ({ fishingSpot }) {
    const [showInfo, setShowInfo] = useState(false);

    let xtraInfo;

    useEffect(() => {

    }, [showInfo])

    if (showInfo) {
        xtraInfo = (
            <div className='xtraInfo--div'>
                {fishingSpot.name}
                <img className='xtraInfo--img' alt='xtraimg' src={fishingSpot.pic} />
            </div>
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
