import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IUserStore {
  userId: number | null;
  userName: string | null;
  setUserId: (id: number) => void;
  setUserName: (name: string) => void;
  clearUserName: () => void;
}
export const useUserStore = create(
  persist<IUserStore>(
    (set) => ({
      userId: null,
      userName: null,
      setUserId: (id) => set({ userId: id }),
      setUserName: (name) => set({ userName: name }),
      clearUserName: () => set({ userName: null }),
    }),
    {
      name: 'userStore',
    },
  ),
);
