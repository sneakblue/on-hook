import { useState } from "react";
import { useDispatch } from "react-redux";
import { createReview } from "../../store/reviews";
import './Reviews.css';

export default function ReviewForm({ sessionUser, id }) {
    const dispatch = useDispatch();
    const [ review, setReview ] = useState('');
    const [ rating, setRating ] = useState(1);
    const [ errors, setErrors ] = useState([]);

    const validateErrors = () => {
        let validationErrors = []
        if (review.length === 0) {
            validationErrors.push('Must provide a review.')
        }
        if (review.length < 3) {
            validationErrors.push('Review must be longer than 3 characters.');
        }
        setErrors(validationErrors);
        return validationErrors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        validateErrors();
        if (errors.length === 0) {
            const newReview = {
                review,
                rating,
                user_id: sessionUser.id,
                fishing_spot_id: id
            }
            await dispatch(createReview(newReview));
        }
    }

    return (
        <div className='new-review--div'>
            <h2>Write a Review</h2>
            <ul>
                {errors.map(error => {
                    return <li>{error}</li>
                })}
            </ul>
            <form
                onSubmit={handleSubmit}
                className='review-edit--form'
            >
                <textarea
                    required={true}
                    value={review}
                    maxLength={255}
                    onChange={e => setReview(e.target.value)}
                />
                <h5>Rating</h5>
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
                <button type='submit' className='edit-review--btn'>Submit</button>
            </form>
        </div>
    )
}
