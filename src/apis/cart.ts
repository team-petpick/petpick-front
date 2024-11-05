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
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1IiwiaWF0IjoxNzMwNzg2NDYwLCJleHAiOjE3MzQzODY0NjB9.ayqNjgzvP3KBJplxac-sywbuOL_MTSs86nTxFt_pUq8',
      },
    },
  );
  return response.data;
};

export const getCartItem = async () => {
  const response = await instance.get('/cart', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1IiwiaWF0IjoxNzMwNzg2NDYwLCJleHAiOjE3MzQzODY0NjB9.ayqNjgzvP3KBJplxac-sywbuOL_MTSs86nTxFt_pUq8',
    },
  });
  return response.data;
};

export const deleteCartItem = async (productId: number) => {
  const response = await instance.delete(`/cart/${productId}`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1IiwiaWF0IjoxNzMwNzg2NDYwLCJleHAiOjE3MzQzODY0NjB9.ayqNjgzvP3KBJplxac-sywbuOL_MTSs86nTxFt_pUq8',
    },
  });
  return response.data;
};
