import instance from './instance';
import { IOrderDetail } from '@types';

export const getOrderById = async (orderId: number): Promise<IOrderDetail[]> => {
  const response = await instance.get(`/orders/${orderId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return response.data;
};

export const getOrderLists = async (page: number, month: number) => {
  const response = await instance.get(`/orders?page=${page}&month=${month}`);
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
  if (response.status === 200) {
    alert('주문 취소가 완료되었습니다.');
    return response.data;
  }
};
