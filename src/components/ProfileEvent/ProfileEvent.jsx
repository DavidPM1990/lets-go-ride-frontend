import Card from 'react-bootstrap/Card';
import './ProfileEvent.css'
import { useNavigate } from "react-router-dom";

function ProfileEvent({ event }) {

    const navigate = useNavigate();
    let startDate
    let endDate

    function goToEvent(id) {
        navigate(`/event/${id}`)
    }

    function formatDates() {

        startDate = new Date(event.startDate).toDateString()
        endDate = new Date(event.endDate).toDateString()
    }

    formatDates()

    return (
        <div key={event._id} className='cardPointer' onClick={() => goToEvent(event._id)}>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <div className='titleName'>
                        <Card.Title>{event.name}</Card.Title>
                    </div>
                    <Card.Subtitle className="mb-2 text-muted">{event.author.username}</Card.Subtitle>
                    <Card.Text>
                        From: {startDate}
                        <br />
                        To: {endDate}
                    </Card.Text>
                </Card.Body>
            </Card >
        </div>
    );

}
export default ProfileEvent;