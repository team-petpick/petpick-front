import { GoogleLogin, PetpickLogo } from '@assets/svg';
import * as S from './index.style';

const LoginPage = () => {
  const urlPath = window.location.pathname;
  const parsedString = urlPath.split('/').pop();
  const pathString = parsedString === 'login' ? '로그인' : '회원가입';
  return (
    <S.LoginLayout>
      <PetpickLogo width={200} height={200} />{' '}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '100px',
        }}
      >
        {<S.SignUpText>{pathString}</S.SignUpText>}
        <S.SignUpExplainText>
          소셜 로그인을 사용하면 간편하게 <br /> {pathString}이 가능합니다.
        </S.SignUpExplainText>
        <S.SignUpAnnounce>
          <S.Emphasize>3초만에 </S.Emphasize>빠른 {pathString}
        </S.SignUpAnnounce>
        <S.ArrowBox />
        <GoogleLogin />
      </div>
    </S.LoginLayout>
  );
};

export default LoginPage;
