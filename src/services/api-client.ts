import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "2b733adf858e4163a1b70f7c91fce61a"
    }
})

