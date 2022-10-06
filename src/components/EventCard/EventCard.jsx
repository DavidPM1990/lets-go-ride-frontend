import * as React from 'react';
import './EventCard.css'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';

import astun from './assets/astun.png'
import baqueira from './assets/baqueira-beret-logo.jpg'
import boitaull from './assets/boitaull-logo.png'
import candanchu from './assets/candanchu.jpg'
import cerler from './assets/cerler.jpg'
import formigal from './assets/formigal-logo.jpg'
import lapinilla from './assets/lapinilla.jpg'
import panticosa from './assets/panticosa.png'
import sierranevada from './assets/sierranevada.jpeg'
import valdesqui from './assets/valdesqui.jpg'

const ExpandMore = styled((props) => {

    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function EventCard({ oneEvent }) {
    const [expanded, setExpanded] = React.useState(false);
    const navigate = useNavigate()
    let logo
    let startDate
    let endDate
    switch (oneEvent.place) {
        case 'Baqueira-Beret':
            logo = baqueira;
            break;
        case 'Boí Taüll':
            logo = boitaull;
            break;
        case 'Sierra Nevada':
            logo = sierranevada;
            break;
        case 'Cerler':
            logo = cerler;
            break;
        case 'Formigal':
            logo = formigal;
            break;
        case 'Panticosa':
            logo = panticosa;
            break;
        case 'Astún':
            logo = astun;
            break;
        case 'Candanchú':
            logo = candanchu;
            break;
        case 'La Pinilla':
            logo = lapinilla;
            break;
        case 'Valdesquí':
            logo = valdesqui;
            break;
    }

    const navigateTo = (id) => {
        navigate(`/event/${id}`)
    }

    function formatDates() {
        startDate = new Date(oneEvent.startDate).toDateString()
        endDate = new Date(oneEvent.endDate).toDateString()
    }

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    formatDates()

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                className='CardHeader'
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">

                    </Avatar>
                }

                title={oneEvent.name}

                subheader={<Typography sx={{ color: 'white' }}>{oneEvent.author.username}</Typography>}

            />
            <CardMedia
                width='10%'
                contain='strict'
                component="img"
                height="194"
                image={logo}
                style={{
                    height: '200px',
                    width: '350px'
                }}
                alt="logo"
            />

            <CardActions className='expand' disableSpacing>


                <ExpandMore

                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon className='expandIcon' />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent className='cardContent'>
                    <Typography variant="subtitle2" ><strong>From:</strong>  {startDate}<br /> <strong>to:</strong>  {endDate}</Typography>
                    <Typography variant="subtitle1" ><br />
                        <br />
                        <strong>Level:</strong> {oneEvent.eventLevel}<br />
                        Do you wanna join this event?
                    </Typography><br />
                    <div className='cardButton'>
                        <Button style={{ color: 'white', border: '1px solid white' }} onClick={() => navigateTo(oneEvent._id)}>See details!</Button>
                    </div>
                </CardContent>
            </Collapse>
        </Card >
    );
}

