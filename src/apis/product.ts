import instance from './instance';

export const fetchProductDetails = async (productId: number) => {
  const response = await instance.get(`products/${productId}`);
  return response.data;
};
