import { useParams } from 'react-router-dom';
import EventAxios from '../../services/eventAxios';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"


function EventUpdate() {

    const { id } = useParams();
    const navigate = useNavigate()

    const eventInstance = new EventAxios
    const [event, setevent] = useState({});

    const [startingDate, setStartingDate] = useState(new Date());
    const [endingDate, setEndingDate] = useState(null);

    useEffect(() => {
        eventInstance.getOneEventId(id).then((event) => {
            setevent(event);
        });
    }, []);

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartingDate(start);
        setEndingDate(end);
    };
    const createNewEvent = (eventHTML) => {
        eventHTML.preventDefault();
        const newData = { ...event }

        if (!event.freestyle) {
            newData.freestyle = false
        }
        if (!event.apresSki) {
            newData.apresSki = false
        }
        if (!event.startDate) {
            newData.startDate = startingDate
        }
        if (!event.endDate) {
            newData.endDate = endingDate
        }
        console.log(newData)

        eventInstance.updateEvent(id, newData).then((event) => {
            // console.log("AQUI YA ESTA CREADO", event)
            navigate(`/event/${id}`);
        })
    }

    const updateNewEvent = (eventHTML) => {
        const { name, value } = eventHTML.target;
        setevent({ ...event, [name]: value });
    };

    const updateEventSwitch = (eventHTML) => {
        const { name, checked } = eventHTML.target;
        setevent({ ...event, [name]: checked });
    };

    return (
        <Form onSubmit={createNewEvent}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control onChange={updateNewEvent} size="lg" name='name' value={event.name} type="text" placeholder="Title of event" />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={updateNewEvent} as="textarea" value={event.description} name='description' rows={4} placeholder="Description of event" />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Select onChange={updateNewEvent} name='eventLevel' aria-label="Default select example">
                    <option>Select the difficulty of the event</option>
                    <option value="High">High</option>
                    <option value="Medium-High">Medium-High</option>
                    <option value="Medium">Medium</option>
                    <option value="Medium-Low">Medium-Low</option>
                    <option value="Low">Low</option>
                </Form.Select>
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Select onChange={updateNewEvent} name='place' aria-label="Default select example">
                    <option>Choose the place where the event will take place</option>
                    <option value="Baqueira-Beret">Baqueira-Beret</option>
                    <option value="Boí Taüll">Boí Taüll</option>
                    <option value="Formigal">Formigal</option>
                    <option value="Sierra Nevada">Sierra Nevada</option>
                    <option value="Cerler">Cerler</option>
                    <option value="Panticosa">Panticosa</option>
                    <option value="Astún">Astún</option>
                    <option value="Candanchú">Candanchú</option>
                    <option value="La Pinilla">La Pinilla</option>
                    <option value="Valdesquí">Valdesquí</option>
                </Form.Select>
            </Form.Group>
            <br />

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Check onChange={updateEventSwitch} type="switch" checked={event.freestyle} name='freestyle' id="custom-switch" label="Freestyle" />
                <br />
                <Form.Check onChange={updateEventSwitch} type="switch" name='apresSki' id="custom-switch" label="Après Ski" />
            </Form.Group>

            <div style={{ width: 230 }}><DatePicker

                selected={startingDate}
                closeOnScroll={true}
                isClearable
                onChange={onChange}
                onClick={updateNewEvent}
                startDate={startingDate}
                endDate={endingDate}
                selectsRange
                inline
            />

            </div>



            <Button variant='primary' type='submit'>
                Create Event
            </Button>
        </Form>
    )
}

export default EventUpdate