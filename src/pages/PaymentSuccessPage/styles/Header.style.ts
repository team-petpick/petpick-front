import { TextStyles } from '@styles/textStyles';
import { PETPICK_COLORS } from './../../../styles/colors';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 80%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 28px;
  border-bottom: 1px solid ${PETPICK_COLORS.GRAY[200]};
  ${TextStyles.bigTitle.xxlargeSB}
`;
