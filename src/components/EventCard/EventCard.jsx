import * as React from 'react';
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

    const navigateTo = (id) => {
        navigate(`/event/${id}`)
    }

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">

                    </Avatar>
                }

                title={oneEvent.name}
                subheader={oneEvent.eventLevel}

            />
            <CardMedia
                component="img"
                height="194"
                image="https://media.istockphoto.com/photos/chamonix-mont-blanc-france-picture-id1167494047?k=20&m=1167494047&s=612x612&w=0&h=pHJuC_Rj4l-6EPj8VmDNAu7YW6JimFWEvWmuLfKXkzc="
                alt="Paella dish"
            />

            <CardActions disableSpacing>


                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="subtitle2" ><strong>From:</strong>  {oneEvent.endDate}<br /> <strong>to:</strong>  {oneEvent.startDate}</Typography>
                    <Typography variant="subtitle1" ><br />
                        Do you wanna join this event?  {oneEvent.eventLevel}
                        Author: {oneEvent.author.username}
                    </Typography><br />

                    <Button onClick={() => navigateTo(oneEvent._id)} variant="outlined">See details!</Button>

                </CardContent>
            </Collapse>
        </Card >
    );
}

