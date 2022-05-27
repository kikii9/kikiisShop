// 对axios进行二次封装
import axios from 'axios';
// 引入进度条
import nprogress from 'nprogress';
// 引入进度条样式
import "nprogress/nprogress.css";


// 1.利用axios对象方法create去创建一个axios实例
// 2.request就是axios，稍微配置了一下
const requests = axios.create({
    // 配置对象
    // 基础路径
    baseURL:"/api",
    // 超时5s
    timeout:5000,
});

// 请求拦截器
requests.interceptors.request.use(()=>{
    // config:header
    nprogress.start();
    return config;
})
// 响应拦截器
requests.interceptors.request.use((response)=>{
    nprogress.done();
    return response.data
},(error)=>{
    return Promise.reject(new Error('faile'))
})


export default axios