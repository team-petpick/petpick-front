import * as S from '../styles/MyPetMenu';
const MyPetInfo = () => {
  return (
    <S.MyPetMenuWrapper>
      <S.MyPetMenuText>우리 집 아이</S.MyPetMenuText>
      <S.MyPetImageInfoWrapper>
        <S.MyPetProfileImage src="https://cdn.pixabay.com/photo/2016/11/22/23/44/dog-1850463_960_720.jpg" />
        <S.MyPetMenuTextWrapper>
          <S.MyPetName>장미</S.MyPetName>
          <S.MyPetInfoText>푸들</S.MyPetInfoText>
          <S.MyPetInfoText>3세</S.MyPetInfoText>
        </S.MyPetMenuTextWrapper>
      </S.MyPetImageInfoWrapper>
    </S.MyPetMenuWrapper>
  );
};
export default MyPetInfo;
