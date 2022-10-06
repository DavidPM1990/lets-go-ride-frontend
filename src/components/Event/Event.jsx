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
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import EventAxios from '../../services/eventAxios';

import { useState, useContext } from 'react';
import Comments from '../Comments/Comments'
import ApresSki from '../ApresSki/ApresSki';
import Freestyle from '../freestyle/freestyle';
import FormComments from '../FormComments/FormComments';
import snowboard from './assets/snowboard.jpg'

function Event({ event, updateEvent, plano }) {

    let startDate
    let endDate

    function formatDates() {
        // const prueba = event.startDate.toLocaleString("en-US", { timeZone: "Australia/Adelaide" })
        // console.log("Hola soy la fecha", prueba)
        startDate = new Date(event.startDate).toDateString()
        endDate = new Date(event.endDate).toDateString()
    }

    const { user, authentication } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false)
    const [toggleButton, setToggleButton] = useState('Join this event :)')

    const eventInstance = new EventAxios()

    let showButton;
    let showUpdateButton;
    let showFavButton;

    function identify() {
        if (user._id === event.author._id) {
            console.log("soy el creador del evento")
            showButton = true
            showUpdateButton = true
            showFavButton = false
        } else {
            console.log("NO soy el creador del evento")
            showButton = false
            showUpdateButton = false
            showFavButton = true
        }
    }

    identify()
    formatDates()



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
            .then(() => {
                console.log("Me he unido al evento :)")
                updateEvent()
                authentication()
            })
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
                image={plano}
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
                    {startDate}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {endDate}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <span>Users who joined this:</span>
                    <br />
                    {event.usersList.map(el => {
                        return (
                            <span key={el._id}><span>{el.username}</span></span>
                        )
                    })}
                </Typography>
                <br />
                <ApresSki party={event.apresSki} />
                <Freestyle freestyle={event.freestyle} />
            </CardContent>
            <CardActions>

                {
                    showButton && <IconButton onClick={() => deleteEvent(event._id)}> <DeleteIcon /></IconButton>
                }

                {
                    showUpdateButton && <IconButton onClick={() => updateOneEvent(event._id)}> <CreateIcon /></IconButton>
                }

                <IconButton onClick={handleForm}> <ChatBubbleIcon /></IconButton>

                {
                    showFavButton && <Button onClick={addToFavourites}>
                        {
                            user.eventsJoined.map(event => event._id).includes(event._id) ? 'Leave this event :(' : 'Join this event :)'
                        }
                    </Button>
                }

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

