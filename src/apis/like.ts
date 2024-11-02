import instance from './instance';

export const toggleLike = (productId: number) => {
  return instance.get(`/api/v1/products/${productId}/like`);
};
