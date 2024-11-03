import { IButtonStatus } from '@pages/RegisterMyPet/types';
import * as S from '../../styles/button.style';

interface IButtonProps extends IButtonStatus {
  buttonName: string;
  onClick?: () => void;
  width?: string;
}
const Button = ({ width, onClick, buttonDirection, isActive, buttonName }: IButtonProps) => {
  return (
    <S.ButtonWrapper
      style={{ width }}
      onClick={onClick}
      buttonDirection={buttonDirection}
      isActive={isActive}
    >
      {buttonName}
    </S.ButtonWrapper>
  );
};
export default Button;
