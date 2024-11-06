import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTE } from '@constants/ROUTE';
import First from './First';
import Second from './Second';
import Third from './Third';
import { useState, useEffect } from 'react';
import { useMyPetInfoStore } from '@pages/RegisterMyPet/store/useMyPetInfo';
import PetButton from '../PetButton';
import { postPetInfo, putPetImageInfo, putPetInfo } from '@apis/pet';

const RightSide = () => {
  const navigate = useNavigate();
  const { step, userId } = useParams();
  const { myPetInfo } = useMyPetInfoStore();
  const [isNextButtonActive, setIsNextButtonActive] = useState<boolean>(false);
  const petId = localStorage.getItem('petId');

  const handleNextButtonClick = async () => {
    if (Number(step) === 3) {
      if (userId) {
        if (petId) {
          await putPetInfo(myPetInfo);
          await putPetImageInfo(myPetInfo);
        } else {
          await postPetInfo(myPetInfo);
        }
        navigate(ROUTE.MYPAGE.replace(':userId', userId));
      } else {
        navigate(ROUTE.LOGINPAGE);
      }
    } else {
      navigate(ROUTE.REGISTERMYPET.replace(':step', (Number(step) + 1).toString()));
    }
  };
  const handlePrevButtonClick = () => {
    if (Number(step) === 1 && userId) {
      navigate(ROUTE.MYPAGE.replace(':userId', userId));
    } else {
      navigate(ROUTE.REGISTERMYPET.replace(':step', (Number(step) - 1).toString()));
    }
  };

  useEffect(() => {
    console.log(myPetInfo);
  }, [myPetInfo]);

  return (
    <RightSideWrapper>
      <div>
        {step === '1' && <First setIsNextButtonActive={setIsNextButtonActive} />}
        {step === '2' && <Second setIsNextButtonActive={setIsNextButtonActive} />}
        {step === '3' && <Third setIsNextButtonActive={setIsNextButtonActive} />}
      </div>
      <ButtonWrapper>
        <PetButton
          style={{ width: '18vw', maxWidth: '250px' }}
          onClick={handleNextButtonClick}
          buttonDirection="next"
          buttonName={step === '3' ? '완료' : '다음'}
          isActive={isNextButtonActive}
        />
        <PetButton
          style={{ width: '18vw', maxWidth: '250px' }}
          onClick={handlePrevButtonClick}
          buttonDirection="prev"
          buttonName="이전"
          isActive={true}
        />
      </ButtonWrapper>
    </RightSideWrapper>
  );
};

export default RightSide;

const RightSideWrapper = styled.div`
  height: 100%;
  width: 50%;
  gap: 48px;
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  position: absolute;
  bottom: 48px;
`;
