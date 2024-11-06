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

const MainPage = () => {
  const [productInfo, setProductInfo] = useState<IAllProductInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { productListParams } = useProductSearchStore();
  const { likedProductIds, loading } = useGetLikeAll();

  const loadProducts = async () => {
    try {
      const data = await getProducts(productListParams);
      setProductInfo(data);
      setError(null);
    } catch (error) {
      setError((error as Error).message);
      setProductInfo({ ...productInfo, content: [] });
    }
  };

  useEffect(() => {
    loadProducts();
  }, [productListParams]);

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
