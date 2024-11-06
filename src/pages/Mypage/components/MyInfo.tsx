import { useUserStore } from '@store/userStore';
import * as S from '../styles/MyInfo.style';
const MyInfo = () => {
  const { userInfo } = useUserStore();
  const { userName } = userInfo;

  return (
    <S.MyInfoWrapper>
      <S.MyInfoGreetingText>반가워요!</S.MyInfoGreetingText>
      <S.MyInfoNameText>{userName}님</S.MyInfoNameText>
    </S.MyInfoWrapper>
  );
};

export default MyInfo;
