import Layout from '@layouts/Layout';
import Category from './components/Category';
import Product from './components/Product';
import styled from 'styled-components';
import ProductFilter from './components/ProductFilter';
import { ProductInfo } from '@assets/mock';

const MainPage = () => {
  return (
    <Layout>
      <Category />
      <ProductFilter />
      <Body>
        <ProductList>
          {ProductInfo.map((product) => (
            <Product productInfo={product} />
          ))}
        </ProductList>
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
