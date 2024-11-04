import Layout from '@components/layouts/Layout';
import Header from './components/Header';
import * as S from './styles';
import Announcement from './components/Announcement';
import OrderedProductList from './components/OrderedProductList';

const PaymentSuccessPage = () => {
  const data = [
    {
      ordersId: 0,
      ordersPrice: 0,
      orderCreateAt: '2024-11-04T09:41:30.363Z',
      ordersStatus: 'string',
      orderDetails: [
        {
          orderDetailId: 0,
          productId: 0,
          productName: 'string',
          sellerStoreName: 'string',
          orderDetailPrice: 0,
          orderDetailCnt: 0,
          productThumbnail: 'string',
        },
      ],
    },
  ];
  return (
    <Layout>
      <S.PaymentSuccessPageContainer>
        <Header />
        <Announcement />
        <OrderedProductList />
      </S.PaymentSuccessPageContainer>
    </Layout>
  );
};

export default PaymentSuccessPage;
