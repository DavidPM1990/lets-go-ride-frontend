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
        return this.axios.get(`/getOneEvent/${id}`).then((response) => response.data);
    }

    createEvent(body) {
        return this.axios.post('/create', body).then((response) => response.data);
    }

    updateEvent(id, body) {
        return this.axios.put(`/update/${id}`, body).then((response) => response.data);
    }

    joinEvent(userId, eventId) {
        return this.axios.put(`/updateList/${eventId}`, { userId }).then((response) => response.data);
    }

    deleteEvent(id) {
        return this.axios.delete(`/deleteEvent/${id}`).then((response) => response.data);
    }
}

export default EventAxios;