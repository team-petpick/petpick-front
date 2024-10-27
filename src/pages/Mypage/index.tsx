import Layout from '@layout/Layout';
import { useState } from 'react';
import WishList from './components/WishList';
import OrderHistory from './components/OrderHistory';

const Mypage = () => {
  const [selectedComponent, setSelectedComponent] = useState<'whishList' | 'orderHistory' | null>(
    null,
  );

  const handleSelectComponent = (component: 'whishList' | 'orderHistory') => {
    setSelectedComponent(component);
  };

  return (
    <Layout>
      <button onClick={() => handleSelectComponent('whishList')}>찜한 상품</button>
      <button onClick={() => handleSelectComponent('orderHistory')}>주문내역</button>
      <div>{selectedComponent === 'whishList' ? <WishList /> : <OrderHistory />}</div>
    </Layout>
  );
};

export default Mypage;
