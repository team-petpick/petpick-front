import { TProductFilterType, TProductType } from '@types';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface IProductSearchParam {
  search: string;
  type: TProductType | null;
  category: number | null;
  sort: TProductFilterType | null;
  page: number;
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
        page: 0,
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
