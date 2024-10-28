import { PETPICK_COLORS } from '@constants/colors';
import { TextStyles } from '@styles/textStyles';
import styled, { CSSProp } from 'styled-components';

interface IButtonProps {
  text: string;
  onClick: () => void;
  borderColor?: string;
  fontColor?: string;
  fontStyle?: CSSProp;
}
const Button = ({ text, onClick, borderColor, fontColor, fontStyle }: IButtonProps) => {
  const defaultStyles =
    text === '담기'
      ? {
          borderColor: PETPICK_COLORS.BLUE[300],
          fontColor: PETPICK_COLORS.BLUE[500],
          fontStyle: TextStyles.body.mediumM,
        }
      : {
          borderColor: PETPICK_COLORS.GRAY[300],
          fontColor: '#000',
          fontStyle: TextStyles.subText.smallM,
        };
  return (
    <ButtonWrapper
      onClick={onClick}
      $borderColor={borderColor || defaultStyles.borderColor}
      $fontColor={fontColor || defaultStyles.fontColor}
      $fontStyle={fontStyle || defaultStyles.fontStyle}
    >
      {text}
    </ButtonWrapper>
  );
};
export const ButtonWrapper = styled.div<{
  $borderColor?: string;
  $fontColor?: string;
  $fontStyle?: CSSProp;
}>`
  ${({ $fontStyle }) => $fontStyle};
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
