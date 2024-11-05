import instance from './instance';

export const getWishLists = () => {
  return instance.get('/v1/user/likes');
};

export const deleteWishListItem = (productId: number) => {
  return instance.post(`/v1/products/${productId}/like`);
};
