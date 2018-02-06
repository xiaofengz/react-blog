// 请求集中处理
import axios from "axios";
import {notification} from 'antd';


let axiosInstance = axios.create();

axiosInstance.interceptors.request.use(config => {
    // config.headers['Content-Type'] = 'application/json;charset=utf-8';
    // config.headers['x-app-code'] = 'LM-ALG';  //这里可能需要
    config.withCredentials = true;
    return config
}, error => {
    return Promise.reject(error)
});

/**
 * Requests a URL, returning a promise.
 *
 * @param  {object} [options] The options we want to pass to "axios"
 * @return {object}           An object containing either "data" or "err"
 */
const xhr = ({method='get', headers, ...options}) => {
    //前提是header不存在
    if(!headers){
        if(method==='get'){
            headers={'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'}
        }else if(method === 'post'||method==='put'){
            headers={'Content-Type':'application/json;charset=utf-8'}
        }
    }
    return axiosInstance({method, headers, ...options})
        .then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return response;
            } else {
                handleError(response)
            }
        })
        .then((response) => {
            const {data} = response;
            if (data.errcode === 0) {
                return data;
            } else {
                handleError(response);
            }
        })
        .catch((error) => {
            if (error.code) {
                notification.error({
                    message: error.name,
                    description: error.message,
                });
            }
            // if ('stack' in error && 'message' in error) {
            //     notification.error({
            //         message: `请求错误: ${url}`,
            //         description: error.message,
            //     });
            // }
            throw error;
        });
};

function handleError(response) {
    const {data = {}, status} = response;
    const {errcode} = data;
    if (errcode === 3) {
        //无权限处理
        console.log(new Error('没有权限'))
        //...
    } else {
        const error = new Error(data.message || status + '错误');
        error.response = response;
        error.message = response.data.message;
        throw error;
    }
}

export default xhr;
