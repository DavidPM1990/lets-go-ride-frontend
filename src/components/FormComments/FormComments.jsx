import CommentAxios from '../../services/comments.services';
import { Button, Form } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/auth.context'

function FormComments({ updateEvent, event }) {

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
                console.log("soy el nuevo------->", newComment)
                updateEvent()
            })
    }

    const updateNewComment = (eventHTML) => {
        const { name, value } = eventHTML.target;
        setNewComment({ ...newComment, [name]: value });
    };

    return (
        <>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><strong>Make your comment</strong></Form.Label>
                <Form.Control as="textarea" onChange={updateNewComment} name='body' rows={4} />
                <Button onClick={postComment}>Post comment</Button>
            </Form.Group>
        </>
    )

}

export default FormComments