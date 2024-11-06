import { fetchGetLikeAll } from '@apis';
import { IProductInfo } from '@types';
import { useCallback, useEffect, useState } from 'react';
import { useLikeIdsStore } from '../stores/likeIds';

const useGetLikeAll = () => {
  const { likedProductIds, setLikedProductIds } = useLikeIdsStore();
  const [loading, setLoading] = useState<boolean>(false);
  const [reloadTrigger, setReloadTrigger] = useState(false);

  const loadLikedProducts = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetchGetLikeAll();
      const ids = res.map((product: IProductInfo) => product.productId);
      setLikedProductIds(ids);
      console.log(ids);
    } catch (error) {
      console.error('Failed to load liked products:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const reloadLikedProducts = useCallback(() => {
    setReloadTrigger((prev) => !prev);
  }, []);

  useEffect(() => {
    loadLikedProducts();
  }, [reloadTrigger]);

  return { likedProductIds, loading, reloadLikedProducts };
};

export default useGetLikeAll;
