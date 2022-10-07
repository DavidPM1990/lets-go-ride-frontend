import InitAxios from "./initAxios";

class CommentAxios extends InitAxios {
    constructor() {
        super('comment')
    }

    createComment(body, eventId) {
        return this.axios.post('/create-comment', body, eventId).then((response) => response.data)
    }

    deleteComment(id) {
        return this.axios.delete(`/delete-comment/${id}`).then((response) => response.data);
    }
}

export default CommentAxios;