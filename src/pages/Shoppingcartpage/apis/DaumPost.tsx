import { PETPICK_COLORS } from '@styles/colors';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import styled from 'styled-components';

export const DaumPost = ({ setAddress }) => {
  const postcodeScriptUrl = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(postcodeScriptUrl);

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';
    const localAddress = data.sido + ' ' + data.sigungu;

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress = fullAddress.replace(localAddress, '');
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setAddress(fullAddress);
  };
  const handleClick = () => {
    open({ onComplete: handleComplete });
  };
  return (
    <EditButton type="button" onClick={handleClick}>
      변경
    </EditButton>
  );
};

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
