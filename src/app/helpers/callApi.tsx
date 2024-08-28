import axios from "axios";


const CallApi = () => {
    const axiosInstance = axios.create({
        baseURL: "http://localhost:5000/api"
    })

    axiosInstance.interceptors.request.use(
        (config) => {
            return config
        },

        err => Promise.reject(err)
    )

    axiosInstance.interceptors.response.use(
        res => {
            //
            return res
        },
        err => Promise.reject(err)
    )

}

export default CallApi
