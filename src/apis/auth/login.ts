import instance from '@apis';

export const googleLogin = async (code: string) => {
  const data = {
    code: code,
  };
  try {
    const response = await instance.post('/api/v1/auth/google', data);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log('로그인 실패', error);
    throw error;
  }
};
