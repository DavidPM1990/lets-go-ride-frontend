import './FormComments.css'
import CommentAxios from '../../services/comments.services';
import { Button, Form } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/auth.context'

function FormComments({ updateEvent, event, handleForm }) {

    const { user } = useContext(AuthContext)

    const [newComment, setNewComment] = useState({
        eventId: event._id,
        author: user._id
    });

    const commentInstance = new CommentAxios()

    function postComment() {
        commentInstance
            .createComment(newComment)
            .then((newComment) => {
                updateEvent()
                handleForm()
            })
    }

    const updateNewComment = (eventHTML) => {
        const { name, value } = eventHTML.target;
        setNewComment({ ...newComment, [name]: value });
    };

    return (
        <>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <div className='formLabel'>
                    <Form.Label className='makeCommentButton'><strong>Make your comment</strong></Form.Label>
                    <Form.Control className='formControl' as="textarea" onChange={updateNewComment} name='body' rows={4} />
                </div>
                <div className='postButton'>
                    <Button style={{ color: 'white', border: '1px solid white', backgroundColor: 'transparent' }} onClick={postComment}>Post comment</Button>
                </div>
            </Form.Group>
        </>
    )

}

export default FormComments