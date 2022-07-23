import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import CommentBtns from "./CommentBtns";
import { putComment, deleteComment } from "../../store/comments";


export default function CommentCard ({ comment, sessionUser, fishingSpot }) {
    const dispatch = useDispatch();
    const [ showEdit, setShowEdit ] = useState(false);
    const [ editingComment, setEditingComment ] = useState(0);
    const [ updatedComment, setUpdatedComment ] = useState('');

    const handlePut = () => {
        const newComment = {
            id: comment.id,
            user_id: sessionUser.id,
            fishing_spot_id: fishingSpot.id,
            comment: updatedComment
        }
        dispatch(putComment(newComment));
        setShowEdit(false);
        setUpdatedComment('');
    }

    const handleDelete = () => {
        dispatch(deleteComment(comment.id));
    }

    let commentContent = null;
    if (showEdit && editingComment === comment.id) {
        commentContent = (
            <div
                key={comment.id}
                className='comment-edit--div'
            >
                <textarea
                    value={updatedComment}
                    className='comment-edit--textarea'
                    onChange={(e) => setUpdatedComment(e.target.value)}
                />
                <button
                    type='submit'
                    className='comment-btns'
                    onClick={() => handlePut(comment.id)}
                >Submit</button>
            </div>
        )
    } else {
        commentContent = (
            <div
                className='comment-div'
                key={comment.id}
            >
                <p>{comment.comment}</p>
                <CommentBtns sessionUser={sessionUser} comment={comment} setShowEdit={setShowEdit} setEditingComment={setEditingComment} setUpdatedComment={setUpdatedComment} handleDelete={handleDelete}/>
            </div>
        )
    }

    return (
        <>
            {commentContent}
        </>
    )
}
