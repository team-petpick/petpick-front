import styled from 'styled-components';
import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';

export const Price = styled.span`
  color: ${PETPICK_COLORS.GRAY[800]};
  ${TextStyles.body.mediumM};
`;

export const TotalPriceTitle = styled.span`
  color: ${PETPICK_COLORS.GRAY[600]};
  ${TextStyles.body.mediumR};
`;

export const TotalPriceContainer = styled.div`
  background: ${PETPICK_COLORS.GRAY[200]};
  width: 100%;
  height: 87px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0 30px;
`;
export const TotalPrice = styled.div`
  color: ${PETPICK_COLORS.GRAY[900]};
  ${TextStyles.bigTitle.xxlargeSB}
  display: flex;
  justify-content: flex-end;
`;

export const CouponContainer = styled.div`
  margin-top: 20px;
`;

export const DeleteButton = styled.button`
  width: 80px;
  height: 30px;
  border: 1px solid ${PETPICK_COLORS.GRAY[400]};
  border-radius: 20px;
  margin-left: 14px;
`;
export const CouponButtonText = styled.span`
  color: ${PETPICK_COLORS.GRAY[600]};
  ${TextStyles.body.mediumR};
`;
export const CouponButton = styled.button`
  border: 1px solid ${PETPICK_COLORS.GRAY[400]};
  border-radius: 8px;
  padding: 0 11px;
  margin-top: 4px;
  height: 40px;
  width: 100%;
  text-align: start;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CouponTitle = styled.h1`
  margin-bottom: 10px;
  color: ${PETPICK_COLORS.GRAY[600]};
  ${TextStyles.body.mediumR};
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
`;
export const SubContent = styled.span`
  ${TextStyles.subTitle.largeR};
  color: ${PETPICK_COLORS.GRAY[600]};
  margin-bottom: 10px;
`;
export const SubTitle = styled.h2`
  ${TextStyles.subTitle.largeR};
  color: ${PETPICK_COLORS.GRAY[600]};
  margin-bottom: 10px;
`;
export const SectionTitle = styled.h1`
  ${TextStyles.subTitle.largeSB};
  color: ${PETPICK_COLORS.GRAY[800]};
  padding-bottom: 20px;
`;
export const TotalPaymentAmount = styled.div``;
export const FinalOrderInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const PaymentInfo = styled.div``;
export const OrderItemContainer = styled.div``;
export const ShippingAddress = styled.div`
  display: flex;
  gap: 60px;
`;
export const OrderContainer = styled.div`
  width: 100%;
  border: 1px solid ${PETPICK_COLORS.GRAY[400]};
  border-radius: 8px;
  overflow: hidden;
`;
export const OrderWrapper = styled.div`
  padding: 30px 30px 0 30px;
`;
export const Container = styled.div`
  width: 100%;
  padding: 30px;
  border: 1px solid ${PETPICK_COLORS.GRAY[400]};
  border-radius: 8px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContentWrapper = styled.body`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 26px;
`;
export const ContentContainer = styled.div`
  width: 1050px;
  box-sizing: border-box;
  display: flex;
`;
