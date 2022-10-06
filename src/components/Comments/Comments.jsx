import './Comments.css'
import Card from 'react-bootstrap/Card';
import CommentAxios from '../../services/comments.services';
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'

function Comments({ comments, updateEvent }) {

    const commentInstance = new CommentAxios()
    const { user } = useContext(AuthContext)

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
                return (

                    <div className='comment' key={oneComment._id}>

                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted">{oneComment.author.username}</Card.Subtitle>

                            <Card className='colorText' body>{oneComment.body}</Card>
                            {
                                user.username === oneComment.author.username ? <button onClick={() => deleteCom(oneComment._id)}>Delete</button> : null
                            }
                        </Card.Body>
                    </div>

                )
            })}

        </>
    )
}

export default Comments