import './HomePage.css'
import homepageVideo from './assets/snow.mp4'
import { useNavigate } from 'react-router-dom'

function HomePage() {

    const navigate = useNavigate()

    function goTo() {
        navigate('/events')
    }

    return (
        <>
            <div className='containerVideo'>

                <p className='homeTitle'>Bored of riding alone? <br />See our events or create one and ride with riders!<br />🤘🤘</p>

                <button onClick={goTo} className='buttonHomePage'>See Events</button>
                <video className='bckVideo' autoPlay muted loop>
                    <source src={homepageVideo} type='video/mp4' />
                </video>
            </div>

        </>
    )
}
export default HomePage;







