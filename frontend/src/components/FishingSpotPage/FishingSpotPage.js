import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getFishingSpot, deleteFishingSpot } from '../../store/fishing_spots';
import FishingSpotForm from '../FishingSpotForm';

export default function FishingSpotPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const [ showEdit, setShowEdit ] = useState(false);
    const fishingSpot = useSelector(state => state.fishing_spots[id]);
    const sessionUser = useSelector(state => state.session.user);
    const isEdit = true;

    useEffect(() => {
        dispatch(getFishingSpot(id));
    }, [dispatch, id])

    if (!fishingSpot) return null;

    const handleDelete = () => {
        dispatch(deleteFishingSpot(id));
        history.push('/home');
    }

    let content;
    if (sessionUser && sessionUser.id === fishingSpot.user_id) {
        content = (
            <>
                <button type='button' onClick={() => setShowEdit(!showEdit)}>Edit</button>
                <button type='button' onClick={handleDelete}>Delete</button>
            </>
        )
    } else {
        content = (
            <>
            </>
        )
    }

    return (
        <div>
            <h2>{fishingSpot.name}</h2>
            <h3>{fishingSpot.city}, {fishingSpot.state}</h3>
            <img src={fishingSpot.pic} alt={fishingSpot.id}/>
            <p>{fishingSpot.description}</p>
            {content}
            {showEdit && <FishingSpotForm isEdit={isEdit} fishingSpot={fishingSpot} />}
        </div>
    )
}
