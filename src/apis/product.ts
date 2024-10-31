import instance from './instance';

export const fetchProductDetails = async (productId) => {
  const response = await instance.get(`products/${productId}`);
  return response.data;
};
