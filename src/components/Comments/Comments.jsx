function Comments({ comments }) {

    return (
        <>
            {comments.map((oneComment) => {
                // Esto habra que cambiarlo cuando nos solucionen el populate
                return (<div key={oneComment}>
                    <h3>{oneComment}</h3>
                    <h3>{oneComment.author}</h3>
                    <h6>{oneComment.body}</h6>
                </div>
                )
            })}

        </>
    )
}

export default Comments