import styled from 'styled-components';
import { Cart, Search, Petpick, User } from '@assets/svg/index';
import { useNavigate } from 'react-router-dom';
const Header = ({ userId }: { userId: number }) => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate('/');
  };
  const handleLoginClick = () => {
    navigate('/login');
  };
  const handleLMyPageButtonClick = (userId: number) => {
    navigate(`/mypage/${userId}`);
  };
  const hadleCartButtonClick = (userId: number) => {
    navigate(`/shoppingcart/${userId}`);
  };
  return (
    <HeaderLayout>
      <HeaderContainer>
        <LoginMenuContainer>
          <LoginButtonText onClick={handleLoginClick}>로그인</LoginButtonText>
          <TextBox>|</TextBox>
          <LoginButtonText>회원가입</LoginButtonText>
        </LoginMenuContainer>
        <ContentContainer>
          <button onClick={handleHomeClick}>
            <Petpick width="115" height="100" />
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
  font-size: 12px;
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
  font-size: 12px;
  color: ${({ theme }) => theme.color.grayLight};
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
  border: 1px solid gray;
  border-radius: 6px;
  font-size: 16px;
  color: ${({ theme }) => theme.color.black};
`;
const SearchBox = styled.input`
  width: 100%;
  margin-top: 3px;
  outline: none;
  ::placeholder {
    color: ${({ theme }) => theme.color.gray};
    font-size: 16px;
  }
`;
const SearchButton = styled.button`
  padding: 4px 0 0;
`;
