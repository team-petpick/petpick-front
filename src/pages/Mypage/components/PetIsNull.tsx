import * as S from '../styles/MyPetMenu';

interface IPetIsNullProps {
  handleClickNavigateToRegisterMyPet: () => void;
}

const PetIsNull = ({ handleClickNavigateToRegisterMyPet }: IPetIsNullProps) => {
  return (
    <S.MyPetMenuWrapper onClick={handleClickNavigateToRegisterMyPet}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <S.MyPetMenuText style={{ fontSize: '24px' }}>우리 집 아이</S.MyPetMenuText>
        <S.MyPetMenuText style={{ fontSize: '24px' }}>등록하기</S.MyPetMenuText>
      </div>
    </S.MyPetMenuWrapper>
  );
};
export default PetIsNull;
