import { useUserStore } from '@store/userStore';
import * as S from './styles/Header.style';
import { handleLogout } from '../../services/authService';

interface ILoggedInMenuProps {
  onLogOut: () => void;
}
export const LoggedInMenu = ({ onLogOut }: ILoggedInMenuProps) => {
  const { userName, clearUserName } = useUserStore();

  const onLogoutClick = () => {
    handleLogout(clearUserName, onLogOut);
  };
  return (
    <>
      <S.LoginButtonText>{userName}님</S.LoginButtonText>
      <S.TextBox>|</S.TextBox>
      <S.LoginButtonText onClick={onLogoutClick}>로그아웃</S.LoginButtonText>
    </>
  );
};
