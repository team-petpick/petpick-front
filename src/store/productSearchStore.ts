import { TProductFilterType } from '@types';
import { TAnimalType } from '@types';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface IProductSearchParam {
  search: string;
  type: TAnimalType | null;
  category: number | null;
  sort: TProductFilterType | null;
}

interface ProductSearchStore {
  productListParams: IProductSearchParam;
  setProductListParams: (params: IProductSearchParam) => void;
}

export const useProductSearchStore = create<ProductSearchStore>()(
  persist(
    (set) => ({
      productListParams: {
        search: '',
        type: null,
        category: null,
        sort: null,
      },
      setProductListParams: (newParams) =>
        set((state) => ({
          productListParams: { ...state.productListParams, ...newParams },
        })),
    }),
    {
      name: 'productSearchStore',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
