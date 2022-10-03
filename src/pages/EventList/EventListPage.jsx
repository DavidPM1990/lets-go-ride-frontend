import { useState, useEffect } from 'react';
import EventAxios from "../../services/eventAxios";
import EventList from '../../components/EventList/EventList.jsx'
import SearchBar from '../../components/Searchbar/Searchbar'

function EventListPage() {
    const [events, setevents] = useState([]);
    const _events = [...events]


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
    }, []);


    return (<>
        <SearchBar events={_events} setevents={setevents} />
        <EventList events={events} setevents={setevents} />
    </>
    )
}
export default EventListPage;








