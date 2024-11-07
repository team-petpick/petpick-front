import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import styled from 'styled-components';
import ShoppingAddress from './ShoppingAddress';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@constants/ROUTE';
import { addCommaToPrice } from '@utils/addCommaToPrice';
import { patchCartInfo } from '@apis/cart';
import { useCartStore } from '@store/cart';
import { useUserStore } from '@store/userStore';

const OrderInfo = () => {
  const navigate = useNavigate();
  const { userInfo } = useUserStore();
  const { cartItems } = useCartStore();

  const totalPrice = cartItems.reduce((sum, item) => {
    if (item.isChecked) {
      return sum + item.productPrice * (1 - item.productSale / 100) * item.cartCnt;
    }
    return sum;
  }, 0);

  const originalTotalPrice = cartItems.reduce((sum, item) => {
    if (item.isChecked) {
      return sum + item.productPrice * item.cartCnt;
    }
    return sum;
  }, 0);

  const discountAmount = cartItems.reduce((sum, item) => {
    if (item.isChecked) {
      return sum + item.productPrice * (item.productSale / 100) * item.cartCnt;
    }
    return sum;
  }, 0);

  const handlePaymentPageClick = async () => {
    const patchCartItems = cartItems.map((item) => ({
      productId: item.productId,
      cartCnt: item.cartCnt,
    }));
    for (const item of patchCartItems) {
      await patchCartInfo(item);
    }
    navigate(ROUTE.PAYMENTCONFIRMATIONPAGE.replace(':userId', userInfo.userId?.toString() || ''));
  };

  return (
    <Container>
      <Wrapper>
        <ShoppingAddress />
        <TotalPriceContainer>
          <Title>결제금액</Title>
          <div>
            <ProductPriceContainer>
              <ProductPriceText>상품금액</ProductPriceText>
              <ProductPriceBox>{addCommaToPrice(originalTotalPrice)}원</ProductPriceBox>
            </ProductPriceContainer>
            <DiscountPriceContainer>
              <ProductPriceText>상품할인금액</ProductPriceText>
              <DiscountContainer>
                <DiscountPriceBox>{addCommaToPrice(discountAmount)}</DiscountPriceBox>
              </DiscountContainer>
            </DiscountPriceContainer>
            <DeliveryPriceContainer>
              <ProductPriceText>배송비</ProductPriceText>
              <ProductPriceBox>0원</ProductPriceBox>
            </DeliveryPriceContainer>
            <PaymentPriceContainer>
              <ProductPriceText>결제예정금액</ProductPriceText>
              <PaymentPrice>{addCommaToPrice(totalPrice)}원</PaymentPrice>
            </PaymentPriceContainer>
          </div>
        </TotalPriceContainer>
        <PaymentButton onClick={handlePaymentPageClick}>결제하기</PaymentButton>
      </Wrapper>
    </Container>
  );
};

export default OrderInfo;
const PaymentPrice = styled.span`
  font-size: 24px;
  font-weight: 700;
`;
const PaymentPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${PETPICK_COLORS.GRAY[200]};
  margin-top: 12px;
  padding: 16px 0 4px;
`;
const DeliveryPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

const DiscountPriceBox = styled.span`
  ${TextStyles.body.mediumSB};
  color: ${PETPICK_COLORS.RED[200]};
`;
const DiscountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const DiscountPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;
const ProductPriceBox = styled.span`
  ${TextStyles.body.mediumSB};
  color: ${PETPICK_COLORS.GRAY[800]};
`;
const ProductPriceText = styled.span`
  ${TextStyles.body.mediumR};
  color: ${PETPICK_COLORS.GRAY[800]};
`;
const ProductPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const PaymentButton = styled.button`
  background: ${PETPICK_COLORS.BLUE[300]};
  color: ${PETPICK_COLORS.GRAY[0]};
  font-size: 18px;
  font-weight: 600;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  height: 56px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  line-height: 26px;
  font-size: 18px;
  font-weight: 600;
`;
const TotalPriceContainer = styled.div`
  padding: 20px;
  background: ${PETPICK_COLORS.GRAY[0]};
  border-radius: 16px;
  margin-bottom: 16px;
`;

const Wrapper = styled.div`
  /* margin: 0 20px; */
  /* width: 565px; */
  width: 375px;
  width: 375px;
  position: sticky;
  top: 100px;
  right: 0px;
`;
const Container = styled.div`
  width: 375px;
  min-height: 545px;
`;
