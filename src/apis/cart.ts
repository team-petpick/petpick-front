import instance from '@apis/instance';
export const postCartItem = async (productId: number, cartCnt: number) => {
  const response = await instance.post(
    '/cart',
    {
      productId,
      cartCnt,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    },
  );
  return response.data;
};

export const getCartItem = async () => {
  const response = await instance.get('/cart', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return response.data;
};

export const deleteCartItem = async (productId: number) => {
  try {
    const response = await instance.delete(`/cart/${productId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const patchCartInfo = async (modifiedCartInfo: any) => {
  try {
    const res = await instance.patch(
      '/cart',
      {
        ...modifiedCartInfo,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      },
    );
    console.log('수정 API 결과', res);
  } catch (e) {
    console.log(e);
  }
};
