import instance from './instance';

export const fetchToggleLike = (productId: number, userId: number) => {
  console.log('API 호출하기 ! productId ->', productId, 'userId ->', userId); // 로그 추가
  return instance.post(`/products/${productId}/like`, {
    userId,
  });
};

export const fetchWishList = (userId: number) => {
  console.log('API 호출하기 ! userId ->', userId); // 로그 추가
  return instance.get(`/user/${userId}/likes`);
};
