import { useDispatch, useSelector } from 'react-redux';
import { getReviews, deleteReview } from "../../store/reviews";
import ReviewForm from './ReviewForm';
import { useEffect, useState } from 'react';

export default function ReviewSection({ id }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const reviews = useSelector(state => Object.values(state.reviews));
    const [ hasReview, setHasReview ] = useState(false);

    useEffect(() => {
        dispatch(getReviews());
    }, [ dispatch ])

    useEffect(() => {
        if (sessionUser) {
            reviews.forEach(review => {
                if (review.user_id === sessionUser.id && review.fishing_spot_id === Number(id)) {
                    setHasReview(true);
                    console.log('changing hasreview')
                };
            });
        };
    }, [ reviews, id, sessionUser ])

    if (!reviews) return null;

    const handleDelete = (id) => {
        dispatch(deleteReview(id));
        setHasReview(false);
        console.log(hasReview)
    }

    return (
        <div>
            <h1>Review Section</h1>
            {!hasReview && (
                <ReviewForm sessionUser={sessionUser} id={id}/>
            )}
            {reviews.map(review => {
                if (Number(review.fishing_spot_id) === Number(id)) {
                    return (
                        <div key={review.id}>
                            <p>{review.review}</p>
                            <h5>{review.rating}</h5>
                            {(sessionUser && review.user_id === sessionUser.id) && (
                                <div>
                                    <button type='button'>Edit</button>
                                    <button type='button' onClick={() => handleDelete(review.id)}>Delete</button>
                                </div>
                            )}
                        </div>
                    )
                } else return null;
            })}
        </div>
    )
}
