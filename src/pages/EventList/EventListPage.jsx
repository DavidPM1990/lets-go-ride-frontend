import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import EventAxios from "../../services/eventAxios";
import EventList from '../../components/EventList/EventList.jsx'
import SearchBar from '../../components/Searchbar/Searchbar'

function EventListPage() {
    const [events, setevents] = useState(null);
    const [_events, setcopy] = useState(null);


    const callEventAxios = new EventAxios()

    const findEvents = () => {
        callEventAxios
            .getAllEvents()
            .then((eventsArr) => {
                setevents(eventsArr);
            })
            .catch((e) => {
                console.error(e);
            })
    }

    useEffect(() => {
        findEvents()
        console.log(events)
        setcopy(events)
        console.log(_events)
    }, []);

    if (!events) {
        return (
            <Spinner animation='border' role='status'>
                <span className='visually-hidden'>Loading...</span>
            </Spinner>
        )
    }
    else return (
        <>
            <SearchBar events={_events} setevents={setevents} />
            <EventList events={events} setevents={setevents} />
        </>
    )
}
export default EventListPage;








