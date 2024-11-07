import instance from './instance';

export const getWishLists = () => {
  return instance.get('/user/likes');
};

export const deleteWishListItem = (productId: number) => {
  return instance.post(`/products/${productId}/like`, { action: 'delete' });
};
