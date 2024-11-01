import { fetchProductDetails } from '@apis';
import { IProductInfo } from '@types';
import { useEffect, useState } from 'react';

const useGetProductDetails = (productId: number) => {
  const [productInfo, setProductInfo] = useState<IProductInfo | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);

  useEffect(() => {
    const loadProductDetails = async () => {
      try {
        setIsLoading(true);
        const response = await fetchProductDetails(productId);
        setProductInfo(response);
        setIsLoading(false);
      } catch (err) {
        setError(err as Error); // 에러 타입 단언
        console.error('Failed to fetch product details:', err);
      }
    };

    loadProductDetails();
  }, [productId]);

  return { productInfo, error, isLoading };
};

export default useGetProductDetails;
