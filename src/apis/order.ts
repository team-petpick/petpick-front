import instance from './instance';

export const getOrderLists = async (page: number, month: number) => {
  const response = await instance.get(`/orders?page=${page}&month=${month}`);
  return response.data;
};

export const deleteOrderItem = async (
  paymentKey: string,
  orderDetailCnt: number,
  orderId: number,
  cancelReason: string,
) => {
  const cancelData = {
    paymentKey,
    orderDetailCnt,
    orderId,
    cancelReason,
  };
  const response = await instance.post('/payment/cancel', cancelData);
  return response.data;
};
