import instance from './instance';

export const fetchToggleLike = (productId: number) => {
  return instance.post(`/products/${productId}/like`);
};

export const fetchWishList = (userId: number, productId: number) => {
  return instance.get(`/user/${userId}/likes`, {
    data: { productId },
  });
};
