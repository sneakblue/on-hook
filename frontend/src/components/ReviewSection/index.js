import { useDispatch, useSelector } from 'react-redux';
import { getReviews, deleteReview, putReview } from "../../store/reviews";
import ReviewForm from './ReviewForm';
import { useEffect, useState } from 'react';

export default function ReviewSection({ id }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const reviews = useSelector(state => Object.values(state.reviews));
    const [ hasReview, setHasReview ] = useState(false);
    const [ showEdit, setShowEdit ] = useState(false);
    const [ prevReview, setPrevReview ] = useState('');
    const [ newReview, setNewReview ] = useState('');
    const [ rating, setRating ] = useState(1);
    const [ prevRating, setPrevRating ] = useState(1);
    const [ errors, setErrors ] = useState([]);

    useEffect(() => {
        dispatch(getReviews());
    }, [ dispatch ]);

    useEffect(() => {
        setRating(prevRating)
        setNewReview(prevReview)
    }, [ showEdit, prevRating, prevReview ])

    useEffect(() => {
        if (sessionUser) {
            reviews.forEach(review => {
                if (review.user_id === sessionUser.id && review.fishing_spot_id === Number(id)) {
                    setHasReview(true);
                };
            });
        };
    }, [ reviews, id, sessionUser ])

    if (!reviews) return null;

    const validateErrors = () => {
        let validationErrors = []
        if (prevReview.length === 0) {
            validationErrors.push('Must provide a review.')
        }
        if (prevReview.length < 3) {
            validationErrors.push('Review must be longer than 3 characters.');
        }
        setErrors(validationErrors);
        return validationErrors;
    }

    const handleDelete = async (id) => {
        await dispatch(deleteReview(id));
        setHasReview(false);
    }

    return (
        <div>
            <h1>Review Section</h1>
            {(sessionUser && !hasReview) && (
                <ReviewForm sessionUser={sessionUser} id={id}/>
            )}
            {reviews.map(review => {
                if (Number(review.fishing_spot_id) === Number(id)) {
                    console.log('going into show edit form')
                    if (showEdit && review.user_id === sessionUser.id) {
                        console.log('inside show edit')
                        if (prevReview !== review.review) {
                            setPrevReview(review.review)
                        }
                        if (prevRating !== review.rating) {
                            setPrevRating(review.rating)
                        }
                        return (
                            <div key={review.id}>
                                <ul>
                                    {errors.map(error => {
                                        return <li>{error}</li>
                                    })}
                                </ul>
                                <form
                                    onSubmit={ async e => {
                                        e.preventDefault();
                                        validateErrors();
                                        if (errors.length === 0) {
                                            const editReview = {
                                                id: review.id,
                                                review: newReview,
                                                rating,
                                                user_id: sessionUser.id,
                                                fishing_spot_id: id
                                            }
                                            await dispatch(putReview(editReview));
                                            setShowEdit(false);
                                        }
                                    }}
                                >
                                    <textarea
                                        required={true}
                                        value={newReview}
                                        onChange={e => setNewReview(e.target.value)}
                                    />
                                    <select
                                        value={rating}
                                        onChange={e => setRating(e.target.value)}
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
                                    <button type='submit'>Submit</button>
                                </form>
                            </div>
                        )
                    } else {
                        return (
                            <div key={review.id}>
                                <p>{review.review}</p>
                                <h5>{review.rating}</h5>
                                {(sessionUser && review.user_id === sessionUser.id) && (
                                    <div>
                                        <button type='button' onClick={() => showEdit === false ? setShowEdit(true) : setShowEdit(false)}>Edit</button>
                                        <button type='button' onClick={() => handleDelete(review.id)}>Delete</button>
                                    </div>
                                )}
                            </div>
                        )
                    }
                } else return null;
            })}
        </div>
    )
}
