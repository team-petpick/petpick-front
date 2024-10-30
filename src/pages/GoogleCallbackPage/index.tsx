import instance from '@apis';
import Loading from '@components/Loading';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleCallbackPage = () => {
  const navigate = useNavigate();

  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');

  const handleLoginPost = async (code: string) => {
    const data = {
      code: code,
    };
    try {
      const res = await instance.post('/auth/google', data);
      console.log(res);
      const accessToken = res.data.access_token;
      console.log('accesstoken>>', accessToken);
      if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
        navigate('/');
      } else {
        console.log('accesstoken not found');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (code) {
      handleLoginPost(code);
    } else {
      console.log('로그인 재시도 필요');
      navigate('/login');
    }
  }, [code, navigate]);

  return <Loading />;
};
export default GoogleCallbackPage;
