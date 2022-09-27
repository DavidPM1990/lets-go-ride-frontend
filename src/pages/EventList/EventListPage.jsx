// Poner componentes de la barra de busqueda y la lista de eventos
import EventAxios from "../../services/eventAxios";
import { useState } from 'react';


function EventListPage() {

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




    return (
        <>
            {events.map((event) => {
                return (<>
                    <h1>Name of event: {event.name}</h1>
                    <h2>Author: {event.author}</h2>
                </>
                )

            })}

        </>

    )
}

export default EventListPage;