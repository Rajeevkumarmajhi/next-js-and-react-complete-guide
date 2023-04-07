import { useContext, useEffect, useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import NotificationContext from '@/store/notification-context';

function Comments(props) {
    const { eventId } = props;

    const [showComments, setShowComments] = useState(false);
    const [comments , setComments] = useState([]);
    const [isFetchingComments, setIsFetchingComments] = useState(false);
    const notificationCtx = useContext(NotificationContext);

    useEffect(()=>{
        if(showComments){
            setIsFetchingComments(true);
            fetch('/api/comments/'+eventId)
            .then(res => res.json())
            .then(data => {
                setComments(data.comments);
                setIsFetchingComments(false);
            });
        }
    },[showComments])

    function toggleCommentsHandler() {
        setShowComments((prevStatus) => !prevStatus);
    }

    function addCommentHandler(commentData) {
        notificationCtx.showNotification({
            title:"Sending Comment",
            message:"Your comment is being stored",
            status:"pending",
        });
        fetch('/api/comments/'+eventId, {
            method:"POST",
            body:JSON.stringify(commentData),
            headers:{
                'Content-Type':"application/json"
            },
        }).then((response => {
            if(response.ok){
                return response.json()
            }
            return response.json().then(data => {
                throw new Error( data.message || 'Something went wrong');
            })
        })).then( (data) => {
            notificationCtx.showNotification({
                title:"Success",
                message:"Your comment was saved",
                status:"success",
            });
            if(showComments){
                setShowComments(false);
                setTimeout(() => {
                    setShowComments(true);
                }, 2000);
            }
            
        }).catch(error =>{
            notificationCtx.showNotification({
                title:"Error!",
                message:error.message || "Comment adding failed!",
                status:"error",
            });
        });;
    }

    return (
        <section className={classes.comments}>
            <button onClick={toggleCommentsHandler}>
                {showComments ? 'Hide' : 'Show'} Comments
            </button>
            {showComments && <NewComment onAddComment={addCommentHandler} />}
            {showComments && !isFetchingComments && <CommentList items={comments} />}
            {showComments && isFetchingComments && <p>Loading...</p>}
        </section>
    );
}

export default Comments;