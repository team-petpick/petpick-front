import { create } from 'zustand';

interface IUserStore {
  userId: number | null;
  setUserId: (id: number) => void;
  clearUserId: () => void;
}
export const useUserStore = create<IUserStore>((set) => ({
  userId: null,
  setUserId: (id) => set({ userId: id }),
  clearUserId: () => set({ userId: null }), //로그아웃 시에 userId 초기화
}));
