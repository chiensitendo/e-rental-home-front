
import globalAxios from 'axios';
import { LOCALSTORAGE_KEY } from 'libs/const';
import { LocalStorageModel } from 'libs/types';
import router from 'next/router';

const authenAxiosInstance = globalAxios.create();
authenAxiosInstance.defaults.params = {};
authenAxiosInstance.defaults.params['lang'] = "vi";
authenAxiosInstance.interceptors.request.use(
    function (request) {
        let obj = localStorage.getItem(LOCALSTORAGE_KEY);
        if (!obj){
            router.push("/login");
            return;
        }
        let user: LocalStorageModel = JSON.parse(obj);
        if (!user || !user.tokenType || !user.token){
            router.push("/login");
            return;           
        }
        request.headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': "*",
            'Access-Control-Allow-Methods': 'GET,POST,DELETE,PUT,OPTIONS',
            'Authorization': `${user.tokenType} ${user.token}`
        }
        document.getElementById("spin_id").style.display = "flex";
        return request;
    }
)

authenAxiosInstance.interceptors.response.use(
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

export default authenAxiosInstance;
