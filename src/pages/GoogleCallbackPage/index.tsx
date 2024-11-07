import instance from '@apis';
import Loading from '@components/Loading';
import { useUserStore } from '@store/userStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleCallbackPage = () => {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  const { setUserInfo } = useUserStore();

  console.log('search', window.location.search);
  console.log('params', params);
  console.log('code', code);

  useEffect(() => {
    if (code) {
      handleLoginPost(code);
    } else {
      console.log('code not found');
      console.log('로그인 재시도 필요');
      navigate('/login');
    }
  }, [code, navigate]);

  const handleLoginPost = async (code: string) => {
    const data = {
      code: code,
    };
    try {
      const res = await instance.post('/auth/google', data);
      const userName = res.data.user_name;
      const userImage = res.data.user_profile;
      const userId = res.data.user_id;
      const accessToken = res.data.access_token;

      if (accessToken) {
        const userInfo = { userName, userImage, userId };
        localStorage.setItem('accessToken', accessToken);
        setUserInfo(userInfo);
        navigate('/');
      } else {
        console.log('accesstoken not found');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return <Loading />;
};
export default GoogleCallbackPage;
