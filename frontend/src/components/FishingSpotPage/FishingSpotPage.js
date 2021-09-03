import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getFishingSpot, deleteFishingSpot, renewFishingSpot } from '../../store/fishing_spots';
import { Modal } from '../../context/Modal';
import ReviewSection from '../ReviewSection';
// import CommentSection from '../CommentSection';
import './FishingSpotPage.css';

export default function FishingSpotPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const fishingSpot = useSelector(state => state.fishing_spots[id]);
    const [ showEdit, setShowEdit ] = useState(false);
    const [ pic, setPic ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ name, setName ] = useState('');
    const [ city, setCity ] = useState('');
    const [ state, setState ] = useState('');
    const [ country, setCountry ] = useState('');
    const [ lat, setLat ] = useState(0.0);
    const [ lng, setLng ] = useState(0.0);
    const [ errors, setErrors ] = useState([]);
    const sessionUser = useSelector(state => state.session.user);
    const reviews = useSelector(state => Object.values(state.reviews))

    useEffect(() => {
        dispatch(getFishingSpot(id));
    }, [dispatch, id]);

    useEffect(() => {
        setPic(fishingSpot?.pic);
        setName(fishingSpot?.name);
        setCity(fishingSpot?.city);
        setState(fishingSpot?.state);
        setCountry(fishingSpot?.country);
        setLat(fishingSpot?.lat);
        setLng(fishingSpot?.lng);
        setDescription(fishingSpot?.description);
    }, [showEdit, fishingSpot?.pic, fishingSpot?.name, fishingSpot?.city, fishingSpot?.state, fishingSpot?.country, fishingSpot?.lat, fishingSpot?.lng, fishingSpot?.description ])

    let average = 'No User Ratings';
    let fishingSpotReviews = [];
    reviews.forEach(review => {
        if (review.fishing_spot_id === Number(id)) {
            fishingSpotReviews.push(review);
        }
    });

    const checkErrors = () => {
        const errors = [];
        if (name.length < 3) {
            errors.push('Name must be 3 or more characters');
        } else if (name.length === 0) {
            errors.push('Must provide a name');
        };
        if (pic.length === 0) {
            errors.push('Must provide a picture url')
        };
        if (description.length === 0) {
            errors.push('Must provide a description')
        };
        if (city.length === 0) {
            errors.push('Must provide a city')
        };
        if (state.length === 0) {
            errors.push('Must provide a state')
        };
        if (country.length === 0) {
            errors.push('Must provide a country')
        };
        setErrors(errors);
        return errors;
    }

    let sum = 0;
    fishingSpotReviews.forEach(review => {
        sum += review.rating;
    })
    if (sum !== 0) {
        average = (sum / fishingSpotReviews.length).toFixed(1);
    }

    if (!fishingSpot) return null;

    const handleDelete = () => {
        dispatch(deleteFishingSpot(id));
        history.push('/home');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let submitErrors = checkErrors();
        if (submitErrors.length === 0) {
            const newFishingSpot = {
                id: fishingSpot.id,
                user_id: fishingSpot.user_id,
                name,
                pic,
                description,
                city,
                state,
                country,
                lat,
                lng
            }
            await dispatch(renewFishingSpot(newFishingSpot));
            setShowEdit(false);
        }
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
                    <>
            <ul className='errors'>
                {errors.map((error) => <li key={error}>{error}</li>)}
            </ul>
            <form
                onSubmit={handleSubmit}
                className='fishing-spot--form'
            >
                <div className='form__input--div'>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        name='name'
                        value={name}
                        required={true}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className='form__input--div'>
                    <label htmlFor='description'>Description</label>
                    <textarea
                        name='description'
                        value={description}
                        wrap='soft'
                        spellCheck='true'
                        required={true}
                        maxLength={255}
                        className='description--input'
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div className='form__input--div'>
                    <label htmlFor='pic'>Picture</label>
                    <input
                        type='url'
                        name='pic'
                        value={pic}
                        required={true}
                        onChange={e => setPic(e.target.value)}
                    />
                </div>
                <div className='form__input--div'>
                    <label htmlFor='city'>City</label>
                    <input
                        type='text'
                        name='city'
                        value={city}
                        required={true}
                        onChange={e => setCity(e.target.value)}
                    />
                </div>
                <div className='form__input--div'>
                    <label htmlFor='state'>State</label>
                    <input
                        type='text'
                        name='state'
                        value={state}
                        required={true}
                        onChange={e => setState(e.target.value)}
                    />
                </div>
                <div className='form__input--div'>
                    <label htmlFor='country'>Country</label>
                    <input
                        type='text'
                        name='country'
                        value={country}
                        required={true}
                        onChange={e => setCountry(e.target.value)}
                    />
                </div>
                <div className='form__input--div'>
                    <label htmlFor='lat'>Lattitude</label>
                    <input
                        type='number'
                        name='lat'
                        value={lat}
                        required={true}
                        onChange={e => setLat(e.target.value)}
                    />
                </div>
                <div className='form__input--div'>
                    <label htmlFor='lng'>Longitude</label>
                    <input
                        type='number'
                        name='lng'
                        value={lng}
                        required={true}
                        onChange={e => setLng(e.target.value)}
                    />
                </div>
                <button type='submit' className='form__submit--btn'>Submit</button>
            </form>
        </>
                        </Modal>
                    }
                </div>
                <ReviewSection id={id} />
            </div>
            <div className='fishing-spot__comments--div'>
                {/* <CommentSection /> */}
            </div>
            {/* <Footer /> */}
        </div>
    )
}
