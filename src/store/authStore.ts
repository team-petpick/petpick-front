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
        const userLocalStorage = localStorage.getItem('accessToken');
        if (userLocalStorage) {
          set({ isLoggedIn: true });
        }
      },
      logout: () => {
        set({ isLoggedIn: false });
        localStorage.clear();
      },
    }),
    {
      name: 'userLocalStorage',
    },
  ),
);
