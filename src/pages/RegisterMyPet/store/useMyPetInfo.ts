import { IMyPetInfo } from '@types';
import { create } from 'zustand';

interface IMyPetBirthday {
  year: number | null;
  month: number | null;
  day: number | null;
}

interface IMyPetInfoStore {
  myPetInfo: IMyPetInfo;
  myPetBirthday: IMyPetBirthday;
  setMyPetInfo: (updatedInfo: Partial<IMyPetInfo>) => void;
  setMyPetBirthday: (updatedBirthday: Partial<IMyPetBirthday>) => void;
}

export const useMyPetInfoStore = create<IMyPetInfoStore>((set) => ({
  myPetInfo: {
    petName: '',
    petSpecies: '',
    petKind: null,
    petAge: null,
    petImg: null,
  },
  myPetBirthday: {
    year: null,
    month: null,
    day: null,
  },
  setMyPetInfo: (updatedInfo) =>
    set((state) => ({
      myPetInfo: { ...state.myPetInfo, ...updatedInfo },
    })),
  setMyPetBirthday: (updatedBirthday) =>
    set((state) => ({
      myPetBirthday: { ...state.myPetBirthday, ...updatedBirthday },
    })),
}));
