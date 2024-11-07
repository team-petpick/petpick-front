import { create } from 'zustand';

interface IUseActivePeriodStore {
  activePeriod: number;
  setActivePeriod: (period: number) => void;
}

export const useActivePeriodStore = create<IUseActivePeriodStore>((set) => ({
  activePeriod: 0,
  setActivePeriod: (period) => set({ activePeriod: period }),
}));
