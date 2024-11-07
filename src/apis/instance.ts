import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://back.petpick.store/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
  withCredentials: true,
});

export default instance;
