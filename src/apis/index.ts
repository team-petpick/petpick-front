import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://back.petpick.store',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);
instance.interceptors.response.use(
  (response) => {
    console.log('response>>>', response);
    return response;
  },
  async (error) => {
    console.log('error', error.config);
    const originalRequest = error.config;
    if (error.response) {
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const refreshResponse = await instance.post(
            '/api/v1/auth/token',
            {},
            {
              headers: {
                'Content-Type': 'application/json',
              },
              withCredentials: true,
            },
          );

          const newAccessToken = refreshResponse.data.accessToken;
          localStorage.setItem('accessToken', newAccessToken);
          instance.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return instance(originalRequest);
        } catch (err) {
          console.error('Token refresh failed:', err);
          localStorage.removeItem('accessToken');
          return Promise.reject(err);
        }
      }
    } else {
      // Handle case where error.response is undefined
      console.error('Error response is undefined', error);
    }
    return Promise.reject(error);
  },
);
export default instance;
export * from './like';
export * from './product';
