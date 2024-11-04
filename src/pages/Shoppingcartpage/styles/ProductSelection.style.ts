import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import styled from 'styled-components';

export const SubText = styled.span`
  color: ${PETPICK_COLORS.GRAY[800]};
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
`;
export const ProductFooter = styled.button`
  width: 100%;
  height: 50px;
  background: ${PETPICK_COLORS.GRAY[200]};
  border-radius: 8px;
  margin-top: 10px;
`;
export const DeleteButtonText = styled.span`
  ${TextStyles.subText.smallSB}
`;
export const DeleteButton = styled.button`
  border: 1px solid ${PETPICK_COLORS.GRAY[300]};
  border-radius: 6px;
  padding: 0 12px;
  height: 32px;
`;
export const SelectText = styled.div`
  margin-left: 6px;
  align-self: center;
`;
export const SelectBox = styled.div`
  display: flex;
`;
export const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background: ${PETPICK_COLORS.GRAY[0]};
  margin-bottom: 16px;
  border-radius: 16px;
`;

export const ProductList = styled.ul`
  background: ${PETPICK_COLORS.GRAY[0]};
  border-radius: 16px;
  padding: 20px 16px;
  overflow: scroll;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 565px;
  margin-right: 20px;
`;
