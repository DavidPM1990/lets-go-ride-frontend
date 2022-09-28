import InitAxios from "./initAxios";

class UserAxios extends InitAxios {
    constructor() {
        super('auth')
    }

    signUp(body) {
        return this.axios.post('/create', body).then((response) => response.data);
    }

    logIn(body) {
        return this.axios.post('/login', body).then((response) => response.data);
    }
}

export default UserAxios;