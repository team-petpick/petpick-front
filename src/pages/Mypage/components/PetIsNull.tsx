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
        <div style={{ fontSize: '20px' }}>우리 집 아이</div>
        <div style={{ fontSize: '20px' }}>등록하기</div>
      </div>
    </S.MyPetMenuWrapper>
  );
};
export default PetIsNull;
