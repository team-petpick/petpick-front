import { useNavigate, useParams } from 'react-router-dom';
import { ROUTE } from '@constants/ROUTE';
import { Cart, Search, PetpickLogo, User } from '@assets/svg/index';
import { useAuthStore } from '@store/authStore';
import { useUserStore } from '@store/userStore';
import { useEffect } from 'react';
import * as S from './styles/Header.style';

const Header = () => {
  // 로그인 상태 관리
  const { isLoggedIn, login, accessToken, refreshToken } = useAuthStore();
  const { userId, setUserId } = useUserStore();
  const { userId: paramUserId } = useParams(); //URL에서 userId 가져오기

  // router 설정
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate('/');
  };
  const handleClickNavigateToLoginPage = () => {
    if (accessToken && refreshToken) {
      login(accessToken, refreshToken);
    } else {
      console.log('유효한 토큰이 없습니다.');
    }
    navigate(ROUTE.LOGINPAGE);
  };
  const handleClickNavigateToSignUpPage = () => {
    navigate(ROUTE.SIGNUPPAGE);
  };
  const handleLMyPageButtonClick = () => {
    // 비회원 로직
    if (!isLoggedIn) {
      alert('로그인 사용자만 이용할 수 있는 기능입니다.');
    } else {
      if (userId !== null) {
        navigate(ROUTE.MYPAGE.replace(':userId', userId.toString()));
      } else {
        alert('사용자 ID를 불러오는 중입니다.');
      }
    }
  };
  const handleCartButtonClick = () => {
    if (userId !== null) {
      navigate(ROUTE.SHOPPINGCART.replace(':userId', userId.toString()));
    } else {
      alert('사용자 ID를 불러오는 중입니다.');
    }
  };
  // useEffect를 사용하여 URL의 userId가 있을 경우 store에 설정
  useEffect(() => {
    if (paramUserId) {
      setUserId(Number(paramUserId));
    }
  }, [paramUserId, setUserId]);

  // 비회원 로직
  return (
    <S.HeaderLayout>
      <S.HeaderContainer>
        <S.LoginMenuContainer>
          {/* 로그인 시 사용자이름 나타내기 */}
          {isLoggedIn ? (
            <S.LoginButtonText>김윤일 님</S.LoginButtonText>
          ) : (
            <S.LoginButtonText onClick={handleClickNavigateToLoginPage}>로그인</S.LoginButtonText>
          )}
          <S.TextBox>|</S.TextBox>
          <S.LoginButtonText onClick={handleClickNavigateToSignUpPage}>회원가입</S.LoginButtonText>
        </S.LoginMenuContainer>
        <S.ContentContainer>
          <button onClick={handleHomeClick}>
            <PetpickLogo width="115" height="100" />
          </button>
          <S.SearchContainer>
            <S.SearchBox type="text" placeholder="검색어를 입력해주세요" />
            <S.SearchButton>
              <Search width="30" height="30" />
            </S.SearchButton>
          </S.SearchContainer>
          <S.ButtonContainer>
            <button onClick={handleCartButtonClick}>
              <Cart width="30" height="30" />
            </button>
            <button onClick={handleLMyPageButtonClick}>
              <User width="30" height="30" />
            </button>
          </S.ButtonContainer>
        </S.ContentContainer>
      </S.HeaderContainer>
    </S.HeaderLayout>
  );
};
export default Header;
