import { useState } from "react";
import { useDispatch } from "react-redux";
import { createReview } from "../../store/reviews";

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

    const handleSubmit = (e) => {
        e.preventDefault();
        validateErrors();
        if (errors.length === 0) {
            const newReview = {
                review,
                rating,
                user_id: sessionUser.id,
                fishing_spot_id: id
            }
            dispatch(createReview(newReview));

        }

    }

    return (
        <>
            <h2>Review form</h2>
            <ul>
                {errors.map(error => {
                    return <li>{error}</li>
                })}
            </ul>
            <form
                onSubmit={handleSubmit}
            >
                <textarea
                    required={true}
                    value={review}
                    onChange={e => setReview(e.target.value)}
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
        </>
    )
}
