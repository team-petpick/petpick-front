import { TButtonDirection } from '@pages/RegisterMyPet/types';
import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import styled from 'styled-components';

interface IButtonProps {
  buttonDirection: TButtonDirection;
  isActive: boolean;
}

export const ButtonWrapper = styled.button<IButtonProps>`
  border-radius: 6px;
  background: ${(props) =>
    props.buttonDirection === 'next'
      ? props.isActive
        ? PETPICK_COLORS.BLUE[300]
        : PETPICK_COLORS.BLUE[100]
      : PETPICK_COLORS.BLUE[200]};
  display: ${(props) => (props.buttonDirection === 'prev' && !props.isActive ? 'none' : 'block')};
  width: 250px;
  height: 48px;
  padding: 8px 7px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  box-sizing: border-box;
  color: ${PETPICK_COLORS.GRAY[100]};
  cursor: pointer;
  &:hover {
    background: ${(props) =>
      props.buttonDirection === 'next'
        ? props.isActive && PETPICK_COLORS.BLUE[400]
        : PETPICK_COLORS.BLUE[300]};
  }
  ${TextStyles.subTitle.largeR}
`;
