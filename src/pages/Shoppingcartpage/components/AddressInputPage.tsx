import { SearchColor } from '@assets/svg';
import * as S from '../styles/AddressInputPage.style';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { useUserStore } from '@store/userStore';

const AddressInputPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 기본주소와 우편번호 초기화
  const baseAddress = location.state?.fullAddress || '';
  const baseZipCode = location.state?.zonecode || '';
  const [address, setAddress] = useState(baseAddress); // 기본주소
  const [zipCode, setZipCode] = useState(baseZipCode); // 우편번호
  const [detailAddress, setDetailAddress] = useState(''); // 상세주소

  const postcodeScriptUrl = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(postcodeScriptUrl);

  // 상세주소 입력 핸들러
  const handleDetailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailAddress(e.target.value);
  };

  // 주소 검색 창 열기
  const handleSearchClick = () => {
    open({
      onComplete: (data) => {
        let fullAddress = data.address;
        let extraAddress = '';
        const addressZipCode = data.zonecode;

        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
          }
          fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }

        setAddress(fullAddress); // 기본주소 업데이트
        setZipCode(addressZipCode); // 우편번호 업데이트
      },
    });
  };

  const { userInfo } = useUserStore();
  const userId = userInfo.userId;
  // 저장 버튼 클릭 핸들러
  const handleSaveClick = () => {
    navigate(`/shoppingcart/${userId}`, {
      state: {
        baseAddress: address,
        detailAddress,
        zipCode,
      },
    });
  };

  console.log('우편번호 !!', zipCode);
  return (
    <S.Container>
      <S.Title>샛별배송</S.Title>
      <S.AddressContainer>
        <S.AddressInfo>{address}</S.AddressInfo>
        <S.AddressInfo>{zipCode && `${zipCode}`}</S.AddressInfo>
        <S.SearchButton onClick={handleSearchClick}>
          <SearchColor width="32px" height="32px" />
          <S.Text>재검색</S.Text>
        </S.SearchButton>
      </S.AddressContainer>
      <S.InputContainer>
        <S.InputBox
          value={detailAddress}
          onChange={handleDetailChange}
          placeholder="상세주소를 입력해주세요."
        />
      </S.InputContainer>
      <S.AlertText>
        저장된 배송지는 최대 7일간 임시 저장 후 자동 삭제 됩니다.
        <br /> 로그인할 경우, 회원님의 배송지 목록에 추가됩니다.
      </S.AlertText>
      <S.SaveButton onClick={handleSaveClick}>저장</S.SaveButton>
    </S.Container>
  );
};

export default AddressInputPage;
