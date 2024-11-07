import { IOrderDetail } from '@types';
import instance from './instance';

export const getOrderById = async (orderId: number): Promise<IOrderDetail[]> => {
  const response = await instance.get(`/orders/${orderId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return response.data;
};
