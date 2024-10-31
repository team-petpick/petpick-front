import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import styled from 'styled-components';

export const MyInfoWrapper = styled.div`
  width: 300px;
  height: 82px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 18px;
  border: 1px solid;
  border-color: ${PETPICK_COLORS.GRAY[300]};
  gap: 15px;
  border-radius: 10px;
`;

export const MyInfoGreetingText = styled.div`
  ${TextStyles.subTitle.largeSB}
  color: ${PETPICK_COLORS.BLUE[400]}
`;

export const MyInfoNameText = styled.div`
  color: ${PETPICK_COLORS.BLUE[400]};
  ${TextStyles.subTitle.largeSB}
`;
