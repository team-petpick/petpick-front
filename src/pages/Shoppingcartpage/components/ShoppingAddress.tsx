import * as S from '../styles/ShoppingAddress.style';
import { Map } from '@assets/svg';
import { DaumPost } from '../apis/DaumPost';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCartStore } from '@store/cart';

const ShoppingAddress = () => {
  const location = useLocation();

  // 기본주소, 상세주소, 우편번호 상태 관리
  const [baseAddress, setBaseAddress] = useState<string>('배송지를 입력해주세요');
  const [detailAddress, setDetailAddress] = useState<string>('');
  const [zipCode, setZipCode] = useState<string>('');

  const { setUserAddress } = useCartStore();

  useEffect(() => {
    // location.state에서 각각의 값을 가져옵니다.
    const newBaseAddress = location.state?.baseAddress || '배송지를 입력해주세요';
    const newDetailAddress = location.state?.detailAddress || '';
    const newZipCode = location.state?.zipCode || '';

    setBaseAddress(newBaseAddress);
    setDetailAddress(newDetailAddress);
    setZipCode(newZipCode);

    // 전체 주소로 병합해서 setUserAddress에 저장
    setUserAddress({
      baseAddress: `${newBaseAddress}`,
      detailAddress: ` ${newDetailAddress}`,
      zipCode: `${newZipCode}`,
    });
    // setUserAddress(`${newBaseAddress} ${newDetailAddress} ${newZipCode}`);
  }, [location.state, setUserAddress]);

  return (
    <S.ShippingAddressContainer>
      <S.HeaderContainer>
        <S.Title>배송지</S.Title>
        <S.ImageBox>
          <Map width="26px" height="26px" />
        </S.ImageBox>
      </S.HeaderContainer>
      <S.BodyContainer>
        <S.Text isActive={!!baseAddress}>
          {baseAddress} {detailAddress}
        </S.Text>
        <S.Text isActive={!!zipCode}>{zipCode && `${zipCode}`}</S.Text>
        <DaumPost
          setAddress={(address) => setBaseAddress(address)}
          setCode={(zipCode) => setZipCode(zipCode)}
        />
      </S.BodyContainer>
    </S.ShippingAddressContainer>
  );
};

export default ShoppingAddress;
