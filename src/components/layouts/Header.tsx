import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@constants/ROUTE';
import { Cart, Search, PetpickLogo, User } from '@assets/svg/index';
import { useEffect, useState } from 'react';
import * as S from './styles/Header.style';
import { LoggedInMenu } from './LoggedInMenu';
import { LoggedOutMenu } from './LoggedOutMenu';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    setIsLoggedIn(!!accessToken);
  }, []);

  const handleHomeClick = () => {
    navigate('/');
  };
  const handleLMyPageButtonClick = () => {
    // 비회원 로직
    if (!isLoggedIn) {
      alert('로그인 사용자만 이용할 수 있는 기능입니다.');
    } else {
      navigate(ROUTE.MYPAGE.replace(':userId', '1'));
    }
  };
  const handleCartButtonClick = () => {
    if (isLoggedIn) {
      navigate(ROUTE.SHOPPINGCART.replace(':userId', '1'));
    } else {
      alert('로그인 사용자만 이용할 수 있는 기능입니다.');
    }
  };

  // 비회원 로직
  return (
    <S.HeaderLayout>
      <S.HeaderContainer>
        <S.LoginMenuContainer>
          {/* 로그인 시 사용자이름 나타내기 */}
          {isLoggedIn ? <LoggedInMenu setIsLoggedIn={setIsLoggedIn} /> : <LoggedOutMenu />}
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
