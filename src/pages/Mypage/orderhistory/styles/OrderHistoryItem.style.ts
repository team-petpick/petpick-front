import styled from 'styled-components';
import { PETPICK_COLORS } from '@constants/colors';
import { TextStyles } from '@styles/textStyles';

export const Wrapper = styled.div`
  max-width: 745px;
  width: 100%;
  height: 438px;
  margin: 0 auto;
  border-raidus: 8px;
  border: 1px solid ${PETPICK_COLORS.GRAY[300]};
`;
export const Header = styled.div`
    max-width: 718px;
    width: 100%:
    height: 48px;
`;
export const DateWrapper = styled.div`
  ${TextStyles.body.mediumM};
  width: 100%;
  color: ${PETPICK_COLORS.GRAY[900]};
`;
