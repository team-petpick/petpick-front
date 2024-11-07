import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  gap: 11px;
  padding: 0 36px;
  box-sizing: border-box;
`;
export const ProductImage = styled.img`
  width: 82px;
  border-radius: 4px;
  object-fit: cover;
  &:hover {
    cursor: pointer;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const DescriptionWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;
export const InformationWrapper = styled.div`
  display: flex;
  gap: 15px;
`;
export const SellerName = styled.div`
  ${TextStyles.subText.smallM}
  color: ${PETPICK_COLORS.GRAY[500]};
`;
export const ProductName = styled.div`
  ${TextStyles.body.mediumM};
  color: ${PETPICK_COLORS.GRAY[800]};
`;
export const ProductCnt = styled.div`
  ${TextStyles.body.mediumM};
  color: ${PETPICK_COLORS.GRAY[500]};
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
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;
export const CancelButton = styled.div`
  ${TextStyles.subText.smallM};
  background: ${PETPICK_COLORS.BLUE[200]};
  color: #fff;
  &:hover {
    background: ${PETPICK_COLORS.BLUE[400]};
    cursor: pointer;
  }
  border-radius: 12px;
  text-align: center;
  padding: 4px 8px;
`;
