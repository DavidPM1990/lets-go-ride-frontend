import { Button, Card } from 'react-bootstrap';
// import mountainImage from '../../../public/matterhorn-BLOG-mountains';


function EventCard({ oneEvent }) {

    return (<>
        <Card key={oneEvent.name} style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1441039995991-e5c1178e605a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80" />
            <Card.Body>
                <Card.Title>{oneEvent.name}</Card.Title>
                <Card.Text>
                    <p>{oneEvent.author}</p>
                    <p>{oneEvent.place}</p>

                </Card.Text>
                <Button variant="dark">Join This Event!</Button>
            </Card.Body>
        </Card >
    </>)
}

export default EventCard;