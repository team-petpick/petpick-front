import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 256px;
  height: 454px;
`;

export const ProductImage = styled.img`
  width: 250px;
  height: 320px;
  background-color: '#fff';
  border-radius: 8px;
  margin-bottom: 8px;
  object-fit: cover;
`;
export const LikeCartButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 36px;
  justify-content: space-between;
  width: 100%;
  margin-top: 8px;
  gap: 10px;
`;
export const AddShoppingCartButton = styled.button`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid ${PETPICK_COLORS.GRAY[300]};
  ${TextStyles.body.mediumM};
  color: ${PETPICK_COLORS.GRAY[900]};
  gap: 10px;

  &:hover {
    background-color: ${PETPICK_COLORS.GRAY[300]};
  }
`;

export const SellerName = styled.div`
  ${TextStyles.subText.smallR}
  color: ${PETPICK_COLORS.GRAY[500]};
`;

export const ProductName = styled.div`
  ${TextStyles.body.mediumM};
  color: ${PETPICK_COLORS.GRAY[800]};
`;

export const ProductInfo = styled.div`
  margin-top: 8px;
  width: 100%;
`;

export const ProductOriginalPrice = styled.div`
  margin-top: 5px;
  ${TextStyles.subText.smallR};
  color: ${PETPICK_COLORS.GRAY[400]};
  text-decoration: line-through;
`;
export const ProductSalePrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;
export const ProductSalePercent = styled.div`
  ${TextStyles.body.mediumM};
  color: ${PETPICK_COLORS.RED[200]};
`;
