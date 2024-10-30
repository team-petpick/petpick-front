import { SearchColor } from '@assets/svg';
import { PETPICK_COLORS } from '@styles/colors';
import styled from 'styled-components';

const AddressInputPage = () => {
  return (
    <Container>
      <Title>샛별배송</Title>
      <AddressContainer>
        <AddressInfo>주소지</AddressInfo>
        <SearchButton>
          <SearchColor width="32px" height="32px" />
          <Text>재검색</Text>
        </SearchButton>
      </AddressContainer>
      <InputContainer>
        <InputBox />
      </InputContainer>
      <AlertText>
        저장된 배송지는 최대 7일간 임시 저장 후 자동 삭제 됩니다.
        <br /> 로그인할 경우, 회원님의 배송지 목록에 추가됩니다.
      </AlertText>
      <SaveButton>저장</SaveButton>
    </Container>
  );
};

export default AddressInputPage;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  color: rgb(51, 51, 51);
  text-align: center;
  margin: 0 0 30px;
`;
const Text = styled.span`
  display: flex;
  align-items: center;
  margin: 2px 0 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: ${PETPICK_COLORS.BLUE[300]};
`;
const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 120px;
  height: 44px;
  border-radius: 3px;
  color: ${PETPICK_COLORS.GRAY[800]};
  background-color: rgb(255, 255, 255);
  border: 2px solid ${PETPICK_COLORS.BLUE[300]};
  box-sizing: border-box;
`;
const AddressInfo = styled.p`
  display: inline-flex;
  overflow: hidden;
  flex: 1 1 0%;
  margin-right: 10px;
  padding: 0px 12px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 3px;
  background-color: rgb(250, 250, 250);
  font-size: 14px;
  line-height: 42px;
  color: rgb(153, 153, 153);
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const AlertText = styled.div`
  padding-bottom: 20px;
  font-size: 12px;
  color: ${PETPICK_COLORS.GRAY[500]};
`;
const InputBox = styled.input`
  width: 100%;
  height: 44px;
  padding: 0px 11px 1px 15px;
  border-radius: 4px;
  border: 1px solid rgb(221, 221, 221);
  font-weight: 400;
  font-size: 16px;
  line-height: 42px;
  color: rgb(51, 51, 51);
  outline: none;
  box-sizing: border-box;
  /* font-size: 14px; */
`;
const InputContainer = styled.div`
  padding: 0 0 12px;
`;
const AddressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 10px;
`;
const Container = styled.div`
  padding: 30px;
  box-sizing: border-box;
`;
const SaveButton = styled.button`
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 44px;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: ${PETPICK_COLORS.BLUE[300]};
  border: 0px none;
  font-size: 14px;
  font-weight: 500;
`;
