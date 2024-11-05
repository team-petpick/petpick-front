import instance from '@apis';

export const logout = async () => {
  try {
    await instance.post('/v1/auth/logout', null, {
      withCredentials: true,
    });
    localStorage.removeItem('accessToken');
    console.log('AccessToken removed:', localStorage.getItem('accessToken'));
    delete instance.defaults.headers.common['Authorization'];
    console.log('로그아웃 성공: AccessToken 삭제 완료');
  } catch (error) {
    console.error('logout failed:', error);
    throw error;
  }
};
