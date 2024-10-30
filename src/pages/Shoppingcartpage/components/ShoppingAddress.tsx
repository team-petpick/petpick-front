import styled from 'styled-components';
import { PETPICK_COLORS } from '@styles/colors';
import { Map } from '@assets/svg';
import { DaumPost } from '../apis/DaumPost';
import { useState } from 'react';

const ShoppingAddress = () => {
  const [address, setAddress] = useState('');
  return (
    <ShippingAddressContainer>
      <HeaderContainer>
        <Title>배송지</Title>
        <ImageBox>
          <Map width="26px" height="26px" />
        </ImageBox>
      </HeaderContainer>
      <BodyContainer>
        {address ? (
          <Text isActive={true}>{address}</Text>
        ) : (
          <Text isActive={false}>배송지를 입력해주세요</Text>
        )}
        <DaumPost setAddress={setAddress} />
      </BodyContainer>
    </ShippingAddressContainer>
  );
};

export default ShoppingAddress;

const Text = styled.span`
  display: flex;
  align-items: center;

  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: ${({ isActive }) => (isActive ? PETPICK_COLORS.GRAY[800] : PETPICK_COLORS.BLUE[300])};
`;

const BodyContainer = styled.div`
  margin: 0 0 20px;
  display: flex;
  justify-content: space-between;
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
const ShippingAddressContainer = styled.div`
  padding: 20px;
  background: ${PETPICK_COLORS.GRAY[0]};
  border-radius: 16px;
  margin-bottom: 16px;
`;
