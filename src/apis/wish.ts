import { AxiosError } from 'axios';
import instance from './instance';

export const getWishLists = async () => {
  try {
    const response = await instance.get('/api/v1/user/likes');
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response && axiosError.response.status === 404) {
      throw new Error('조회 가능한 상품이 없습니다.');
    } else {
      throw new Error('데이터를 불러오는 데 실패했습니다.');
    }
  }
};
