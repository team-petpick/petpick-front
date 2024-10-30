import { PETPICK_COLORS } from '@constants/colors';
import { TextStyles } from '@styles/textStyles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 718px;
  width: 100%;
  height: 100px;
  display: flex;
  gap: 11px;
  padding: 0 13px;
`;
export const ProductImage = styled.img`
  width: 82px;
  border-radius: 4px;
  object-fit: cover;
  &:hover {
    cursor: pointer;
  }
`;
export const DescriptionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;
export const SellerName = styled.div`
  ${TextStyles.subText.smallM}
  color: ${PETPICK_COLORS.GRAY[500]};
`;
export const ProductName = styled.div`
  ${TextStyles.body.mediumM};
  color: ${PETPICK_COLORS.GRAY[800]};
`;
export const PriceWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;
export const ProductOriginalPrice = styled.div`
  ${TextStyles.subText.smallM};
  color: ${PETPICK_COLORS.GRAY[400]};
  text-decoration: line-through;
`;
export const ProductSalePrice = styled.div`
  ${TextStyles.body.mediumM};
  color: ${PETPICK_COLORS.GRAY[800]};
`;
