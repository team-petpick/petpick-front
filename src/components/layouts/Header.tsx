import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@constants/ROUTE';
import { Cart, Search, PetpickLogo, User } from '@assets/svg/index';
import * as S from './styles/Header.style';
import { LoggedInMenu } from './LoggedInMenu';
import { LoggedOutMenu } from './LoggedOutMenu';
// import { useAuthStatus } from '@hooks/useAuthStatus';
import { useEffect, useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleNavigation = (path: string, requireLogin = false) => {
    if (requireLogin && !isLoggedIn) {
      alert('로그인 사용자만 이용할 수 있는 기능입니다.');
      return;
    }
    navigate(path);
  };

  const handleLogout = () => {
    handleNavigation('/');
  };

  useEffect(() => {
    const checkLoginStatus = () => {
      const accessToken = localStorage.getItem('accessToken');
      setIsLoggedIn(!!accessToken);
    };
    checkLoginStatus();
  }, [isLoggedIn]);

  return (
    <S.HeaderLayout>
      <S.HeaderContainer>
        <S.LoginMenuContainer>
          {isLoggedIn ? <LoggedInMenu onLogOut={handleLogout} /> : <LoggedOutMenu />}
        </S.LoginMenuContainer>
        <S.ContentContainer>
          <button onClick={() => handleNavigation('/')}>
            <PetpickLogo width="115" height="100" />
          </button>
          <S.SearchContainer>
            <S.SearchBox type="text" placeholder="검색어를 입력해주세요" />
            <S.SearchButton>
              <Search width="30" height="30" />
            </S.SearchButton>
          </S.SearchContainer>
          <S.ButtonContainer>
            <button
              onClick={() => handleNavigation(ROUTE.SHOPPINGCART.replace(':userId', '1'), true)}
            >
              <Cart width="30" height="30" />
            </button>
            <button onClick={() => handleNavigation(ROUTE.MYPAGE.replace(':userId', '1'), true)}>
              <User width="30" height="30" />
            </button>
          </S.ButtonContainer>
        </S.ContentContainer>
      </S.HeaderContainer>
    </S.HeaderLayout>
  );
};
export default Header;
