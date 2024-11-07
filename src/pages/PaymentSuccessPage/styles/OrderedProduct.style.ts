import { PETPICK_COLORS } from './../../../styles/colors';
import { TextStyles } from '@styles/textStyles';
import styled from 'styled-components';

export const OrderedProductWrapper = styled.div`
  width: 60vw;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 각 요소를 양쪽 끝에 맞추기 */
  gap: 10px; /* 요소 간의 간격 조절 */
`;

export const OrderedProductImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  background-color: ${PETPICK_COLORS.GRAY[200]};
  margin: 0 auto; /* Center the image on smaller screens */

  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;
export const OrderedProductInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0 32px;
  justify-content: space-between; /* 각 텍스트 정렬 맞추기 */
`;
export const ProductNamePriceDiscountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; /* 각 텍스트 정렬 맞추기 */
  width: 100%;
  gap: 100px;
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
