import Layout from '@layouts/Layout';
import Category from './components/Category';
import Product from './components/Product';
import { IProductInfo } from '@types';
import styled from 'styled-components';
import ProductFilter from './components/ProductFilter';

const MainPage = () => {
  const ProductInfo: IProductInfo[] = [
    {
      productId: 1,
      sellerId: 1,
      categoryId: 1,
      productTitle: '강아지가 먹을 수 있는 닭고기',
      productCnt: 1,
      productPrice: 10000,
      productType: 'DOG',
      productStatus: 'ON',
      productSale: 10,
      sellerStoreName: '윤일이네 농장',
      productImageUrl: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg',
    },
    {
      productId: 1,
      sellerId: 1,
      categoryId: 1,
      productTitle: '강아지가 먹을 수 있는 닭고기',
      productCnt: 1,
      productPrice: 10000,
      productType: 'DOG',
      productStatus: 'ON',
      productSale: 10,
      sellerStoreName: '윤일이네 농장',
      productImageUrl: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg',
    },
    {
      productId: 1,
      sellerId: 1,
      categoryId: 1,
      productTitle: '강아지가 먹을 수 있는 닭고기',
      productCnt: 1,
      productPrice: 10000,
      productType: 'DOG',
      productStatus: 'ON',
      productSale: 10,
      sellerStoreName: '윤일이네 농장',
      productImageUrl: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg',
    },
    {
      productId: 1,
      sellerId: 1,
      categoryId: 1,
      productTitle: '강아지가 먹을 수 있는 닭고기',
      productCnt: 1,
      productPrice: 10000,
      productType: 'DOG',
      productStatus: 'ON',
      productSale: 10,
      sellerStoreName: '윤일이네 농장',
      productImageUrl: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg',
    },
    {
      productId: 1,
      sellerId: 1,
      categoryId: 1,
      productTitle: '강아지가 먹을 수 있는 닭고기',
      productCnt: 1,
      productPrice: 10000,
      productType: 'DOG',
      productStatus: 'ON',
      productSale: 10,
      sellerStoreName: '윤일이네 농장',
      productImageUrl: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg',
    },
    {
      productId: 1,
      sellerId: 1,
      categoryId: 1,
      productTitle: '강아지가 먹을 수 있는 닭고기',
      productCnt: 1,
      productPrice: 10000,
      productType: 'DOG',
      productStatus: 'ON',
      productSale: 10,
      sellerStoreName: '윤일이네 농장',
      productImageUrl: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg',
    },
    {
      productId: 1,
      sellerId: 1,
      categoryId: 1,
      productTitle: '강아지가 먹을 수 있는 닭고기',
      productCnt: 1,
      productPrice: 10000,
      productType: 'DOG',
      productStatus: 'ON',
      productSale: 10,
      sellerStoreName: '윤일이네 농장',
      productImageUrl: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg',
    },
    {
      productId: 1,
      sellerId: 1,
      categoryId: 1,
      productTitle: '강아지가 먹을 수 있는 닭고기',
      productCnt: 1,
      productPrice: 10000,
      productType: 'DOG',
      productStatus: 'ON',
      productSale: 10,
      sellerStoreName: '윤일이네 농장',
      productImageUrl: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg',
    },
    {
      productId: 1,
      sellerId: 1,
      categoryId: 1,
      productTitle: '강아지가 먹을 수 있는 닭고기',
      productCnt: 1,
      productPrice: 10000,
      productType: 'DOG',
      productStatus: 'ON',
      productSale: 10,
      sellerStoreName: '윤일이네 농장',
      productImageUrl: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg',
    },
    {
      productId: 1,
      sellerId: 1,
      categoryId: 1,
      productTitle: '강아지가 먹을 수 있는 닭고기',
      productCnt: 1,
      productPrice: 10000,
      productType: 'DOG',
      productStatus: 'ON',
      productSale: 10,
      sellerStoreName: '윤일이네 농장',
      productImageUrl: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg',
    },
    {
      productId: 1,
      sellerId: 1,
      categoryId: 1,
      productTitle: '강아지가 먹을 수 있는 닭고기',
      productCnt: 1,
      productPrice: 10000,
      productType: 'DOG',
      productStatus: 'ON',
      productSale: 10,
      sellerStoreName: '윤일이네 농장',
      productImageUrl: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg',
    },
  ];
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
