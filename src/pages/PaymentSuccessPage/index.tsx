import Layout from '@components/layouts/Layout';
import Header from './components/Header';
import * as S from './styles';
import Announcement from './components/Announcement';
import useGetOrder from './hooks/useGetOrder';
import Loading from '@components/Loading';
import OrderItem from './components/OrderedProduct';
import { TextStyles } from '@styles/textStyles';
import { PETPICK_COLORS } from '@styles/colors';

const PaymentSuccessPage = () => {
  const orderId = 1;
  const { orders, isLoading } = useGetOrder(Number(orderId));

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
              <S.TotalPrice>결제 금액</S.TotalPrice>
            </S.TableHeader>
            {orders && orders.map((orderDetail) => <OrderItem orderDetail={orderDetail} />)}
          </S.Table>
        </S.OrderContainer>
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
