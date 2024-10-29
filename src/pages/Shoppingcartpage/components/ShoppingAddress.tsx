import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';
import { PETPICK_COLORS } from '@styles/colors';
import { Map } from '@assets/svg';
import { TextStyles } from '@styles/textStyles';
const ShoppingAddress = () => {
  return (
    <ShippingAddress>
      <HeaderContainer>
        <Title>배송지</Title>
        <ImageBox>
          <Map width="26px" height="26px" />
        </ImageBox>
      </HeaderContainer>
      <BodyContainer>
        <Text>배송지를 입력해주세요</Text>
        <EditButton>변경</EditButton>
      </BodyContainer>
    </ShippingAddress>
  );
};

export default ShoppingAddress;
const EditButton = styled.button`
  border: 1px solid ${PETPICK_COLORS.GRAY[400]};
  border-radius: 6px;
  padding: 7px 10px;
  color: ${PETPICK_COLORS.GRAY[800]};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin-left: 24px;
`;
const Text = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: ${PETPICK_COLORS.BLUE[300]};
`;

const BodyContainer = styled.div`
  margin: 0 0 20px;
`;
const ImageBox = styled.div`
  margin: 0 0 2px;
`;
const Title = styled.h1`
  line-height: 26px;
  font-size: 18px;
  font-weight: 600;
`;
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ShippingAddress = styled.div`
  padding: 20px;
  background: ${PETPICK_COLORS.GRAY[0]};
  border-radius: 16px;
  margin-bottom: 16px;
`;
