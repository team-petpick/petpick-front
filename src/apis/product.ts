import { AxiosError } from 'axios';
import instance from './instance';
import { IAllProductInfo } from '@types';
import { IProductSearchParam } from '@store/productSearchStore';

export const getProducts = async (params: IProductSearchParam): Promise<IAllProductInfo> => {
  try {
    const response = await instance.get('/products', {
      params: { ...params, category: params.category || null },
    });

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response && axiosError.response.status === 404) {
      throw new Error('조회 가능한 상품이 없습니다.');
    } else {
      throw new Error('데이터를 불러오는 데 실패했습니다.');
    }
  }
};
export const fetchProductDetails = async (productId: number) => {
  const response = await instance.get(`/products/${productId}`);
  return response.data;
};
