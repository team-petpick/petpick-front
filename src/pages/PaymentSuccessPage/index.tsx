import Layout from '@components/layouts/Layout';
import Header from './components/Header';
import * as S from './styles';
import Announcement from './components/Announcement';
import useGetOrder from './hooks/useGetOrder';
import Loading from '@components/Loading';
import OrderItem from './components/OrderedProduct';
import { TextStyles } from '@styles/textStyles';
import { PETPICK_COLORS } from '@styles/colors';
import styled from 'styled-components';
import { addCommaToPrice } from '@utils/addCommaToPrice';
const PaymentSuccessPage = () => {
  const orderId = 1;
  const { orders, isLoading } = useGetOrder(Number(orderId));

  const totalOrderPrice = addCommaToPrice(
    orders?.reduce((acc, cur) => acc + cur.orderDetailPrice * cur.orderDetailCnt, 0) ?? 0,
  );
  const discountPrice = addCommaToPrice(
    orders?.reduce((acc, cur) => acc + cur.orderDetailPrice * cur.productSale * 0.01, 0) ?? 0,
  );
  const finalOrderPrice = addCommaToPrice(
    orders?.reduce(
      (acc, cur) => acc + cur.orderDetailPrice * (1 - cur.productSale * 0.01) * cur.orderDetailCnt,
      0,
    ) ?? 0,
  );

  if (!orders) return null;

  return (
    <Layout footerVisible={true}>
      <S.PaymentSuccessPageContainer>
        <Header />
        <Announcement orderId={orderId} />
        {isLoading && <Loading />}
        <S.OrderContainer>
          <S.Title>주문 상품</S.Title>
          <S.Table>
            <S.TableHeader>
              <S.ProductInfo>상품 정보</S.ProductInfo>
              <S.Price>정가</S.Price>
              <S.Discount>할인 금액</S.Discount>
              <S.TotalPrice>수량</S.TotalPrice>
              <S.TotalPrice>결제 금액</S.TotalPrice>
            </S.TableHeader>
            {orders && orders.map((orderDetail) => <OrderItem orderDetail={orderDetail} />)}
          </S.Table>
        </S.OrderContainer>
        <ConfirmOrder>
          주문 금액 {totalOrderPrice}원 - 할인 금액 {discountPrice}원 + 배송비 무료
          <FinalPrice>총 결제 금액 {finalOrderPrice}원</FinalPrice>
        </ConfirmOrder>
      </S.PaymentSuccessPageContainer>
    </Layout>
  );
};

export default PaymentSuccessPage;

const ConfirmOrder = styled.div`
  ${TextStyles.title.xLargeM};
  font-weight: 400;
  color: ${PETPICK_COLORS.GRAY[900]};
  background-color: ${PETPICK_COLORS.GRAY[100]};
  border-radius: 10px;
  margin-top: 80px;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding-right: 40px;
  box-sizing: border-box;
  gap: 10px;
  width: 100%;
  margin: 80px auto 0;
  max-width: 1000px;
`;

const FinalPrice = styled.div`
  ${TextStyles.title.xLargeM};
  color: ${PETPICK_COLORS.GRAY[900]};
`;
