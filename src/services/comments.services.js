import InitAxios from "./initAxios";

class CommentAxios extends InitAxios {
    constructor() {
        super('comment')
    }

    // findComments() {
    //     return this.axios.get('/').then((response) => response.data)
    // }

    createComment(body, eventId) {
        return this.axios.post('/create-comment', body, eventId).then((response) => response.data)
    }

}

export default CommentAxios;