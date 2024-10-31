import { MY_PAGE_SIDE_BAR_MENU } from '@constants/myPageSidebarMenu';
import { create } from 'zustand';
import { TMypageState } from '../types';

interface IUseControlledSidebarStore {
  selectedComponent: TMypageState;
  setSelectedComponent: (component: TMypageState) => void;
}

export const useControllSidebarStore = create<IUseControlledSidebarStore>((set) => ({
  selectedComponent: MY_PAGE_SIDE_BAR_MENU.WISHLIST,
  setSelectedComponent: (component: TMypageState) => set({ selectedComponent: component }),
}));
