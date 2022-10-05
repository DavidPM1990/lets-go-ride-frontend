import * as React from 'react';
import { IconButton } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

import { AuthContext } from '../../context/auth.context'
import EventAxios from '../../services/eventAxios';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { useState, useContext } from 'react';
import Comments from '../Comments/Comments'
import ApresSki from '../ApresSki/ApresSki';
import Freestyle from '../freestyle/freestyle';
import FormComments from '../FormComments/FormComments';
import snowboard from './assets/snowboard.jpg'

function Event({ event, updateEvent }) {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false)

    const eventInstance = new EventAxios()

    function deleteEvent(id) {
        console.log("Deleted------->", id)
        eventInstance
            .deleteEvent(id)
            .then(() => navigate("/events"))
            .catch((err) => console.log(err))
    }

    function addToFavourites() {
        console.log("soy el user", user._id)
        eventInstance.joinEvent(user._id, event._id)
            .then(console.log("Me he unido :)"))
            .catch((err) => console.log(err))
    }

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

                <Button onClick={addToFavourites}>Join this event!</Button>
            </CardActions>
        </Card>

        {
            showForm && <FormComments updateEvent={updateEvent} event={event} handleForm={handleForm} />
        }



        <Comments comments={event.comments} updateEvent={updateEvent} event={event} />
    </>
    )
}
export default Event









