import { deletePetInfo } from '@apis/pet';
import * as S from '../styles/MyPetMenu';
import { IPetInfo } from '@types';
import { ThreeDotIcon } from '@assets/svg';
import { useState } from 'react';

interface IPetIsNotNullProps {
  handleClickNavigateToRegisterMyPet: () => void;
  petInfo: IPetInfo;
}

const PetIsNotNull = ({ handleClickNavigateToRegisterMyPet, petInfo }: IPetIsNotNullProps) => {
  const { petName, petSpecies, petAge, petImg } = petInfo || {};
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClickDeletePet = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    window.confirm('삭제하시겠습니까?');
    await deletePetInfo();
    setIsDropdownOpen(false);
    window.location.reload();
  };

  const handleToggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDropdownOpen((prev) => !prev);
  };
  return (
    <S.MyPetMenuWrapper onClick={handleClickNavigateToRegisterMyPet}>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
        <S.MyPetMenuText>우리 집 아이</S.MyPetMenuText>
        <S.MyPetImageInfoWrapper>
          <S.MyPetProfileImage src={petImg} />
          <S.MyPetMenuTextWrapper>
            <S.MyPetName>{petName}</S.MyPetName>
            <S.MyPetInfoText>{petSpecies}</S.MyPetInfoText>
            <S.MyPetInfoText>{petAge}세</S.MyPetInfoText>
          </S.MyPetMenuTextWrapper>
        </S.MyPetImageInfoWrapper>
      </div>
      <div
        style={{
          width: '40px',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          padding: '5px',
          position: 'relative', // 상대적 위치 설정
        }}
      >
        <ThreeDotIcon
          width={24}
          height={24}
          onClick={handleToggleDropdown}
          style={{ cursor: 'pointer' }}
        />
        {isDropdownOpen && (
          <S.DropdownMenu>
            <button onClick={handleClickDeletePet}>삭제</button>
          </S.DropdownMenu>
        )}
      </div>
    </S.MyPetMenuWrapper>
  );
};
export default PetIsNotNull;
