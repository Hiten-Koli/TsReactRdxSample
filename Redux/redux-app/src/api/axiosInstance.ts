import axios from "axios"


const API_BACKEND_URL = "http://127.0.0.1:8000/"

const apiClient= axios.create({
    baseURL: API_BACKEND_URL,
    headers:{
        "Content-Type": "multipart/form-data"
    }
})

export default apiClient;