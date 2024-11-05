import { IButtonStatus } from '@pages/RegisterMyPet/types';
import * as S from '../../styles/button.style';

interface IButtonProps extends IButtonStatus {
  buttonName: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
const PetButton = ({ style, onClick, buttonDirection, isActive, buttonName }: IButtonProps) => {
  return (
    <S.ButtonWrapper
      style={style}
      onClick={onClick}
      buttonDirection={buttonDirection}
      isActive={isActive}
      disabled={!isActive}
    >
      {buttonName}
    </S.ButtonWrapper>
  );
};
export default PetButton;
