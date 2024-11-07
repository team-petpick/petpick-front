import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IUserInfo {
  userId: number | null;
  userName: string | null;
  userImage: string | null;
}
interface IUserStore {
  userInfo: IUserInfo;
  setUserInfo: (userInfo: IUserInfo) => void;
  clearUserInfo: () => void;
}

export const useUserStore = create(
  persist<IUserStore>(
    (set) => ({
      userInfo: {
        userId: null,
        userName: '이횰',
        userImage: null,
      },
      setUserInfo: (newInfo) => set({ userInfo: newInfo }),
      clearUserInfo: () =>
        set({
          userInfo: {
            userId: null,
            userName: null,
            userImage: null,
          },
        }),
    }),
    {
      name: 'userStore',
    },
  ),
);
