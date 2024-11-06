import { useNavigate } from 'react-router-dom';
import * as S from '../styles/MyPetMenu';
import { ROUTE } from '@constants/ROUTE';
import { getPetInfo } from '@apis/pet';
import { useEffect, useState } from 'react';
import { IPetInfo } from '@types';
const MyPetInfo = () => {
  const navigate = useNavigate();
  const userId = '1';
  const handleClickNavigateToRegisterMyPet = () => {
    const link = ROUTE.REGISTERMYPET.replace(':userId', userId).replace(':step', '1');
    navigate(link);
  };
  const [petInfo, setPetInfo] = useState<IPetInfo | null>(null);
  const { petName, petSpecies, petAge, petImg } = petInfo || {};
  useEffect(() => {
    getPetInfo().then((res) => {
      setPetInfo(res);
      localStorage.setItem('petId', res.petId.toString());
    });
  }, []);
  return (
    <S.MyPetMenuWrapper onClick={handleClickNavigateToRegisterMyPet}>
      <S.MyPetMenuText>우리 집 아이</S.MyPetMenuText>
      <S.MyPetImageInfoWrapper>
        <S.MyPetProfileImage src={petImg} />
        <S.MyPetMenuTextWrapper>
          <S.MyPetName>{petName}</S.MyPetName>
          <S.MyPetInfoText>{petSpecies}</S.MyPetInfoText>
          <S.MyPetInfoText>{petAge}세</S.MyPetInfoText>
        </S.MyPetMenuTextWrapper>
      </S.MyPetImageInfoWrapper>
    </S.MyPetMenuWrapper>
  );
};
export default MyPetInfo;
