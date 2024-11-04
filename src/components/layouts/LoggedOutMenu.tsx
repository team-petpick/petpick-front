import { useNavigate } from 'react-router-dom';
import * as S from './styles/Header.style';
import { ROUTE } from '@constants/ROUTE';

export const LoggedOutMenu = () => {
  const navigate = useNavigate();
  const handleClickNavigateToLoginPage = () => {
    navigate(ROUTE.LOGINPAGE);
  };
  const handleClickNavigateToSignUpPage = () => {
    navigate(ROUTE.SIGNUPPAGE);
  };
  return (
    <>
      <S.LoginButtonText onClick={handleClickNavigateToLoginPage}>로그인</S.LoginButtonText>
      <S.TextBox>|</S.TextBox>
      <S.LoginButtonText onClick={handleClickNavigateToSignUpPage}>회원가입</S.LoginButtonText>
    </>
  );
};
