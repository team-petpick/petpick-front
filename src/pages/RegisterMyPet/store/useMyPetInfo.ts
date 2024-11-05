import { PetGender, ProductType } from '@types';
import { create } from 'zustand';

interface IMyPetInfo {
  petName: string | null;
  petSpecies: string | null;
  petKind: ProductType | null;
  petAge?: number | null;
  petGender?: PetGender | null;
  imageSrc?: string | null;
}

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
    petName: null,
    petSpecies: null,
    petKind: null,
    petAge: null,
    petGender: null,
    imageSrc: null,
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
