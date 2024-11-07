import { create } from 'zustand';

interface LikeIdsStore {
  likedProductIds: number[];
  setLikedProductIds: (ids: number[]) => void;
}

export const useLikeIdsStore = create<LikeIdsStore>((set) => ({
  likedProductIds: [],
  setLikedProductIds: (ids) => set({ likedProductIds: ids }),
}));
