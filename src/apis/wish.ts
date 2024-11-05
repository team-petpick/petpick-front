import instance from './instance';

export const getWishLists = () => {
  return instance.get('/api/v1/user/likes');
};
