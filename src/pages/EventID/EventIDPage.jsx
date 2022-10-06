import './EventID.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Event from '../../components/Event/Event';
import EventAxios from '../../services/eventAxios';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import astun from './assets/planoastun.jpg'
import baqueira from './assets/planobaqueiraberet.jpg'
import boitaull from './assets/planoboitaull.jpg'
import candanchu from './assets/planocandanchu.jpg'
import cerler from './assets/planocerler.jpg'
import formigal from './assets/planoformigal.jpg'
import lapinilla from './assets/planolapinilla.jpg'
import panticosa from './assets/planopanticosa.jpg'
import sierranevada from './assets/planosierranevada.jpg'
import valdesqui from './assets/planovaldesqui.jpg'

const EventIDPage = () => {
    const { id } = useParams();
    const [event, setevent] = useState();
    const navigate = useNavigate();
    const eventAxios = new EventAxios();
    let plano
    if (event) {
        switch (event.place) {
            case 'Baqueira-Beret':
                plano = baqueira;
                break;
            case 'Boí Taüll':
                plano = boitaull;
                break;
            case 'Sierra Nevada':
                plano = sierranevada;
                break;
            case 'Cerler':
                plano = cerler;
                break;
            case 'Formigal':
                plano = formigal;
                break;
            case 'Panticosa':
                plano = panticosa;
                break;
            case 'Astún':
                plano = astun;
                break;
            case 'Candanchú':
                plano = candanchu;
                break;
            case 'La Pinilla':
                plano = lapinilla;
                break;
            case 'Valdesquí':
                plano = valdesqui;
                break;
        }
    }
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
    return <Event event={event} plano={plano} updateEvent={updateEvent} deleteEvent={deleteEvent} />;
};

export default EventIDPage;

