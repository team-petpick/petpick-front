import instance from './instance';

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
        console.log('REFRESH>>>>>>>', refreshResponse);
        const newAccessToken = refreshResponse.data.access_token;
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
    return Promise.reject(error);
  },
);

export default instance;
export * from './like';
export * from './product';
