import { useSelector } from "react-redux";

export default function NewSpotMarker ({ setShowModal, setCreateLat, setCreateLng, lat, lng }) {
    const sessionUser = useSelector(state => state.session.user);

    const handleClick = () => {
        setShowModal(true);
        setCreateLat(lat);
        setCreateLng(lng);
    }

    let content;

    if (sessionUser) {
        content = (
            <>
                <h4>Would you like to make one?</h4>
                <button
                    className='newSpot--btn'
                    type='button'
                    onClick={handleClick}
                >Click Here!</button>
            </>
        )
    } else {
        content = (
            <>
                <h4>Login to Create one!</h4>
            </>
        )
    }

    return (
        <div className='newSpot-main--div'>
            <h4>No spot here!</h4>
            {content}
        </div>
    )
}
