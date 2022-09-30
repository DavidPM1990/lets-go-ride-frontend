function Comments({ comments }) {

    return (
        <>
            {comments.map((oneComment) => {
                return (<>
                    <h3>{oneComment.author}</h3>
                    <h6>{oneComment.body}</h6>
                </>
                )
            })}

            <h5>Holita soy un comment</h5>
            <h5>Y yo otro jeje</h5>
            <h5>Y yo otro </h5>
            <h5>Y yo :\</h5>
            <h5>Y yo :\</h5>
            <h5>Y yo :\</h5>
            <h5>Y yo :\</h5>
            <h5>Y yo :\</h5>
            <h5>Y yo :\</h5>
            <h5>Y yo :\</h5>
            <h5>Y yo :\</h5>

        </>
    )
}

export default Comments