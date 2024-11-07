import instance from './instance';

export const getImageItem = async (productId: number) => {
  const response = await instance.get(`/product-images/product/${productId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      // Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1IiwiaWF0IjoxNzMwNzg2NDYwLCJleHAiOjE3MzQzODY0NjB9.ayqNjgzvP3KBJplxac-sywbuOL_MTSs86nTxFt_pUq8`,
    },
  });
  return response.data;
};
