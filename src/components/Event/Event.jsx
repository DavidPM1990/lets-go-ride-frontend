import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import snowboard from './assets/snowboard.jpg'
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CreateIcon from '@mui/icons-material/Create';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

import EventAxios from '../../services/eventAxios';
import { useNavigate } from 'react-router-dom';
import Comments from '../Comments/Comments'
import { Button, Form } from 'react-bootstrap';

import { useState, useContext } from 'react';
import ApresSki from '../ApresSki/ApresSki';
import Freestyle from '../freestyle/freestyle';
import FormComments from '../FormComments/FormComments';

function Event({ event, updateEvent }) {

    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false)

    const eventInstance = new EventAxios()

    // const [newComment, setNewComment] = useState({
    //     eventId: event._id,
    //     author: user._id
    // });


    function deleteEvent(id) {
        console.log("Deleted------->", id)
        eventInstance
            .deleteEvent(id)
            .then(() => navigate("/events"))
            .catch((err) => console.log(err))
    }



    // function addToFavourites() {

    // }

    // let comments = false

    function handleForm() {
        setShowForm(!showForm)
    }

    function updateOneEvent(id) {
        navigate(`/event/update/${id}`)
    }
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
                <Typography gutterBottom variant="h5" component="div">
                    {event.author.username}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {event.eventLevel}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {event.place}
                </Typography>
                <br />
                <Typography variant="body2" color="text.secondary">
                    {event.description}
                </Typography>
                <br />
                <Typography variant="body2" color="text.secondary">
                    {event.startDate}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {event.endDate}
                </Typography>
                <br />
                <ApresSki party={event.apresSki} />
                <Freestyle freestyle={event.freestyle} />
            </CardContent>
            <CardActions>
                <IconButton onClick={() => deleteEvent(event._id)}> <DeleteIcon /></IconButton>
                <IconButton onClick={() => updateOneEvent(event._id)}> <CreateIcon /></IconButton>
                <IconButton onClick={handleForm}> <ChatBubbleIcon /></IconButton>


                <Button>Join this event!</Button>
                {/* aqui abajo hay que hacer la llamada al back */}
            </CardActions>
        </Card>

        {
            showForm && <FormComments updateEvent={updateEvent} event={event} />
        }



        <Comments comments={event.comments} />
    </>
    )
}
export default Event









