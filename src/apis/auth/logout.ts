import instance from '@apis';

export const logout = async () => {
  try {
    await instance.post('/api/v1/auth/logout');
  } catch (error) {
    console.error('logout failed:', error);
    throw error;
  }
};
