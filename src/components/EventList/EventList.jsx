import "./EventListPage.css";
import { Button, Card } from 'react-bootstrap';
import EventAxios from "../../services/eventAxios";
import { useState, useEffect } from 'react';


function EventCard() {


    const callEventAxios = new EventAxios()
    const [events, setevents] = useState([]);


    const findEvents = () => {
        callEventAxios.getAllEvents()
            .then((eventsArr) => {
                setevents(eventsArr);
                console.log(events)
            })
            .catch((e) => {
                console.error(e);
            })
    }
    useEffect(() => {
        findEvents()
    }, []);

    return (
        <>

            {events.map((allEvents) => {
                return (
                    <Card key={allEvents.name} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>{allEvents.name}</Card.Title>
                            <Card.Text>
                                {allEvents.author}
                                {allEvents.place}

                            </Card.Text>
                            <Button variant="primary">Join</Button>
                        </Card.Body>
                    </Card >
                )
            })}

        </>

    )
}

export default EventCard























