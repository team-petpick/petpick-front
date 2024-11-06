import styled from 'styled-components';
import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';

export const FixedPrice = styled.span`
  margin-left: 4px;
  font-weight: normal;
  font-size: 12px;
  color: rgb(181, 181, 181);
  text-decoration: line-through;
  line-height: 16px;
  letter-spacing: -0.5px;
`;
export const DiscountPrice = styled.span`
  ${TextStyles.subText.smallSB};
`;
export const TotalWon = styled.span`
  margin-left: 3px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  vertical-align: 3px;
`;
export const TotalPrice = styled.span`
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
`;
export const TotalPriceText = styled.span`
  ${TextStyles.body.mediumM};
`;
export const TotalPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 0 23px;
  width: 100%;
`;
export const PriceCountContainer = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: space-between;
  padding-top: 5px;
`;
export const ProductCount = styled.span`
  text-align: center;
  min-width: 36px;
  margin: 2px 1px 0;
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
`;
export const ProductCountButton = styled.button`
  width: 20px;
  height: 20px;
`;
export const ProductCountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 30px;
  background: ${PETPICK_COLORS.GRAY[0]};
  border: 1px solid ${PETPICK_COLORS.GRAY[200]};
  border-radius: 3px;
`;
export const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5px;
`;
export const ProductTitleText = styled.h1`
  width: 100%;
  display: flex;
  font-size: 14px;
  line-height: 19px;
  color: ${PETPICK_COLORS.GRAY[800]};
  overflow: hidden;
  white-space: normal;
`;
export const ProductPriceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px 0px;
  border-radius: 3px;
  border-bottom: 1px solid rgb(244, 244, 244);
`;
export const ProductPriceContainer = styled.div`
  overflow: hidden auto;
  max-height: 355px;
  width: 100%;
`;
export const ProductTitle = styled.div`
  display: flex;
  height: 50px;
  margin-top: 2px;
  word-break: break-all;
`;
export const ProductImage = styled.div`
  flex: 0 0 50px;
  overflow: hidden;
  position: relative;
  height: 50px;
  margin-right: 14px;
  border-radius: 3px;
`;
export const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  padding: 5px 0px 12px;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid rgb(244, 244, 244);
`;
export const CartButton = styled.button`
  padding: 0px 10px;
  margin-left: 4px;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 56px;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: ${PETPICK_COLORS.BLUE[300]};
  ${TextStyles.body.mediumM};
  border: 0px none;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0px 4px;
`;
export const ModalContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const CloseButton = styled.button`
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 56px;
  border-radius: 3px;
  color: ${PETPICK_COLORS.GRAY[800]};
  background-color: ${PETPICK_COLORS.GRAY[0]};
  ${TextStyles.body.mediumM};
  border: 1px solid ${PETPICK_COLORS.GRAY[200]};
`;
