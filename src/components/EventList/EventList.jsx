import "./EventListPage.css";
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


