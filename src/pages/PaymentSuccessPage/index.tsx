import Layout from '@components/layouts/Layout';
import Header from './components/Header';
import * as S from './styles';
import Announcement from './components/Announcement';
import OrderedProductList from './components/OrderedProductList';
import { useParams } from 'react-router-dom';
import useGetOrder from './hooks/useGetOrder';
import Loading from '@components/Loading';

const PaymentSuccessPage = () => {
  const { userId } = useParams();
  const { orders, isLoading } = useGetOrder(Number(userId));
  if (!orders) return null;
  return (
    <Layout footerVisible={true}>
      <S.PaymentSuccessPageContainer>
        <Header />
        <Announcement orders={orders} />
        <div style={{ width: '80vw', display: 'flex' }}>
          <S.OrderedProductMenuText>주문상품</S.OrderedProductMenuText>
        </div>
        <S.OrderedProductWrapper>
          <S.OrderedProductMenuText>상품정보</S.OrderedProductMenuText>
          <S.OrderedProductMenuText>정가</S.OrderedProductMenuText>
          <S.OrderedProductMenuText>할인</S.OrderedProductMenuText>
          <S.OrderedProductMenuText>수량</S.OrderedProductMenuText>
          <S.OrderedProductMenuText>결제금액</S.OrderedProductMenuText>
        </S.OrderedProductWrapper>
        {isLoading && <Loading />}
        <div style={{ width: '80vw', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {orders &&
            orders.orderDetails.map((orderDetail) => (
              <OrderedProductList orderDetail={orderDetail} />
            ))}
        </div>
      </S.PaymentSuccessPageContainer>
    </Layout>
  );
};

export default PaymentSuccessPage;
