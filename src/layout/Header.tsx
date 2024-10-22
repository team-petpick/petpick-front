import styled from 'styled-components';
import { Like, Cart, Search } from '@assets/svg/index';

const Header = () => {
  return (
    <HeaderLayout>
      <HeaderContainer>
        <LoginMenuContainer>
          <LoginButtonText>로그인</LoginButtonText>
          <TextBox>|</TextBox>
          <LoginButtonText>회원가입</LoginButtonText>
        </LoginMenuContainer>
        <ContentContainer>
          <div>Logo</div>
          <SearchContainer>
            <SearchBox type="text" placeholder="검색어를 입력해주세요" />
            <SearchButton>
              <Search width="30" height="30" />
            </SearchButton>
          </SearchContainer>
          <ButtonContainer>
            <button>
              <Like width="30" height="30" />
            </button>
            <button>
              <Cart width="30" height="30" />
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
  outline: none;
  ::placeholder {
    color: ${({ theme }) => theme.color.gray};
    font-size: 16px;
  }
`;
const SearchButton = styled.button`
  padding: 4px 0 0;
`;
