import { googleLogin } from '@apis/auth/login';
import Loading from '@components/Loading';
import { setUserAuthInfo } from '../../services/authService';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleCallbackPage = () => {
  const navigate = useNavigate();

  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');

  const handleGoogleAuth = async (code: string) => {
    try {
      const { user_name, access_token } = await googleLogin(code);
      const userName = user_name[0];
      setUserAuthInfo(userName, access_token);
      if (access_token) {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (code) {
      handleGoogleAuth(code);
    } else {
      console.log('로그인 재시도 필요');
      navigate('/login');
    }
  }, [code, navigate]);

  return <Loading />;
};
export default GoogleCallbackPage;
