
import globalAxios from 'axios';
import router from 'next/router';

const axiosInstance = globalAxios.create();
axiosInstance.interceptors.request.use(
    function (request) {
        request.headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        }
        return request;
    }
)

axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error?.response?.status >= 500) {
            router.push('/error');
        } 
        return Promise.reject(error?.response?.data);
    }
);

export default axiosInstance;
