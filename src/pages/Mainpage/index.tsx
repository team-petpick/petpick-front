import Layout from '@layouts/Layout';
import Category from './components/Category';

import styled from 'styled-components';
import ProductFilter from './components/ProductFilter';
import { useEffect, useState } from 'react';
import { getProducts } from '@apis';
import { IAllProductInfo } from '@types';
import { useProductSearchStore } from '@store/productSearchStore';
import useGetLikeAll from './hooks/useGetLikeAll';
import Loading from '@components/Loading';
import ProductList from './components/ProductList';
import { useLikeIdsStore } from './stores/likeIds';

const MainPage = () => {
  const [productInfo, setProductInfo] = useState<IAllProductInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { productListParams } = useProductSearchStore();
  const [currentPage, setCurrentPage] = useState(0);
  const { loading } = useGetLikeAll();
  const { likedProductIds } = useLikeIdsStore();

  const loadProducts = async () => {
    if (!hasMore) return;
    try {
      const data = await getProducts({ ...productListParams, page: currentPage });
      setProductInfo((prev) => ({ ...prev, ...data }));
      setHasMore(data.content.length > 0);
      setError(null);
    } catch (error) {
      setError((error as Error).message);
      setProductInfo({ ...productInfo, content: [] });
    }
  };

  useEffect(() => {
    loadProducts();
  }, [productListParams]);

  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.innerHeight + document.documentElement.scrollTop);
      console.log(document.documentElement.offsetHeight);
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 300 // 여유를 두고 데이터 호출
      ) {
        setCurrentPage((prev) => prev + 1);
      }
    };

    window.addEventListener('scroll', handleScroll); // 스크롤 이벤트 추가
    return () => window.removeEventListener('scroll', handleScroll); // 이벤트 정리
  }, []);

  if (!productInfo) return null;
  return (
    <Layout>
      <Category />
      <ProductFilter productInfo={productInfo} />
      <Body>
        {error ? (
          <div>{error}</div>
        ) : loading ? (
          <Loading />
        ) : (
          <ProductList productInfo={productInfo} likedProductIds={likedProductIds} />
        )}
      </Body>
    </Layout>
  );
};

export default MainPage;

const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 300px;
`;
