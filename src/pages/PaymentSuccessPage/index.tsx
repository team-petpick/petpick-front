import Layout from '@components/layouts/Layout';
import Header from './components/Header';
import * as S from './styles';
import Announcement from './components/Announcement';
import OrderedProductList from './components/OrderedProductList';
import { useParams } from 'react-router-dom';
import useGetOrder from './hooks/useGetOrder';
import Loading from '@components/Loading';
import styled from 'styled-components';
import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';

const PaymentSuccessPage = () => {
  const { userId } = useParams();
  const { orders, isLoading } = useGetOrder(Number(userId));
  const formattedOrdersPrice = orders?.ordersPrice.toLocaleString('ko-KR');
  if (!orders) return null;
  return (
    <Layout footerVisible={true}>
      <S.PaymentSuccessPageContainer>
        <Header />
        <Announcement orders={orders} />
        <div style={{ width: '60vw', display: 'flex' }}>
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
        <div style={{ width: '60vw', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {orders &&
            orders.orderDetails.map((orderDetail) => (
              <OrderedProductList orderDetail={orderDetail} />
            ))}
        </div>
        <ConfirmOrder>
          주문 금액 {formattedOrdersPrice}원 - 할인금액 0원 + 배송비 0원
          <br />
          <FinalPrice>최종 결제금액 {formattedOrdersPrice}원</FinalPrice>
        </ConfirmOrder>
      </S.PaymentSuccessPageContainer>
    </Layout>
  );
};

export default PaymentSuccessPage;

const ConfirmOrder = styled.div`
  ${TextStyles.bigTitle.xxlargeM};
  font-weight: 400;
  color: ${PETPICK_COLORS.GRAY[900]};
  background-color: ${PETPICK_COLORS.GRAY[100]};
  border-radius: 10px;
  margin-top: 80px;
  height: 170px;
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  text-align: right;
  padding-right: 120px;
  box-sizing: border-box;
  gap: 10px;
`;

const FinalPrice = styled.div`
  ${TextStyles.bigTitle.xxlargeM};
  color: ${PETPICK_COLORS.GRAY[900]};
`;
