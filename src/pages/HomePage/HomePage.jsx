import Video from "../../components/Video/Video";
import CardText from '../../components/CardText/CardText'
import Carousel from '../../components/Carousel/Carousel'

// cositas que se nos ocurran rollo algun video, algun evento guapo...


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