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

export const deleteOrderItem = async (
  orderDetailId: string,
  orderDetailCnt: number,
  orderId: number,
  cancelReason: string,
) => {
  const cancelData = {
    orderDetailId,
    orderDetailCnt,
    orderId,
    cancelReason,
  };
  const response = await instance.post('/payment/cancel', cancelData);
  return response.data;
};
