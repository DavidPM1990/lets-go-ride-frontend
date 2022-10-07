import './ProfilePage.css'
import { AuthContext } from '../../context/auth.context'
import { useContext } from 'react'

import ProfileEvent from '../../components/ProfileEvent/ProfileEvent';

function ProfilePage() {
    const { user } = useContext(AuthContext);


    return (
        <>
            <h1 className='fontTitle'>Welcome, {user.username}!</h1>
            <h4 className='emailStyle'>Email:     {user.email}</h4>
            <h4 className='phoneStyle'>Telephone number:     {user.phoneNumber}</h4>
            <hr className='hr' />
            <h4 className='eventJoinedStyle'>Events Joined:</h4>

            <div className='cardStyle'>

                {user.eventsJoined.map(el => {
                    return (
                        <ProfileEvent event={el} />
                    )
                })}
            </div>

        </>
    )
}

export default ProfilePage