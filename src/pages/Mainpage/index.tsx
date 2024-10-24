import Layout from '@layout/Layout';
import Category from './components/Category';
import ProductFilter from './components/ProductFilter';

const MainPage = () => {
  return (
    <Layout>
      <Category />
      <ProductFilter />
      <h1>Main Page</h1>
    </Layout>
  );
};

export default MainPage;
