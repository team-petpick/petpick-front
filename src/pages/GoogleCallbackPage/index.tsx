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

  useEffect(() => {
    if (code) {
      handleLoginPost(code);
    } else {
      console.log('code not found');
      console.log('로그인 재시도 필요');
      navigate('/login');
    }
  }, []);

  const handleLoginPost = async (code: string) => {
    const data = {
      code: code,
    };
    try {
      const res = await instance.post('/auth/google', data);
      const userName = res.data.user_name[0];
      const userImage = res.data.user_profile[0];
      const userId = res.data.user_id[0];
      const accessToken = res.data.access_token[0];

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
