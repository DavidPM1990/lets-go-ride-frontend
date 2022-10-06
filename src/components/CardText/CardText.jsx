import './CardText.css'
import snowboard3 from './assets/snowboard3.avif'
import { useNavigate } from "react-router-dom";

function CardText() {
    const navigate = useNavigate();
    function goTo() {
        navigate('/create-event')
    }
    return (
        <div>
            <div className="a-box">
                <div className="img-container">
                    <div className="img-inner">
                        <div className="inner-skew">
                            <img src={snowboard3} />
                        </div>
                    </div>
                </div>
                <div className="text-container">
                    <div>
                        <strong>Bored of riding alone? Make an event and ride with riders🤘🏼🤘🏼!!</strong>
                    </div>
                    <button onClick={goTo} type="button" className="btn btn-secondary">Create your event!</button>
                </div>
            </div>

        </div>

    )
}



export default CardText