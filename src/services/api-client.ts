import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1a8c69612b1040668bf13d05d4cf428e'
    }
})