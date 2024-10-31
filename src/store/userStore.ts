import { create } from 'zustand';

interface IUserStore {
  userName: string | null;
  setUserName: (name: string) => void;
  clearUserName: () => void;
}
export const useUserStore = create<IUserStore>((set) => ({
  userName: '',
  setUserName: (name) => set({ userName: name }),
  clearUserName: () => set({ userName: null }),
}));
