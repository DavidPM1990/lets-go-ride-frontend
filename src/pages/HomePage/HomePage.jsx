import './HomePage.css'
import homepageVideo from './assets/snow.mp4'
import { useNavigate } from 'react-router-dom'
// import Video from "../../components/Video/Video";
// import CardText from '../../components/CardText/CardText'
// import Carousel from '../../components/Carousel/Carousel'

function HomePage() {

    const navigate = useNavigate()

    function goTo() {
        navigate('/events')
    }

    return (
        <>
            <div className='containerVideo'>

                <p className='homeTitle'>Bored of riding alone? see our events or create one and ride with riders!🤘🤘</p>

                <button onClick={goTo} className='buttonHomePage'>See Events</button>
                <video className='bckVideo' autoPlay muted loop>
                    <source src={homepageVideo} type='video/mp4' />
                </video>
            </div>
            {/* <div className='bckgColor'> */}
            {/* <div className="flex">
                    <div className='divCardText'>
                        <CardText />
                    </div>
                    <div className='divCarousel'>
                        <Carousel />
                    </div>
                </div>
                <Video /> */}
            {/* </div> */}
        </>
    )
}
export default HomePage;







