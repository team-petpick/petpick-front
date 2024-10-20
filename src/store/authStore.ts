import { create } from 'zustand';

interface IAuthStore {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}
export const useAuthStore = create<IAuthStore | null>((set) => ({
  isLogin: false,
  setIsLogin: (isLogin: boolean) => set({ isLogin }),
}));
