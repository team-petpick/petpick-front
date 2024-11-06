import * as S from '../styles/ShoppingAddress.style';
import { Map } from '@assets/svg';
import { DaumPost } from '../apis/DaumPost';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCartStore } from '@store/cart';

const ShoppingAddress = () => {
  // const [, setAddress] = useState<string>('');
  // const location = useLocation();
  // const fullAddress = location.state?.fullAddress || '배송지를 입력해주세요';

  const [fullAddress, setFullAddress] = useState<string>('배송지를 입력해주세요');
  const location = useLocation();

  const { setUserAddress } = useCartStore();

  useEffect(() => {
    const newAddress = location.state?.fullAddress || '배송지를 입력해주세요';
    setFullAddress(newAddress);
    setUserAddress(newAddress);
  }, [location.state]);

  return (
    <S.ShippingAddressContainer>
      <S.HeaderContainer>
        <S.Title>배송지</S.Title>
        <S.ImageBox>
          <Map width="26px" height="26px" />
        </S.ImageBox>
      </S.HeaderContainer>
      <S.BodyContainer>
        <S.Text isActive={!!fullAddress}>{fullAddress}</S.Text>
        <DaumPost setAddress={(address) => setFullAddress(address)} />
      </S.BodyContainer>
    </S.ShippingAddressContainer>
  );
};

export default ShoppingAddress;
