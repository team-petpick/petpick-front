import instance from './instance';

export const toggleLike = (productId) => {
  return instance.get(`/products/${productId}/like`);
};
