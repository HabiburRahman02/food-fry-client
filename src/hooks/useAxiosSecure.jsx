import axios from "axios";
import useAuth from "./useMenu/useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
})

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();
    axiosInstance.interceptors.request.use(config => {
        // console.log('from interceptors');
        const token = localStorage.getItem('access-token');
        config.headers.authorization = `Bearer ${token}`
        return config
    }, error => {
        return Promise.reject(error);
    })

    // handle 401 and 403 status
    axiosInstance.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        // console.log(error);
        const status = error.response.status;
        if (status === 401 || status === 403) {
            logOut();
            navigate('/login')
        }
        return Promise.reject(error);
    });

    return axiosInstance
};

export default useAxiosSecure;