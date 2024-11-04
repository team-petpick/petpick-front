import axios from 'axios';
import { IOrder } from '@types';

export const getOrderById = async (orderId: number): Promise<IOrder> => {
  const response = await axios.get(`/orders/${orderId}`);
  return response.data;
};
