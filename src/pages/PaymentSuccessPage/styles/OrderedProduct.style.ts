import { PETPICK_COLORS } from './../../../styles/colors';
import { TextStyles } from '@styles/textStyles';
import styled from 'styled-components';

export const OrderedProductWrapper = styled.div`
  width: 80vw;
  padding: 24px;
  background-color: ${PETPICK_COLORS.GRAY[100]};
  display: flex;
`;

export const OrderedProductImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  background-color: ${PETPICK_COLORS.GRAY[200]};
`;

export const OrderedProductInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-left: 16px;
  padding: 0 32px;
  justify-content: space-between;
`;
export const ProductNamePriceDiscountWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  gap: 30%;
`;
export const OrderedProductSeller = styled.p`
  ${TextStyles.subText.smallM}
  color: ${PETPICK_COLORS.GRAY[500]};
  white-space: nowrap;
`;
export const OrderedProductName = styled.h3`
  ${TextStyles.body.mediumM}
  color: ${PETPICK_COLORS.GRAY[800]};
  white-space: nowrap;
`;

export const OrderedProductInfoText = styled.p`
  ${TextStyles.body.mediumM}
  color: ${PETPICK_COLORS.GRAY[800]};
  text-align: center;
  white-space: nowrap;
`;
