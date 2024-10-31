import { PETPICK_COLORS } from '@styles/colors';
import styled from 'styled-components';

export const Text = styled.span`
  display: flex;
  align-items: center;

  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: ${({ isActive }) => (isActive ? PETPICK_COLORS.GRAY[800] : PETPICK_COLORS.BLUE[300])};
`;

export const BodyContainer = styled.div`
  margin: 0 0 20px;
  display: flex;
  justify-content: space-between;
`;
export const ImageBox = styled.div`
  margin: 0 0 2px;
`;
export const Title = styled.h1`
  line-height: 26px;
  font-size: 18px;
  font-weight: 600;
`;
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const ShippingAddressContainer = styled.div`
  padding: 20px;
  background: ${PETPICK_COLORS.GRAY[0]};
  border-radius: 16px;
  margin-bottom: 16px;
`;
