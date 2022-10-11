import axios from 'axios';

class InitAxios {
    constructor(path) {
        this.axios = axios.create({
            baseURL: `https://lets-go-ride.herokuapp.com//${path}`
        })
    }
}

export default InitAxios;