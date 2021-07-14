
import globalAxios from 'axios';
import router from 'next/router';

const axiosInstance = globalAxios.create();
axiosInstance.defaults.params = {};
axiosInstance.defaults.params['lang'] = "vi";
axiosInstance.interceptors.request.use(
    function (request) {
        request.headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        }
        document.getElementById("spin_id").style.display = "flex";
        return request;
    }
)

axiosInstance.interceptors.response.use(
    function (response) {
        document.getElementById("spin_id").style.display = "none";
        return response;
    },
    function (error) {
        document.getElementById("spin_id").style.display = "none";
        if (error?.response?.status >= 500) {
            router.push('/error');
        } 
        return Promise.reject(error?.response?.data);
    }
);

export default axiosInstance;
