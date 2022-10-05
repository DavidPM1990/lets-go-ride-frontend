import Video from "../../components/Video/Video";
import CardText from '../../components/CardText/CardText'
import Carousel from '../../components/Carousel/Carousel'

function HomePage() {
    return (
        <>
            <div className="flex">
                <CardText />
                <Carousel />
            </div>
            <Video />
        </>
    )
}

export default HomePage;