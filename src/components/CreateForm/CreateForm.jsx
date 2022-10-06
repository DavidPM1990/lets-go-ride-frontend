import "react-datepicker/dist/react-datepicker.css"
import "./CreateForm.css"
import { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/auth.context'
import EventAxios from '../../services/eventAxios';
import DatePicker from 'react-datepicker';

function CreateForm() {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate();

    const eventAxios = new EventAxios();

    const [newEvent, setNewEvent] = useState({});
    const [startingDate, setStartingDate] = useState(null);
    const [endingDate, setEndingDate] = useState(null);

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartingDate(start);
        setEndingDate(end);
    };

    const createNewEvent = (eventHTML) => {
        eventHTML.preventDefault();
        const newData = { ...newEvent }

        if (!newEvent.freestyle) {
            newData.freestyle = false
        }
        if (!newEvent.apresSki) {
            newData.apresSki = false
        }
        if (!newEvent.startDate) {
            newData.startDate = startingDate
        }
        if (!newEvent.endDate) {
            newData.endDate = endingDate
        }
        if (!newEvent.author) {
            newData.author = user._id
        }

        eventAxios
            .createEvent(newData)
            .then(() => {
                navigate('/events');
            })
    }

    const updateNewEvent = (eventHTML) => {
        const { name, value } = eventHTML.target;
        setNewEvent({ ...newEvent, [name]: value });
    };

    const updateEventSwitch = (eventHTML) => {
        const { name, checked } = eventHTML.target;
        setNewEvent({ ...newEvent, [name]: checked });
    };

    return (

        <Form onSubmit={createNewEvent} className='form'>
            <Form.Group className="w-50 mb-3 formGroup" controlId="formBasicEmail">
                <Form.Label>Choose a cool name for your event</Form.Label>
                <Form.Control onChange={updateNewEvent} size="lg" name='name' required type="text" placeholder="Title of event" />
            </Form.Group>
            <br />
            <Form.Group className="w-75 mb-3 formGroup" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={updateNewEvent} as="textarea" required name='description' rows={4} placeholder="Description of event" />
            </Form.Group>
            <br />
            <div className="selects">
                <Form.Group className="w-25 mb-3 " controlId="formBasicEmail">
                    <Form.Label>Difficulty Level</Form.Label>
                    <Form.Select onChange={updateNewEvent} name='eventLevel' required>
                        <option value="Low">Low</option>
                        <option value="Medium-Low">Medium-Low</option>
                        <option value="Medium">Medium</option>
                        <option value="Medium-High">Medium-High</option>
                        <option value="High">High</option>
                    </Form.Select>
                </Form.Group>
                <br />
                <Form.Group className="w-25 mb-3 " controlId="formBasicEmail">
                    <Form.Label>Stations</Form.Label>
                    <Form.Select onChange={updateNewEvent} name='place' required aria-label="Default select example">
                        <option></option>
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
            </div>
            <br />
            <Form.Group className="mb-3 formGroupSwitches " >

                <Form.Group className="mb-3  switches" >
                    <Form.Label>Freestyle:</Form.Label>
                    <Form.Check onChange={updateEventSwitch} type="switch" name='freestyle' />
                </Form.Group>

                <Form.Group className=" mb-3 switches" >
                    <Form.Label>Après Ski:</Form.Label>
                    <Form.Check onChange={updateEventSwitch} type="switch" name='apresSki' />
                </Form.Group>

            </Form.Group>
            <div className='formGroup' style={{ width: 230 }}><DatePicker

                selected={startingDate}
                isClearable
                onChange={onChange}
                onClick={updateNewEvent}
                startDate={startingDate}
                endDate={endingDate}
                selectsRange
                inline
                required
            />
            </div>

            <Button className='submitButton' style={{ color: 'white', border: '1px solid white', backgroundColor: 'transparent' }}>Create Event</Button>

        </Form>

    )
}

export default CreateForm;