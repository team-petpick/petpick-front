import { Map } from '@assets/svg';
import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import styled from 'styled-components';

const OrderInfo = () => {
  return (
    <Wrapper>
      <ShippingAddress>
        <h3>배송지</h3>
        <Map width="16px" height="16px" />
      </ShippingAddress>
      <TotalPriceContainer>
        <Title>결제금액</Title>
        <body>
          <ProductPriceContainer>
            <ProductPriceText>상품금액</ProductPriceText>
            <ProductPriceBox>49,890원</ProductPriceBox>
          </ProductPriceContainer>
          <DiscountPriceContainer>
            <ProductPriceText>상품할인금액</ProductPriceText>
            <DiscountContainer>
              <DiscountPriceBox>-6,030원</DiscountPriceBox>
              <Text>로그인 후 할인 금액 적용</Text>
            </DiscountContainer>
          </DiscountPriceContainer>
          <DeliveryPriceContainer>
            <ProductPriceText>배송비</ProductPriceText>
            <ProductPriceBox>0원</ProductPriceBox>
          </DeliveryPriceContainer>
          <PaymentPriceContainer>
            <ProductPriceText>결제예정금액</ProductPriceText>
            <PaymentPrice>43,840원</PaymentPrice>
          </PaymentPriceContainer>
        </body>
      </TotalPriceContainer>
      <PaymentButton>결제하기</PaymentButton>
    </Wrapper>
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
const Text = styled.span`
  color: ${PETPICK_COLORS.GRAY[600]};
  margin-top: 4px;
  ${TextStyles.caption.xsmallM}
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
const ShippingAddress = styled.div`
  padding: 20px;
  background: ${PETPICK_COLORS.GRAY[0]};
  border-radius: 16px;
  margin-bottom: 16px;
`;
const Wrapper = styled.div`
  /* margin: 0 20px; */
  /* width: 565px; */
  width: 375px;
  min-height: 545px;
`;
