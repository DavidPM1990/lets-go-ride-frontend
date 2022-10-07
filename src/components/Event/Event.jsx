import { AuthContext } from '../../context/auth.context'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useState, useContext } from 'react';

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

import EventAxios from '../../services/eventAxios';
import Comments from '../Comments/Comments'
import ApresSki from '../ApresSki/ApresSki';
import Freestyle from '../freestyle/freestyle';
import FormComments from '../FormComments/FormComments';
import snowboard from './assets/snowboard.jpg'

function Event({ event, updateEvent, plano }) {

    let startDate;
    let endDate;
    let showButton;
    let showUpdateButton;
    let showFavButton;
    const { user, authentication } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false)

    const eventInstance = new EventAxios()

    function formatDates() {
        startDate = new Date(event.startDate).toDateString()
        endDate = new Date(event.endDate).toDateString()
    }

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

    identify()
    formatDates()

    return (<>
        <Card className='flexCard' sx={{ maxWidth: 645 }}>
            <CardMedia
                component="img"
                height="340"
                image={plano}
                alt="image"
            />
            <CardContent className='cardContentColor'>
                <Typography className='bckColorTypo' gutterBottom variant="h5" component="div">
                    {event.name}
                </Typography>
                <Typography className='bckColorTypo' gutterBottom variant="h5" component="div">
                    <strong>Author:</strong> {event.author.username}
                </Typography>
                <Typography className='bckColorTypo' variant="body2">
                    <strong>Level:</strong> {event.eventLevel}
                </Typography>
                <Typography className='bckColorTypo' variant="body2" >
                    <strong>Place:</strong> {event.place}
                </Typography>
                <br />
                <Typography className='bckColorTypo' variant="body2" >
                    {event.description}
                </Typography>
                <br />
                <Typography className='bckColorTypo' variant="body2" >
                    <strong>Starts:</strong> {startDate}
                </Typography>
                <Typography className='bckColorTypo' variant="body2" >
                    <strong>To:</strong> {endDate} :)

                </Typography>
                <br />
                <Typography className='bckColorTypo' variant="body2" >
                    <strong><p>Users who joined this:</p></strong>

                    {event.usersList.map(el => {
                        return (
                            <p key={el._id}><span>{el.username}</span></p>
                        )
                    })}
                </Typography>
                <br />
                <Typography className='bckColorTypo' variant="body2" >
                    <ApresSki party={event.apresSki} />
                    <Freestyle freestyle={event.freestyle} />
                </Typography>
            </CardContent>
            <CardActions className='lastRow'>

                <div className='icons'>
                    {
                        showButton && <IconButton onClick={() => deleteEvent(event._id)}> <DeleteIcon /></IconButton>
                    }
                </div>
                <div className='icons'>
                    <IconButton onClick={handleForm}> <ChatBubbleIcon /></IconButton>
                </div>
                <div className='icons'>
                    {
                        showUpdateButton && <IconButton onClick={() => updateOneEvent(event._id)}> <CreateIcon /></IconButton>
                    }
                </div>

            </CardActions>
        </Card>
        <div className='joinButton'>
            {
                showFavButton && <Button style={{ color: 'white', border: '1px solid white', backgroundColor: 'transparent' }} onClick={addToFavourites}>
                    {
                        user.eventsJoined.map(event => event._id).includes(event._id) ? 'Leave this event :(' : 'Join this event :)'
                    }
                </Button>
            }
        </div>

        {
            showForm && <FormComments updateEvent={updateEvent} event={event} handleForm={handleForm} />
        }
        <Comments comments={event.comments} updateEvent={updateEvent} event={event} />
    </>
    )
}
export default Event

