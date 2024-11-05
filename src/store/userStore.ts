import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IUserStore {
  userName: string | null;
  setUserName: (name: string) => void;
  clearUserName: () => void;
}
export const useUserStore = create(
  persist<IUserStore>(
    (set) => ({
      userName: '',
      setUserName: (name) => set({ userName: name + '님' }),
      clearUserName: () => set({ userName: null }),
    }),
    {
      name: 'userStore',
    },
  ),
);
