import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

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
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={oneEvent.name}
                subheader={oneEvent.author.username}

            />
            <CardMedia
                component="img"
                height="194"
                image="https://media.istockphoto.com/photos/chamonix-mont-blanc-france-picture-id1167494047?k=20&m=1167494047&s=612x612&w=0&h=pHJuC_Rj4l-6EPj8VmDNAu7YW6JimFWEvWmuLfKXkzc="
                alt="Paella dish"
            />

            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
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
                        Do you wanna join this event?  {oneEvent.author.username}
                    </Typography><br />
                    <Link to={`/${oneEvent._id}`}>
                        <Button variant="outlined">join!</Button>
                    </Link>
                </CardContent>
            </Collapse>
        </Card >
    );
}









































// ------------------------------------------------------------------------------------------
// import { Button, Card } from 'react-bootstrap';
// import mountainImage from '../../../public/matterhorn-BLOG-mountains';


// function EventCard({ oneEvent }) {

//     return (<>
//         <Card key={oneEvent.name} style={{ width: '18rem' }}>
//             <Card.Img variant="top" src="https://images.unsplash.com/photo-1441039995991-e5c1178e605a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80" />
//             <Card.Body>
//                 <Card.Title>{oneEvent.name}</Card.Title>
//                 <Card.Text>
//                     <p>{oneEvent.author}</p>
//                     <p>{oneEvent.place}</p>

//                 </Card.Text>
//                 <Button variant="dark">Join This Event!</Button>
//             </Card.Body>
//         </Card >
//     </>)
// }

// export default EventCard;