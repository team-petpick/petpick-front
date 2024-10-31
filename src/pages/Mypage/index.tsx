import Layout from '@layouts/Layout';
import { useState } from 'react';
import WishList from './wishlist';
import OrderHistory from './orderhistory';
import MyInfo from './components/MyInfo';
import MyPetInfo from './components/MyPetInfo';
import FrequentlyUsedMenu from './components/FrequentlyUsedMenu';
import * as S from './styles/index';
type TMypageState = 'whishList' | 'orderHistory' | null;

const Mypage = () => {
  const [selectedComponent, setSelectedComponent] = useState<TMypageState>('whishList');

  const handleSelectComponent = (component: TMypageState) => {
    setSelectedComponent(component);
  };

  return (
    <Layout>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: '100px',
          marginTop: '50px',
        }}
      >
        <S.LeftSideBar>
          <MyInfo />
          <MyPetInfo />
          <FrequentlyUsedMenu />
        </S.LeftSideBar>
        {/* <button
        onClick={() => handleSelectComponent('whishList')}
        style={{ width: '100px', border: '1px solid' }}
      >
        찜한 상품
      </button>
      <button
        onClick={() => handleSelectComponent('orderHistory')}
        style={{ width: '100px', border: '1px solid' }}
      >
        주문내역
      </button> */}
        <div>{selectedComponent === 'whishList' ? <WishList /> : <OrderHistory />}</div>
      </div>
    </Layout>
  );
};

export default Mypage;
