import './EventID.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Event from '../../components/Event/Event';
import EventAxios from '../../services/eventAxios';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const EventIDPage = () => {
    const { id } = useParams();
    const [event, setevent] = useState();
    const navigate = useNavigate();
    const eventAxios = new EventAxios();

    function updateEvent() {
        eventAxios
            .getOneEventId(id)
            .then((event) => {
                console.log('Soy el evento :)', event)
                setevent(event);
            });
    }

    useEffect(() => {
        updateEvent()
    }, []);

    const deleteEvent = (id) => {
        eventAxios.deleteEvent(id).then(() => {
            navigate('/events');
        });
    };
    if (!event) {    //usar isloading del contexto
        return (
            <Spinner animation='border' role='status'>
                <span className='visually-hidden'>Loading...</span>
            </Spinner>
        );
    }
    return <Event event={event} updateEvent={updateEvent} deleteEvent={deleteEvent} />;
};

export default EventIDPage;
