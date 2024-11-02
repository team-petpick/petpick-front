import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://back.petpick.store',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default instance;
