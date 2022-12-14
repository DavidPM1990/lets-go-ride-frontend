import './EventUpdatePage.css'
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

        // ESTO NOOOOO  
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
        <Form onSubmit={createNewEvent} className='form'>
            <Form.Group className="w-50 mb-3 formGroup" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control onChange={updateNewEvent} size="lg" name='name' value={event?.name || ""} type="text" placeholder="Title of event" />
            </Form.Group>
            <br />
            <Form.Group className="w-75 mb-3 formGroup" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={updateNewEvent} as="textarea" value={event?.description || ""} name='description' rows={4} placeholder="Description of event" />
            </Form.Group>
            <br />
            <div className="selects">
                <Form.Group className="w-25 mb-3" controlId="formBasicEmail">
                    <Form.Label>Difficulty Level</Form.Label>
                    <Form.Select onChange={updateNewEvent} name='eventLevel' >
                        <option>Select the difficulty of the event</option>
                        <option value="High">High</option>
                        <option value="Medium-High">Medium-High</option>
                        <option value="Medium">Medium</option>
                        <option value="Medium-Low">Medium-Low</option>
                        <option value="Low">Low</option>
                    </Form.Select>
                </Form.Group>
                <br />
                <Form.Group className="w-25 mb-3" controlId="formBasicEmail">
                    <Form.Label>Stations</Form.Label>
                    <Form.Select onChange={updateNewEvent} name='place' aria-label="Default select example">
                        <option>Choose the place where the event will take place</option>
                        <option value="Baqueira-Beret">Baqueira-Beret</option>
                        <option value="Bo?? Ta??ll">Bo?? Ta??ll</option>
                        <option value="Formigal">Formigal</option>
                        <option value="Sierra Nevada">Sierra Nevada</option>
                        <option value="Cerler">Cerler</option>
                        <option value="Panticosa">Panticosa</option>
                        <option value="Ast??n">Ast??n</option>
                        <option value="Candanch??">Candanch??</option>
                        <option value="La Pinilla">La Pinilla</option>
                        <option value="Valdesqu??">Valdesqu??</option>
                    </Form.Select>
                </Form.Group>
            </div>
            <br />

            <Form.Group className="mb-3 formGroupSwitches" controlId="formBasicEmail">

                <Form.Group className="mb-3  switches" >
                    <Form.Label>Freestyle:</Form.Label>
                    <Form.Check onChange={updateEventSwitch} type="switch" checked={event.freestyle || ""} name='freestyle' id="custom-switch" />
                </Form.Group>
                <br />
                <Form.Group className=" mb-3 switches" >
                    <Form.Label>Apr??s Ski:</Form.Label>
                    <Form.Check onChange={updateEventSwitch} type="switch" checked={event.apresSki || ""} name='apresSki' id="custom-switch" />
                </Form.Group>
            </Form.Group>

            <div className='formGroup' style={{ width: 230 }}>
                <DatePicker
                    selected={startingDate}
                    isClearable
                    onChange={onChange}
                    onClick={updateNewEvent}
                    startDate={startingDate}
                    endDate={endingDate}
                    selectsRange
                    inline
                />

            </div>

            <Button onClick={createNewEvent} className='submitButton' style={{ color: 'white', border: '1px solid white', backgroundColor: 'transparent' }}>Create Event</Button>

        </Form>
    )
}

export default EventUpdate