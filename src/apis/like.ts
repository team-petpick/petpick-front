import instance from './instance';

export const fetchToggleLike = (productId: number) => {
  return instance.post(`/like/${productId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};

export const fetchGetLikeAll = async () => {
  try {
    const response = await instance.get(`/user/likes`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch liked products:', error);
    throw error;
  }
};
export const fetchWishList = (userId: number) => {
  return instance.get(`/user/${userId}/likes`);
};
