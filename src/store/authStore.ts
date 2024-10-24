import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IAuthStore {
  isLoggedIn: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  login: (accessToken: string, refreshToken: string) => void;
  logout: () => void;
}
export const useAuthStore = create(
  persist<IAuthStore>(
    (set) => ({
      isLoggedIn: false,
      accessToken: null,
      refreshToken: null,
      login: (accessToken, refreshToken) => {
        if (accessToken && refreshToken) {
          set({ isLoggedIn: true, accessToken, refreshToken });
        }
      },
      logout: () => {
        set({ isLoggedIn: false, accessToken: null, refreshToken: null });
      },
    }),
    {
      name: 'userAuthStore',
    },
  ),
);
