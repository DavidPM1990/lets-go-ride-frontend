import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import snowboard from './assets/snowboard.jpg'
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import CreateIcon from '@mui/icons-material/Create';
import EventAxios from '../../services/eventAxios';
import { useNavigate } from 'react-router-dom';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Comments from '../Comments/Comments'
import { Button, Form } from 'react-bootstrap';
import CommentAxios from '../../services/comments.services';


function Event({ event }) {

    const navigate = useNavigate();

    const eventInstance = new EventAxios()
    const commentInstance = new CommentAxios()


    function deleteEvent(id) {
        console.log("----------->", id)
        eventInstance
            .deleteEvent(id)
            .then(() => navigate("/events"))
            .catch((err) => console.log(err))

    }

    function postComment() {
        const id = event._id
        commentInstance.createComment()
    }

    function commentEvent() { }

    function updateOneEvent(id) {
        navigate(`/event/update/${id}`)
    }
    // CHECKEAR DOCU DE MATERIALS UI
    return (<>
        <Card sx={{ maxWidth: 645 }}>
            <CardMedia
                component="img"
                height="140"
                image={snowboard}
                alt="image"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {event.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {event.description}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton onClick={() => deleteEvent(event._id)}> <DeleteIcon /></IconButton>
                <IconButton> <GradeIcon /></IconButton>
                <IconButton onClick={() => updateOneEvent(event._id)}> <CreateIcon /></IconButton>
                <IconButton onClick={commentEvent}> <ChatBubbleIcon /></IconButton>
            </CardActions>
        </Card>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><strong>Make your comment</strong></Form.Label>
            <Form.Control as="textarea" name='description' rows={4} placeholder="Description of event" />
            <Button onClick={postComment}>Post comment</Button>
        </Form.Group>


        <Comments comments={event.comments} />
    </>
    );
}
export default Event
