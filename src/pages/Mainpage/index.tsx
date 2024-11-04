import Layout from '@layouts/Layout';
import Category from './components/Category';
import Product from './components/Product';
import { IProductInfo } from '@types';
import styled from 'styled-components';
import ProductFilter from './components/ProductFilter';
import { useEffect, useState } from 'react';
import { getProducts } from '@apis';

const MainPage = () => {
  const [productInfo, setProductInfo] = useState<IProductInfo>({
    content: [],
    likes: { likesCount: 0 },
    productShare: 0,
  });
  const [type, setType] = useState<string | null>(null);
  const [category, setCategory] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadProducts = async () => {
    try {
      const data = await getProducts(type, category);
      setProductInfo(data);
      setError(null);
    } catch (error) {
      setError((error as Error).message);
      setProductInfo({ ...productInfo, content: [] });
    }
  };

  useEffect(() => {
    loadProducts();
  }, [type, category]);

  const handleAnimalTypeChange = (type: string | null) => {
    setType(type);
  };

  const handleCategoryChange = (category: number | null) => {
    setCategory(category);
  };

  console.log(productInfo);
  return (
    <Layout>
      <Category
        onAnimalTypeChange={handleAnimalTypeChange}
        onCategoryChange={handleCategoryChange}
      />
      <ProductFilter productInfo={productInfo} />
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
