axios.interceptors.request.use(function (config:any) {
    //在发送请求之前做点什么
    console.log(config);
    return config;
}, function (error:any) {
    //在请求错误时做点什么
    return Promise.reject(error);
});
// 增加一个响应拦截器
axios.interceptors.response.use(function (response:any) {
    //接收数据之后做点什么
    return response;
  }, function (error:any) {
    // 在返回错误后做点什么
    return Promise.reject(error);
});
