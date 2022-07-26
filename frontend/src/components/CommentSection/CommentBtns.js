export default function CommentBtns ({ sessionUser, comment, setShowEdit, handleDelete }) {

    let commentBtns = null;
    if (sessionUser && sessionUser.id === comment.user_id) {
        commentBtns = (
            <div>
                <button
                    type='button'
                    className='comment-btns'
                    onClick={() => setShowEdit(true)}
                >Edit</button>
                <button
                    type='button'
                    className='comment-btns'
                    onClick={handleDelete}
                >Delete</button>
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
