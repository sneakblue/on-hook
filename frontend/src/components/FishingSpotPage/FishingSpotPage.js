import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getFishingSpot, deleteFishingSpot } from '../../store/fishing_spots';
import FishingSpotForm from '../FishingSpotForm';
import './FishingSpotPage.css';

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
            <div className='user__edit-delete-btn--div'>
                <button type='button' onClick={() => setShowEdit(!showEdit)}>Edit</button>
                <button type='button' onClick={handleDelete}>Delete</button>
            </div>
        )
    } else {
        content = (
            <>
            </>
        )
    }

    return (
        <div className='fishing-spot__content--div'>
            <div className='fishing-spot__content--div'>
                <div className='fishing-spot__title--div'>
                    <h2>{fishingSpot.name}</h2>
                    <h3>{fishingSpot.city}, {fishingSpot.state}</h3>
                </div>
                <div className='fishing-spot-img--div'>
                    <img src={fishingSpot.pic} className='fishing-spot-img--img' alt={fishingSpot.id}/>
                </div>
                <p>{fishingSpot.description}</p>
                {content}
                {showEdit && <FishingSpotForm isEdit={isEdit} fishingSpot={fishingSpot} />}
            </div>
        </div>
    )
}
