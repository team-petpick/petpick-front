import { IButtonStatus } from '@pages/RegisterMyPet/types';
import * as S from '../../styles/button.style';

interface IButtonProps extends IButtonStatus {
  buttonName: string;
  onClick?: () => void;
}
const Button = ({ onClick, buttonDirection, isActive, buttonName }: IButtonProps) => {
  return (
    <S.ButtonWrapper onClick={onClick} buttonDirection={buttonDirection} isActive={isActive}>
      {buttonName}
    </S.ButtonWrapper>
  );
};
export default Button;
