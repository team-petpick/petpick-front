import { useUserStore } from '@store/userStore';
import * as S from './styles/Header.style';
import { logout } from '@apis/auth/logout';

interface ILoggedInMenuProps {
  setIsLoggedIn: (value: boolean) => void;
}
export const LoggedInMenu = ({ setIsLoggedIn }: ILoggedInMenuProps) => {
  const { userName, clearUserName } = useUserStore();

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.removeItem('accessToken');
      setIsLoggedIn(false);
      clearUserName();
    } catch (error) {
      console.log(error, '로그아웃 실패');
    }
  };
  return (
    <>
      <S.LoginButtonText>{userName}님</S.LoginButtonText>
      <S.TextBox>|</S.TextBox>
      <S.LoginButtonText onClick={handleLogout}>로그아웃</S.LoginButtonText>
    </>
  );
};
