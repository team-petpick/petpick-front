import styled from 'styled-components';
import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';

export const DetailLayout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: auto;
  margin: 0px auto;
`;

export const ProductContainer = styled.div`
  width: 1050px;
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
`;
export const ProductInfoContainer = styled.section`
  width: 560px;
`;

export const ActionButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  height: 56px;
  margin-top: 20px;
`;
export const ActionButtons = styled.button`
  border: 1px solid ${PETPICK_COLORS.GRAY[300]};
  border-radius: 3px;
  width: 56px;
`;
export const ActionGoToCartButton = styled.button`
  padding: 0 10px;
  text-align: center;
  overflow: hidden;
  width: 432px;
  height: 100%;
  border-radius: 3px;
  font-size: ${TextStyles.body.mediumM};
  color: #fff;
  background-color: ${PETPICK_COLORS.BLUE[300]};
  border: 0 none;
`;
