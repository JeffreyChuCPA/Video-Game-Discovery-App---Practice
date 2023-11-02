import axios from "axios";

//*in real life scenario, API key is best to be stored in a private backend server, so that the key is not on the open source code (privacy issue)

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1a8c69612b1040668bf13d05d4cf428e'
    }
})