import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getComments, createComment, putComment, deleteComment } from '../../store/comments';

import './CommentSection.css';

export default function CommentSection({ fishingSpot, sessionUser }) {
    const dispatch = useDispatch();
    const comments = useSelector((state) => Object.values(state.comments));
    const [ isUser, setIsUser ] = useState(false);
    const [ comment, setComment ] = useState('');
    const [ showEdit, setShowEdit ] = useState(false);
    const [ editingComment, setEditingComment ] = useState(0);
    const [ updatedComment, setUpdatedComment ] = useState('');



    useEffect(() => {
        dispatch(getComments(fishingSpot.id));
        if (sessionUser) {
            setIsUser(true);
        };
    }, [ dispatch, fishingSpot, sessionUser ]);

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

    const handlePut = (id) => {
        const newComment = {
            id,
            user_id: sessionUser.id,
            fishing_spot_id: fishingSpot.id,
            comment: updatedComment
        }
        dispatch(putComment(newComment));
        setShowEdit(false);
        setUpdatedComment('');
    }

    const handleDelete = (id) => {
        dispatch(deleteComment(id));
    }

    let content = null;

    if (isUser) {
        content = (
            <>
                <div className='post-comment-div'>
                    <h4>Post a Comment</h4>
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
        <div className='main-comments-div'>
            <h3>Comments</h3>
            {content}
            {comments.map(comment => {
                let commentBtns = null;
                if (sessionUser && sessionUser.id === comment.user_id) {
                    commentBtns = (
                        <div>
                            <button type='button' className='comment-btns' onClick={() => {
                                setShowEdit(true);
                                setEditingComment(comment.id);
                                setUpdatedComment(comment.comment)
                            }}>Edit</button>
                            <button type='button' className='comment-btns' onClick={() => handleDelete(comment.id)}>Delete</button>
                        </div>
                    )
                } else {
                    commentBtns = (
                        <>
                        </>
                    )
                }

                let commentContent = null;
                if (showEdit && editingComment === comment.id) {
                    commentContent = (
                        <div key={comment.id} className='comment-edit--div'>
                            <textarea value={updatedComment} className='comment-edit--textarea' onChange={(e) => setUpdatedComment(e.target.value)}/>
                            <button type='submit' className='comment-btns' onClick={() => handlePut(comment.id)}>Submit</button>
                        </div>
                    )
                } else {
                    commentContent = (
                        <div className='comment-div' key={comment.id}>
                            <p>{comment.comment}</p>
                            {commentBtns}
                        </div>
                    )
                }

                return (
                    <>
                        {commentContent}
                    </>
                )
            })}
        </div>
    )
}
