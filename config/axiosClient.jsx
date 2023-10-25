import axios from "axios";

const axiosClient = axios.create(
    {
        baseURL: "https://seal-app-y62qh.ondigitalocean.app/api",
    }
);

export default axiosClient;