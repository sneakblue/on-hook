

export default function NewSpotMarker ({ setShowModal, setCreateLat, setCreateLng, lat, lng }) {
    
    const handleClick = () => {
        setShowModal(true);
        setCreateLat(lat);
        setCreateLng(lng);
    }

    return (
        <div className='newSpot-main--div'>
            <h4>No spot here!</h4>
            <h4>Would you like to make one?</h4>
            <button
                className='newSpot--btn'
                type='button'
                onClick={handleClick}
            >Click Here!</button>
        </div>
    )
}
