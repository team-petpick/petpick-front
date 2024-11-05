import { logout } from '@apis/auth/logout';
import { useUserStore } from '@store/userStore';

export const setUserAuthInfo = (userName: string, accessToken: string) => {
  useUserStore.getState().setUserName(userName);
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
  } else {
    console.log('Access Token이 없습니다.');
  }
};

export const handleLogout = async (clearUserName: () => void, onLogOut: () => void) => {
  try {
    await logout();
    localStorage.removeItem('accessToken');
    clearUserName();
    onLogOut();
  } catch (error) {
    console.log(error, '로그아웃 실패');
  }
};
