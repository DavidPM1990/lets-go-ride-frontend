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

    useEffect(() => {
        eventAxios
            .getOneEventId(id)
            .then((event) => {
                console.log('Soy el evento :)', event)
                setevent(event);
            });
    }, []);

    const deleteEvent = (id) => {
        eventAxios.deleteEvent(id).then(() => {
            navigate('/events');
        });
    };
    if (!event) {
        return (
            <Spinner animation='border' role='status'>
                <span className='visually-hidden'>Loading...</span>
            </Spinner>
        );
    }
    return <Event event={event} deleteEvent={deleteEvent} />;
};

export default EventIDPage;
