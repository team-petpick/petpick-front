import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IUserStore {
  userId: number | null;
  userName: string | null;
  setUserName: (name: string) => void;
  clearUserName: () => void;
}
export const useUserStore = create(
  persist<IUserStore>(
    (set) => ({
      userId: null,
      userName: null,
      setUserName: (name) => set({ userName: name }),
      clearUserName: () => set({ userName: null }),
    }),
    {
      name: 'userStore',
    },
  ),
);
