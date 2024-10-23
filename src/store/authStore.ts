import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IAuthStore {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}
export const useAuthStore = create(
  persist<IAuthStore>(
    (set) => ({
      isLoggedIn: false,
      login: () => {
        // 테스트를 위한 임시 토큰
        const mockAccessToken = 'your-mock-access-token';
        // const userLocalStorage = localStorage.getItem('accessToken');  // 원래 코드
        if (mockAccessToken) {
          set({ isLoggedIn: true });
        }
      },
      logout: () => {
        set({ isLoggedIn: false });
        localStorage.removeItem('accessToken');
      },
    }),
    {
      name: 'userLocalStorage',
    },
  ),
);
