import { useNavigate } from 'react-router-dom';
import * as S from './styles/Header.style';
import { ROUTE } from '@constants/ROUTE';

export const LoggedOutMenu = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };
  return (
    <>
      <S.LoginButtonText onClick={() => handleNavigation(ROUTE.LOGINPAGE)}>
        로그인
      </S.LoginButtonText>
      <S.TextBox>|</S.TextBox>
      <S.LoginButtonText onClick={() => handleNavigation(ROUTE.SIGNUPPAGE)}>
        회원가입
      </S.LoginButtonText>
    </>
  );
};
