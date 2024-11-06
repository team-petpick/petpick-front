import Layout from '@layouts/Layout';
import Category from './components/Category';
import Product from './components/Product';
import styled from 'styled-components';
import ProductFilter from './components/ProductFilter';
import { useEffect, useState } from 'react';
import { getProducts } from '@apis';
import { IAllProductInfo, TProductFilterType, TAnimalType } from '@types';
import { PRODUCT_FILTER_TYPE } from '@constants/productFilter';

const MainPage = () => {
  const [productInfo, setProductInfo] = useState<IAllProductInfo | null>(null);
  const [productType, setProductType] = useState<TAnimalType | null>(null);
  const [category, setCategory] = useState<number | null>(0);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<TProductFilterType>(
    PRODUCT_FILTER_TYPE.POPULAR,
  );
  const loadProducts = async () => {
    try {
      const data = await getProducts(productType, category, activeFilter);
      setProductInfo(data);
      setError(null);
    } catch (error) {
      setError((error as Error).message);
      setProductInfo({ ...productInfo, content: [] });
    }
  };

  useEffect(() => {
    loadProducts();
  }, [productType, category, activeFilter]);

  const handleAnimalTypeChange = (type: TAnimalType | null) => {
    setProductType(type);
  };

  const handleCategoryChange = (category: number | null) => {
    setCategory(category);
  };

  if (!productInfo) return null;
  return (
    <Layout>
      <Category
        onAnimalTypeChange={handleAnimalTypeChange}
        onCategoryChange={handleCategoryChange}
      />
      <ProductFilter
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        productInfo={productInfo}
      />
      <Body>
        {error ? (
          <div>{error}</div>
        ) : (
          <ProductList>
            {productInfo.content.map((product) => (
              <Product key={product.productId} productInfo={product} />
            ))}
          </ProductList>
        )}
      </Body>
    </Layout>
  );
};

export default MainPage;

const ProductList = styled.div`
  height: 100%;
  background-color: #fff;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  block-size: 100%;
  align-items: center;
  justify-content: center;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 300px;
`;
