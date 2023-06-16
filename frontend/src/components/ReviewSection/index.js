import { useDispatch, useSelector } from 'react-redux';
import { getReviews, deleteReview, putReview } from "../../store/reviews";
import ReviewForm from './ReviewForm';
import { useEffect, useState } from 'react';
import ('./Reviews.css')

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
        dispatch(getReviews(id));
    }, [ dispatch, id ]);

    useEffect(() => {
        setRating(prevRating)
        setNewReview(prevReview)
    }, [ showEdit, prevRating, prevReview ])

    useEffect(() => {
        if (sessionUser) {
            reviews.forEach(review => {
                if (review.user_id === sessionUser.id) {
                    setHasReview(true);
                };
            });
        };
    }, [ reviews, sessionUser ])

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
        <div className='reviews-main--div'>
            <h2 className='reviews-title--h2'>User Reviews</h2>
            {(sessionUser && !hasReview) && (
                <ReviewForm sessionUser={sessionUser} id={id}/>
            )}
            {reviews.map(review => {
                if (showEdit && review.user_id === sessionUser.id) {
                    if (prevReview !== review.review) {
                        setPrevReview(review.review)
                    }
                    if (prevRating !== review.rating) {
                        setPrevRating(review.rating)
                    }
                    return (
                        <div className='new-review--div' key={review.id}>
                            <ul>
                                {errors.map(error => {
                                    return <li>{error}</li>
                                })}
                            </ul>
                            <form
                                className='review-edit--form'
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
                                    className='edit-review--textarea'
                                    maxLength={255}
                                    value={newReview}
                                    onChange={e => setNewReview(e.target.value)}
                                />
                                <div className='review-edit-rating--div'>
                                    <h5 className='review-edit-rating--header'>Rating: </h5>
                                    <select
                                        className='review-edit-rating--select'
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
                                </div>
                                <div className='review-edit-btns--div'>
                                    <button className='edit-review--btn' onClick={() => setShowEdit(false)}>Cancel</button>
                                    <button type='submit' className='edit-review--btn'>Submit</button>
                                </div>
                            </form>
                        </div>
                    )
                } else {

                    let time;
                    if (review.createdAt === review.updatedAt) {
                        let createdDate = new Date(review.createdAt);

                        time = (
                            <p className="comment_time--p">
                                {`Posted: ${createdDate.toDateString()}`}
                            </p>
                        )
                    } else {
                        let updatedDate = new Date(review.updatedAt);

                        time = (
                            <p className="comment_time--p">
                                {`Updated: ${updatedDate.toDateString()}`}
                            </p>
                        )
                    }

                    return (
                        <div key={review.id} className='review--div'>
                            <div className='comment-username-time--div'>
                                <h6 className='comment-username--header'>{review.user.username}</h6>
                                {time}
                            </div>
                            <p className='review-content--p'>{review.review}</p>
                            <h5 className='review-rating--header'>Rating: {review.rating}</h5>
                            {(sessionUser && review.user_id === sessionUser.id) && (
                                <div>
                                    <button className='review-edit-delete--btn' type='button' onClick={() => setShowEdit(!showEdit)}>Edit</button>
                                    <button className='review-edit-delete--btn' type='button' onClick={() => handleDelete(review.id)}>Delete</button>
                                </div>
                            )}
                        </div>
                    )
                }
            })}
        </div>
    )
}
