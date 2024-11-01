import instance from './instance';

export const toggleLike = (productId: number) => {
  return instance.get(`/products/${productId}/like`);
};
