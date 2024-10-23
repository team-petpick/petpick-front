import styled from 'styled-components';
import { Cart, Search, PetpickLogo, User } from '@assets/svg/index';
import { PETPICK_COLORS } from '@constants/colors';
import { TextStyles } from '@styles/textStyles';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@constants/ROUTE';

interface HeaderProps {
  userId: number;
  userName: string;
  isLoggedIn: boolean;
}
const Header = ({ userId, userName, isLoggedIn }: HeaderProps) => {
  // router 설정
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate('/');
  };
  const handleClickNavigateToLoginPage = () => {
    navigate(ROUTE.LOGINPAGE);
  };
  const handleClickNavigateToSignUpPage = () => {
    navigate(ROUTE.SIGNUPPAGE);
  };
  const handleLMyPageButtonClick = (userId: number) => {
    // 비회원 로직
    if (isLoggedIn === false) {
      alert('로그인 사용자만 이용할 수 있는 기능입니다.');
    }
    navigate(`/mypage/${userId}`);
  };
  const hadleCartButtonClick = (userId: number) => {
    navigate(`/shoppingcart/${userId}`);
  };

  // 비회원 로직
  return (
    <HeaderLayout>
      <HeaderContainer>
        <LoginMenuContainer>
          {/* 로그인 시 사용자이름 나타내기 */}
          {isLoggedIn ? (
            <LoginButtonText>{userName}</LoginButtonText>
          ) : (
            <LoginButtonText onClick={handleClickNavigateToLoginPage}>로그인</LoginButtonText>
          )}
          <TextBox>|</TextBox>
          <LoginButtonText onClick={handleClickNavigateToSignUpPage}>회원가입</LoginButtonText>
        </LoginMenuContainer>
        <ContentContainer>
          <button onClick={handleHomeClick}>
            <PetpickLogo width="115" height="100" />
          </button>
          <SearchContainer>
            <SearchBox type="text" placeholder="검색어를 입력해주세요" />
            <SearchButton>
              <Search width="30" height="30" />
            </SearchButton>
          </SearchContainer>
          <ButtonContainer>
            <button onClick={() => hadleCartButtonClick(userId)}>
              <Cart width="30" height="30" />
            </button>
            <button onClick={() => handleLMyPageButtonClick(userId)}>
              <User width="30" height="30" />
            </button>
          </ButtonContainer>
        </ContentContainer>
      </HeaderContainer>
    </HeaderLayout>
  );
};

export default Header;

const LoginButtonText = styled.button`
  ${TextStyles.caption.xsmallR}
`;
const HeaderLayout = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const HeaderContainer = styled.div`
  width: 1050px;
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
`;
const TextBox = styled.span`
  ${TextStyles.caption.xsmallR}
  color: ${PETPICK_COLORS.GRAY[400]};
`;
const LoginMenuContainer = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
  align-self: flex-end;
  gap: 12px;
`;
const ContentContainer = styled.div`
  height: 63px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-self: center;
  gap: 26px;
`;
const SearchContainer = styled.div`
  width: 400px;
  height: 48px;
  padding: 0 10px 0 14px;
  display: flex;
  align-items: center;
  border: 1px solid ${PETPICK_COLORS.BLUE[300]};
  border-radius: 6px;
  ${TextStyles.body.mediumR}
  color: ${PETPICK_COLORS.GRAY[900]};
`;
const SearchBox = styled.input`
  width: 100%;
  margin-top: 3px;
  outline: none;
  ::placeholder {
    color: ${PETPICK_COLORS.GRAY[600]};
    ${TextStyles.body.mediumR}
  }
`;
const SearchButton = styled.button`
  padding: 4px 0 0;
`;
