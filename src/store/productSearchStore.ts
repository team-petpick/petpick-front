import { TProductFilterType } from '@types';
import { TAnimalType } from '@types';
import { create } from 'zustand';

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

export const useProductSearchStore = create<ProductSearchStore>((set) => ({
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
}));
