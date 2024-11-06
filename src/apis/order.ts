import instance from './instance';

export const getOrderLists = async (page: number, month: number) => {
  const response = await instance.get(`/orders?page=${page}&month=${month}`);
  return response.data;
};
