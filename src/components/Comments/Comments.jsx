import './Comments.css'
import Card from 'react-bootstrap/Card';
import CommentAxios from '../../services/comments.services';
import { Navigate } from 'react-router-dom';


function Comments({ comments, updateEvent }) {

    const commentInstance = new CommentAxios()

    function deleteCom(id) {
        console.log()
        commentInstance
            .deleteComment(id)
            .then(() => updateEvent())
            .catch((err) => console.log(err))
    }

    return (
        <>
            {comments.map((oneComment) => {
                // Esto habra que cambiarlo cuando nos solucionen el populate
                return (

                    <div className='comment' key={oneComment._id}>

                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted">{oneComment.author.username}</Card.Subtitle>

                            <Card className='colorText' body>{oneComment.body}</Card>
                            <button onClick={() => deleteCom(oneComment._id)}>Delete</button>
                        </Card.Body>
                    </div>

                )
            })}

        </>
    )
}

export default Comments