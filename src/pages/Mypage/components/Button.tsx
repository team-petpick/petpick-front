import { PETPICK_COLORS } from '@constants/colors';
import styled from 'styled-components';

interface IButtonProps {
  text: string;
  onClick: () => void;
  borderColor?: string;
  fontColor?: string;
}
const Button = ({ text, onClick, borderColor, fontColor }: IButtonProps) => {
  const defaultBorderColor = text === '담기' ? PETPICK_COLORS.BLUE[300] : PETPICK_COLORS.GRAY[300];
  const defaultFontColor = text === '담기' ? PETPICK_COLORS.BLUE[500] : '#000';
  return (
    <ButtonWrapper
      onClick={onClick}
      $borderColor={borderColor || defaultBorderColor}
      $fontColor={fontColor || defaultFontColor}
    >
      {text}
    </ButtonWrapper>
  );
};
export const ButtonWrapper = styled.div<{ $borderColor?: string; $fontColor?: string }>`
  border-radius: 3px;
  border: 1px solid ${({ $borderColor }) => $borderColor};
  color: ${({ $fontColor }) => $fontColor};
  background: #fff;
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
export default Button;
