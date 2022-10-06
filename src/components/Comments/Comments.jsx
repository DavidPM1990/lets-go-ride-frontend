import './Comments.css'
import Card from 'react-bootstrap/Card';
import CommentAxios from '../../services/comments.services';
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import Button from '@mui/material/Button';

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
                            <div className='deleteButton'>
                                {
                                    user.username === oneComment.author.username ? <Button variant='outlined' color='error' onClick={() => deleteCom(oneComment._id)}>Delete</Button> : null
                                }
                            </div>
                        </Card.Body>
                    </div>

                )
            })}

        </>
    )
}

export default Comments