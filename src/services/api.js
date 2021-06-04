import Axios from "axios"

import { URL_API } from "../constants"


const api = Axios.create({
    baseURL : URL_API
})

export default api