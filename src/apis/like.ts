import instance from './instance';

export const fetchToggleLike = (productId: number) => {
  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken) {
    alert('로그인 후 이용해주세요.');
    throw new Error('Access token is missing');
  }
  return instance.post(`/like/${productId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};

export const fetchGetLikeAll = async () => {
  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken) {
    throw new Error('Access token is missing');
  }
  try {
    const response = await instance.get(`/user/likes`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch liked products:', error);
    throw error;
  }
};
export const fetchWishList = (userId: number) => {
  return instance.get(`/user/${userId}/likes`);
};
