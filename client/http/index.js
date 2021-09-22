import axios from 'axios';

  const axiosCustom = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL
  });

  const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
  }

  axiosCustom.interceptors.request.use(authInterceptor);

  export {axiosCustom};