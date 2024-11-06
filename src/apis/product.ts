import { AxiosError } from 'axios';
import instance from './instance';
import { IAllProductInfo, TAnimalType, TProductFilterType } from '@types';

export const getProducts = async (
  productType: TAnimalType | null,
  category: number | null,
  activeFilter: TProductFilterType,
): Promise<IAllProductInfo> => {

  try {
    const response = await instance.get('/products', {
      params: {
        type: productType,
        category: category === 0 ? null : category,
        filter: activeFilter,
      },
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
