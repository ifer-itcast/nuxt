export default ({ store, route, redirect, $axios }) => {
  $axios.onRequest(config => {
    console.log('请求拦截器');
    return config;
  });
  $axios.onResponse(response => {
    console.log('响应拦截器');
    return response;
  });
  $axios.onError(err => {
    console.log(err.response.status);
  });
}