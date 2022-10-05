import './ProfilePage.css'
import { AuthContext } from '../../context/auth.context'
import { useContext } from 'react'
import { useNavigate } from "react-router-dom";

function ProfilePage() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    function goToEvent(id) {
        navigate(`/event/${id}`)
    }

    return (
        <>
            <h1>Welcome, {user.username}!</h1>
            <h4>{user.email}</h4>
            <h4> {user.phoneNumber}</h4>
            <h4>Events Joined:</h4>
            {user.eventsJoined.map(el => {
                return (
                    <div key={el._id} onClick={() => goToEvent(el._id)}><p className='eventP'>{el.name}</p></div>
                )
            })}

        </>
    )
}

export default ProfilePage