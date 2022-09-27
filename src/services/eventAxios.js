import InitAxios from "./initAxios";

class EventAxios extends InitAxios {
    constructor() {
        super('events')
    }

    getAllEvents() {
        // return this.axios.get(`/?offset=${query.page}`).then((response) => response.data)
        return this.axios.get('/').then((response) => response.data)
    }

    getOneEventId(id) {
        return this.axios.get(`/${id}`).then((response) => response.data);
    }

    createEvent(body) {
        return this.axios.post('/create', body).then((response) => response.data);
    }

    updateEvent(id, body) {
        return this.axios.put(`/${id}`, body).then((response) => response.data);
    }

    deleteEvent(id) {
        return this.axios.delete(`/${id}`).then((response) => response.data);
    }
}

export default EventAxios;