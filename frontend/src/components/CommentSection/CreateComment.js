import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { createComment } from '../../store/comments';

export default function CreateComment ({sessionUser, fishingSpot}) {
    const dispatch = useDispatch();

    const [ comment, setComment ] = useState('');


    const handlePost = (e) => {
        e.preventDefault();
        if (comment.length === 0) return;
        const newComment = {
            user_id: sessionUser.id,
            fishing_spot_id: fishingSpot.id,
            comment
        }
        dispatch(createComment(newComment));
        setComment('');
    }

    let content = null;

    if (sessionUser) {
        content = (
            <>
                <div className='post-comment-div'>
                    <h4 className='post-comment--header'>Post a Comment</h4>
                    <form className='post-comment-form' onSubmit={handlePost}>
                        <textarea
                            className='post-comment-textarea'
                            value={comment}

                            onChange={(e) => setComment(e.target.value)}
                        />
                        <button
                            type='submit'
                            className='comment-btns'
                        >Post</button>
                    </form>
                </div>
            </>
        )
    } else {
        content = (
            <>
            </>
        )
    }

    return (
        <>
            {content}
        </>
    )
}
