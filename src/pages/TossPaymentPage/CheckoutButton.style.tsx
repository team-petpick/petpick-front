import { PETPICK_COLORS } from '@styles/colors';
import styled from 'styled-components';

export const PaymentButtonContainer = styled.div`
  border: 2px solid ${PETPICK_COLORS.GRAY[400]};
  border-radius: 8px;
  height: 60px;
  width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    border-color: ${PETPICK_COLORS.BLUE[300]};
  }
`;
export const LogoImageBox = styled.img`
  width: 114px;
  height: 60px;
`;
