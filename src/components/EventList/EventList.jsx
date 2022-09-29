import "./EventListPage.css";
import EventAxios from "../../services/eventAxios";
import { useState, useEffect } from 'react';
// import EventCard from "../EventCard/EventCard"
import RecipeReviewCard from "../EventCard/EventCard"


function EventList() {


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

            {events.map((oneEvent) => {
                return (
                    <RecipeReviewCard oneEvent={oneEvent} />
                )
            })}

        </>

    )
}

export default EventList























