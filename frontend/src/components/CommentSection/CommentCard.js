import { useState } from "react";
import { useDispatch } from "react-redux";
import CommentBtns from "./CommentBtns";
import { putComment, deleteComment } from "../../store/comments";


export default function CommentCard ({ comment, sessionUser, fishingSpot }) {
    const dispatch = useDispatch();
    const [ showEdit, setShowEdit ] = useState(false);
    const [ updatedComment, setUpdatedComment ] = useState(comment.comment);

    const handlePut = () => {
        const newComment = {
            id: comment.id,
            user_id: sessionUser.id,
            fishing_spot_id: fishingSpot.id,
            comment: updatedComment
        }
        dispatch(putComment(newComment));
        setShowEdit(false);
    }

    const handleDelete = () => {
        dispatch(deleteComment(comment.id));
    }

    let commentContent = null;
    if (showEdit) {
        commentContent = (
            <div
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
                    onClick={handlePut}
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
                <CommentBtns
                    sessionUser={sessionUser}
                    comment={comment}
                    setShowEdit={setShowEdit}
                    handleDelete={handleDelete}
                />
            </div>
        )
    }

    return (
        <>
            {commentContent}
        </>
    )
}
