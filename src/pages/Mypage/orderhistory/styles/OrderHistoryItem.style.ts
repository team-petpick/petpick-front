import styled from 'styled-components';
import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;
export const Wrapper = styled.div`
  max-width: 745px;
  width: 100%;
  margin: 0 auto;
  border-radius: 8px;
  border: 1px solid ${PETPICK_COLORS.GRAY[400]};
`;
export const Header = styled.div`
  ${TextStyles.body.mediumM};
  max-width: 718px;
  width: 100%;
  height: 48px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-bottom: 1px solid ${PETPICK_COLORS.GRAY[400]};
  padding-top: 8px;
`;
export const DateWrapper = styled.div`
  width: 100%;
  color: ${PETPICK_COLORS.GRAY[900]};
`;
export const orderNumWrapper = styled.div`
  color: ${PETPICK_COLORS.GRAY[500]};
`;
export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 21px 0;
`;
