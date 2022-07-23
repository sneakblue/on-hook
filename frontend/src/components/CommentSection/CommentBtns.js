

export default function CommentBtns ({ sessionUser, comment, setShowEdit, setEditingComment, setUpdatedComment, handleDelete }) {

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

    return (
        <>
            {commentBtns}
        </>
    )
}
