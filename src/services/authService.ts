import { useUserStore } from '@store/userStore';

export const setUserAuthInfo = (userName: string, accessToken: string) => {
  useUserStore.getState().setUserName(userName);
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
  } else {
    console.log('Access Token이 없습니다.');
  }
};
