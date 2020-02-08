// // http.js
import axios from 'axios'

//
// // 环境的切换
// // if (process.env.NODE_ENV === 'development') {
// //     axios.defaults.baseURL = '/proxyApi'
// // } else if (process.env.NODE_ENV === 'production') {
axios.defaults.baseURL = 'http://localhost:3002';

// // }
//
// 请求拦截器
// axios.interceptors.request.use(
//     config => {
//         // eslint-disable-next-line no-undef
//         token && (config.headers.Authorization = token)
//         return config
//     },
//     error => {
//         return Promise.error(error)
//     })

axios.defaults.timeout = 10000
// //
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// //
// // // 响应拦截器
// axios.interceptors.response.use(response => {
//     if (response.status === 200) {
//         if (response.data.code === 511) {
//             // 未授权调取授权接口
//         } else if (response.data.code === 510) {
//             // 未登录跳转登录页
//         } else {
//             return Promise.resolve(response)
//         }
//     } else {
//         return Promise.reject(response)
//     }
// },
        // error => {
    // 我们可以在这里对异常状态作统一处理
    // if (error.response.status) {
    //     // 处理请求失败的情况
    //     // 对不同返回码对相应处理
    //     return Promise.reject(error.response)
    // }
// }
// )

// get 请求
export function httpGet({
                            url
                        }) {
    return new Promise((resolve, reject) => {
        axios.get(url).then((res) => {
            alert(url)
            resolve(res.data)
        }).catch(err => {
            alert(url)
            reject(err)
        })
    })
}

// post请求
export function httpPost(url,data) {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
        // axios.post(url,data)
        //     .then(res => {
        //     resolve(res.data)
        // }).catch(err => {
        //     alert(data)
        //     reject(err)
        // })
        axios.post(url,data).then(res=>{
            // eslint-disable-next-line no-console
            console.log(res)
        })
    })
}
export function httppost(url,data) {
    return new Promise((resolve, reject) => {
        axios.post(url,data).then((res) => {
            resolve(res.data)
        }).catch(err => {
            // alert(url)
            reject(err)
        })
    })
}