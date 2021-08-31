import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from "../../store/reviews";
import { useEffect } from 'react';

export default function ReviewSection({ id }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const reviews = useSelector(state => Object.values(state.reviews));

    useEffect(() => {
        dispatch(getReviews());
    }, [ dispatch ])

    if (!reviews) return null;

    return (
        <div>
            <h1>Review Section</h1>
            {reviews.map(review => {
                if (Number(review.fishing_spot_id) === Number(id)) {
                    return (
                        <div key={review.id}>
                            <p>{review.review}</p>
                            <h5>{review.rating}</h5>
                            {(sessionUser && review.user_id === sessionUser.id) && (
                                <div>
                                    <button type='button'>Edit</button>
                                    <button type='button'>Delete</button>
                                </div>
                            )}
                        </div>
                    )
                } else return null;
            })}
        </div>
    )
}
