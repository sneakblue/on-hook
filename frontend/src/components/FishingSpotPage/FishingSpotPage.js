import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getFishingSpot, deleteFishingSpot } from '../../store/fishing_spots';
import FishingSpotForm from '../FishingSpotForm';
import { Modal } from '../../context/Modal';
import ReviewSection from '../ReviewSection';
import CommentSection from '../CommentSection';
import './FishingSpotPage.css';

export default function FishingSpotPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const [ showEdit, setShowEdit ] = useState(false);
    const fishingSpot = useSelector(state => state.fishing_spots[id]);
    const sessionUser = useSelector(state => state.session.user);
    const reviews = useSelector(state => Object.values(state.reviews))
    const isEdit = true;

    useEffect(() => {
        dispatch(getFishingSpot(id));
    }, [dispatch, id]);
    let average = 'No User Ratings';
    let fishingSpotReviews = [];
    reviews.forEach(review => {
        if (review.fishing_spot_id === Number(id)) {
            fishingSpotReviews.push(review);
        }
    })
    let sum = 0;
    fishingSpotReviews.forEach(review => {
        sum += review.rating;
    })
    if (sum !== 0) {
        average = Math.floor(sum / fishingSpotReviews.length);
    }

    if (!fishingSpot) return null;

    const handleDelete = () => {
        dispatch(deleteFishingSpot(id));
        history.push('/home');
    }

    let content;
    if (sessionUser && sessionUser.id === fishingSpot.user_id) {
        content = (
            <div className='user__edit-delete-btn--div'>
                <button type='button' className='edit-delete--btn' onClick={() => setShowEdit(!showEdit)}>Edit</button>
                <button type='button' className='edit-delete--btn' onClick={handleDelete}>Delete</button>
            </div>
        )
    } else {
        content = (
            <>
            </>
        )
    }

    return (
        <div className='fishing-spot__main--div'>
            <div className='fishing-spot__content--div'>
                <div className='fishing-spot__info--div'>
                    <div className='fishing-spot__title--div'>
                        <h2>{fishingSpot.name}</h2>
                        <h3>{fishingSpot.city}, {fishingSpot.state}</h3>
                    </div>
                    <div className='fishing-spot-img--div'>
                        <img src={fishingSpot.pic} className='fishing-spot-img--img' alt={fishingSpot.id}/>
                    </div>
                    <h4>Description</h4>
                    <p className='fishing-spot__description'>{fishingSpot.description}</p>
                    <h4>Rating: {average}</h4>
                    {content}
                    {showEdit && <Modal onClose={() => setShowEdit(false)}>
                            <FishingSpotForm isEdit={isEdit} fishingSpot={fishingSpot} />
                        </Modal>
                    }
                </div>
                <ReviewSection id={id} />
            </div>
            <div className='fishing-spot__comments--div'>
                {/* <CommentSection /> */}
            </div>
        </div>
    )
}
