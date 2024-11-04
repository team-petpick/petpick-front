import { ROUTE } from '@constants/ROUTE';
import { useUserStore } from '@store/userStore';
import { PETPICK_COLORS } from '@styles/colors';
import { useEffect } from 'react';
import { Address, useDaumPostcodePopup } from 'react-daum-postcode';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

interface IDaumPostProps extends Partial<Address> {
  setAddress: (address: string) => void;
}

export const DaumPost = ({ setAddress }: IDaumPostProps) => {
  const navigate = useNavigate();
  const { userId, setUserId } = useUserStore();
  const { userId: paramUserId } = useParams(); //URL에서 userId 가져오기

  const postcodeScriptUrl = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(postcodeScriptUrl);

  const handleComplete = (data: Address) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setAddress(fullAddress);
    navigate(
      ROUTE.ADDRESSINPUTPAGE.replace(
        ':userId',
        userId !== null && userId !== undefined ? userId.toString() : '', // userId가 null인지 확인하는 로직
      ),
      {
        state: { fullAddress },
      },
    );
  }; // 검색 완료 후 주소와 함께 라우팅
  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  useEffect(() => {
    if (paramUserId) {
      setUserId(Number(paramUserId));
    }
  }, [paramUserId, setUserId]);

  return (
    <EditButton type="button" onClick={handleClick}>
      변경
    </EditButton>
  );
};

const EditButton = styled.button`
  border: 1px solid ${PETPICK_COLORS.GRAY[400]};
  border-radius: 6px;
  padding: 0px 10px;
  color: ${PETPICK_COLORS.GRAY[800]};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin-left: 24px;
  white-space: nowrap;
`;