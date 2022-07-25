import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getComments } from '../../store/comments';
import CommentCard from './CommentCard';
import CreateComment from './CreateComment';
import './CommentSection.css';

export default function CommentSection({ fishingSpot, sessionUser }) {
    const dispatch = useDispatch();
    const comments = useSelector((state) => Object.values(state.comments));

    useEffect(() => {
        dispatch(getComments(fishingSpot.id));
    }, [dispatch, fishingSpot]);

    return (
        <div className='main-comments-div'>
            <h3>Comments</h3>

            {comments.map(comment => <CommentCard
                key={comment.id}
                comment={comment}
                sessionUser={sessionUser}
                fishingSpot={fishingSpot}
            />)}
            <CreateComment sessionUser={sessionUser} fishingSpot={fishingSpot} />
        </div>
    )
}
