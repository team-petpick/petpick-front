import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@constants/ROUTE';
import { getPetInfo } from '@apis/pet';
import { useEffect, useState } from 'react';
import { IPetInfo } from '@types';
import { useMyPetInfoStore } from '@pages/RegisterMyPet/store/useMyPetInfo';
import PetIsNull from './PetIsNull';
import PetIsNotNull from './PetIsNotNull';

const MyPetInfo = () => {
  const navigate = useNavigate();
  const [petInfo, setPetInfo] = useState<IPetInfo | null>(null);
  const { setMyPetInfo } = useMyPetInfoStore();

  const handleClickNavigateToRegisterMyPet = () => {
    const userId = localStorage.getItem('userId') || '';
    const link = ROUTE.REGISTERMYPET.replace(':userId', userId).replace(':step', '1');
    navigate(link);
  };

  useEffect(() => {
    getPetInfo().then((res) => {
      if (res === '') {
        setPetInfo(null);
      } else {
        setPetInfo(res);
        setMyPetInfo(res);
        localStorage.setItem('petId', res.petId.toString());
      }
    });
  }, []);

  if (petInfo === null) {
    return <PetIsNull handleClickNavigateToRegisterMyPet={handleClickNavigateToRegisterMyPet} />;
  }
  return petInfo === null ? (
    <PetIsNull handleClickNavigateToRegisterMyPet={handleClickNavigateToRegisterMyPet} />
  ) : (
    <PetIsNotNull
      handleClickNavigateToRegisterMyPet={handleClickNavigateToRegisterMyPet}
      petInfo={petInfo}
    />
  );
};
export default MyPetInfo;
