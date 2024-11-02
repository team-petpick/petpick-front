import instance from './instance';

export const fetchProductDetails = async (productId: number) => {
  const response = await instance.get(`/api/v1/products/${productId}`);
  return response.data;
};
