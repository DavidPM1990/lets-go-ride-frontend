function Comments({ comments }) {

    return (
        <>
            {comments.map((oneComment) => {
                // Esto habra que cambiarlo cuando nos solucionen el populate
                return (<div key={oneComment._id}>
                    <h3>{oneComment.author.username}</h3>
                    <h6>{oneComment.body}</h6>
                </div>
                )
            })}

        </>
    )
}

export default Comments