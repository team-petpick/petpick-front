import { PETPICK_COLORS } from './../../../styles/colors';
import styled from 'styled-components';

export const PaymentSuccessPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
`;

export const OrderedProductWrapper = styled.div`
  width: 60vw;
  height: 50px;
  border-bottom: 1px solid ${PETPICK_COLORS.GRAY[900]};
  border-top: 1px solid ${PETPICK_COLORS.GRAY[900]};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
`;

export const OrderedProductMenuText = styled.div`
  font-weight: bold;
  color: ${PETPICK_COLORS.GRAY[900]};
  padding: 10px;
  box-sizing: border-box;
`;
