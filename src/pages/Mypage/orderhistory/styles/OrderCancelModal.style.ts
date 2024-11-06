import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  max-width: 745px;
  height: 500px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid black;
  border-raidus: 20px;
  background: #fff;
  z-index: 999;
`;
export const Header = styled.div`
  ${TextStyles.body.mediumM};
  color: ${PETPICK_COLORS.GRAY[800]};
`;
export const Body = styled.div``;
export const Input = styled.input``;
export const ButtonWrapper = styled.div`
  display: flex;
`;
export const SubmitButton = styled.div``;
export const CloseButton = styled.div``;
