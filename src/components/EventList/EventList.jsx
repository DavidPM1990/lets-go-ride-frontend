import "./EventListPage.css";
// import { useState, useEffect } from 'react';
// import EventAxios from "../../services/eventAxios";
import EventCard from "../EventCard/EventCard"

function EventList({ events }) {

    return (
        <>
            <div className='cardFlex'>
                {events.map((oneEvent) => {
                    return (
                        <div className='cardSize' key={oneEvent._id}>
                            <EventCard oneEvent={oneEvent} />
                        </div>
                    )
                })}
            </div>
        </>

    )
}

export default EventList


