import './CardText.css'
import snowboard3 from './assets/snowboard3.avif'


function CardText() {
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
                    <button>Crea tu evento</button>
                    <div>
                        <strong>Aburrido de esquiar solo? Crea un evento, hazlo con amigos!!</strong>
                    </div>
                </div>
            </div>

        </div>

    )
}



export default CardText