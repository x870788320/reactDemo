import axios from 'axios'

import { baseURL, timeout } from './httpConfig'

const Axios = axios.create({
  baseURL,
  timeout,
  // responseType: "json",
//   withCredentials: true, //是否允许带cookie
})
/*
将withCredentials: true注释掉，成功的请求了接口
知识点
withCredentials: true时响应中的“Access Control Allow origin”头的值不能是通配符“*”。而应该找后端设置将“Access Control Allow origin”设置成你的源地址（我的例如http://localhost:9527）。
Access-Control-Allow-Origin设置为*表示服务器可以接受所有的请求源（Origin）,即接受所有跨域的请求。但是cookie不会出现在http的请求头里。
withCredentials设置成true时，前端发送请求时就会携带cookies。但服务器的响应中没有包含这个头部，那么浏览器就不会把相应交给JavaScript,
请求就无法得到结果的数据（浏览器得到了，但是我们请求的方法得不到，因为被浏览器拦截了），因此在需要传cookies等时，服务端的Access-Control-Allow-Origin必须配置具体的具体的域名
*/

Axios.defaults.headers.post['Content-Type'] = "application/x-www-form-urlencoded;charset=utf-8";

Axios.interceptors.request.use(
  config => {
    // 显示Loading的组件
    showLoading()
    config.data = JSON.stringify(config.data)
    if (config.method === 'post'){
        //需要token
        // config.headers['X-CSRFToken'] = store.state.CSRFToken;
        //序列化
        // let formObj = new FormData();
        // formObj.append('file',config )
        // return formObj
    }
    return config
  },
  err => hideLoading() && Promise.error(err)
)

Axios.interceptors.response.use(
    res => hideLoading() && (res.status === 200 ? Promise.resolve(res) : Promise.reject(res)),
    err => {
        hideLoading()
        const { response } = err;
        if (response) {
            errorHandle(response.status, response.data.message);
            return Promise.reject(response);
        } else {
            // 处理断网的情况
            window.console.log("请查看网络");
            return Promise.reject("请查看网络");
        }
  }
)

//失败时的状态
const errorHandle = (status, msg) => {
    switch(status){
        case 200:
            toLogin();
            break;
        default:
            window.console.log(msg+'111');
    }
}
//跳登录
// const toLogin = () => router.replace({name: "login"})
const toLogin = () => {}

//一般由外界引入方法
const showLoading = () => '显示Loading的组件'
const hideLoading = () => '隐藏Loading的组件'

//暴露axios
export default Axios

//暴露get方法
export const GET = (url, params, loading = false) => {
    loading && showLoading()
    return new Promise((resolve, reject) => 
        Axios.get(url, { params }).then( res => resolve(res.data)).catch(error => reject(error))
    )
}

//暴露post方法
export const POST = (url, params, loading = false) => {
    loading && showLoading()
    return new Promise((resolve, reject) => 
        Axios.post(url,  params ).then( res => resolve(res.data)).catch(error => reject(error))
    )
}