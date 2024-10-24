import Layout from '@layout/Layout';
import Category from './components/Category';
import Product from './components/Product';
import { IProductInfo } from '@types';

const MainPage = () => {
  const ProductInfo: IProductInfo[] = [];
  return (
    <Layout>
      <Category />
      {ProductInfo.map((product) => (
        <Product productInfo={product} />
      ))}
    </Layout>
  );
};

export default MainPage;
