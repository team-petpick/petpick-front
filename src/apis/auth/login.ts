import instance from '@apis';

export const googleLogin = async (code: string) => {
  try {
    const response = await instance.post('/api/v1/auth/google', code);
    return response.data;
  } catch (error) {
    console.log('로그인 실패', error);
    throw error;
  }
};
