import "./EventListPage.css";
import EventAxios from "../../services/eventAxios";
import { useState, useEffect } from 'react';
// import EventCard from "../EventCard/EventCard"
import EventCard from "../EventCard/EventCard"


function EventList() {


    const callEventAxios = new EventAxios()
    const [events, setevents] = useState([]);


    const findEvents = () => {
        callEventAxios.getAllEvents()
            .then((eventsArr) => {
                setevents(eventsArr);
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

            {events.map((oneEvent) => {
                return (
                    <div key={oneEvent._id}>
                        <EventCard oneEvent={oneEvent} />
                    </div>
                )
            })}

        </>

    )
}

export default EventList


