import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 108px;
  display: flex;
  gap: 17px;
`;
export const ProductImage = styled.img`
  width: 91px;
  object-fit: cover;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
`;
export const DescriptionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const SellerName = styled.div`
  ${TextStyles.subText.smallR}
  color: ${PETPICK_COLORS.GRAY[500]};
`;
export const BlankSpace = styled.div`
  width: auto;
  height: 14px;
`;
export const ProductName = styled.div`
  ${TextStyles.body.mediumM};
  color: ${PETPICK_COLORS.GRAY[800]};
`;
export const PriceWrapper = styled.div`
  display: flex;
  gap: 6px;
`;
export const ProductSalePercent = styled.div`
  ${TextStyles.subText.smallSB};
  color: ${PETPICK_COLORS.RED[200]};
`;
export const ProductSalePrice = styled.div`
  ${TextStyles.subText.smallSB};
  color: ${PETPICK_COLORS.GRAY[900]};
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  heihgt: 48px;
  padding-top: 6px;
`;
