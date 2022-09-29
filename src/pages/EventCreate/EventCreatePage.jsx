import { useState, forwardRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import EventAxios from '../../services/eventAxios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"


function EventCreatePage() {
    const navigate = useNavigate();
    const eventAxios = new EventAxios();
    const [newEvent, setNewEvent] = useState({});

    const [startingDate, setStartingDate] = useState(new Date());
    const [endingDate, setEndingDate] = useState(null);

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartingDate(start);
        setEndingDate(end);
    };
    //PARA ESTILAR EL INPUT DEL CALENDARIO
    // const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    //     <button className="example-custom-input" onClick={onClick} ref={ref}>
    //         {value}
    //     </button>
    // ))

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
        console.log(newData)

        eventAxios.createEvent(newData).then((event) => {
            console.log("AQUI YA ESTA CREADO", event)
            navigate('/events');
        })
    }

    const updateNewEvent = (eventHTML) => {
        const { name, value } = eventHTML.target;
        setNewEvent({ ...newEvent, [name]: value });
        // console.log("EL TOGGLE =>", eventHTML)
    };

    const updateEventSwitch = (eventHTML) => {
        const { name, checked } = eventHTML.target;
        setNewEvent({ ...newEvent, [name]: checked });
    };
    // const updateEventCalendar = (eventHTML) => {
    //     const { name, value } = eventHTML.target;
    //     console.log(checked)
    //     setNewEvent({ ...newEvent, [name]: checked });
    // };



    return (
        <>
            <Form onSubmit={createNewEvent}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control onChange={updateNewEvent} size="lg" name='name' type="text" placeholder="Title of event" />
                </Form.Group>
                <br />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={updateNewEvent} as="textarea" name='description' rows={4} placeholder="Description of event" />
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


                {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Check onChange={updateNewEvent} type="checkbox" name='freestyle' id="custom-switch" value='true' label="Freestyle" />
                    <br />
                    <Form.Check onChange={updateNewEvent} type="checkbox" name='apresSki' id="custom-switch" value='true' label="Après Ski" />
                </Form.Group> */}


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Check onChange={updateEventSwitch} type="switch" name='freestyle' id="custom-switch" label="Freestyle" />
                    <br />
                    <Form.Check onChange={updateEventSwitch} type="switch" name='apresSki' id="custom-switch" label="Après Ski" />
                </Form.Group>

                <div style={{ width: 230 }}><DatePicker

                    selected={startingDate}
                    closeOnScroll={true}
                    isClearable
                    // customInput={<ExampleCustomInput />}
                    // className="black-border"
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
        </>
    )
}

export default EventCreatePage;

