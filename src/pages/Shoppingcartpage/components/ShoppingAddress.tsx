import * as S from '../styles/ShoppingAddress.style';
import { Map } from '@assets/svg';
import { DaumPost } from '../apis/DaumPost';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Address } from 'react-daum-postcode';
interface IDaumPostProps extends Address {
  setAddress: (address: string) => void;
}
const ShoppingAddress = () => {
  const [address, setAddress] = useState<string>('');
  const location = useLocation();
  const fullAddress = location.state?.fullAddress || '배송지를 입력해주세요';
  return (
    <S.ShippingAddressContainer>
      <S.HeaderContainer>
        <S.Title>배송지</S.Title>
        <S.ImageBox>
          <Map width="26px" height="26px" />
        </S.ImageBox>
      </S.HeaderContainer>
      <S.BodyContainer>
        <S.Text isActive={fullAddress}>{fullAddress}</S.Text>
        <DaumPost setAddress={(address) => setAddress(address)} />
      </S.BodyContainer>
    </S.ShippingAddressContainer>
  );
};

export default ShoppingAddress;
