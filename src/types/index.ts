import { ANIMAL_TYPE } from '@constants';
import { PRODUCT_FILTER_TYPE } from '@constants/productFilter';

export type ProductType = 'DOG' | 'CAT' | 'ETC';
export type ProductStatus = 'ON' | 'OFF' | 'SOLDOUT';
export type PetGender = 'MALE' | 'FEMALE' | 'OTHER';

// 상품 정보 데이터 타입
export interface IProductInfo {
  productId: number;
  category: {
    categoryId: number;
    categoryName: string;
  };
  productName: string;
  seller: {
    sellerId: number;
    sellerStoreName: string;
    sellerNumber: string;
    sellerAddr: string;
    sellerAddrDetail: string;
  };
  productStatus: 'ON' | 'OFF';
  productPrice: number;
  productSale: number;
  productCnt: number;
  productThumbnail: string;
}

// 상품 상세 정보 API 응답 데이터 타입
export interface ISingleProductInfo {
  content: IProductInfo[];
  likes: {
    likesCount: number;
  };
  productShare: number;
}

// 전체 상품 정보 API 응답 데이터 타입
export interface IAllProductInfo {
  content: IProductInfo[];
}

export interface IOrderInfo {
  orderDate: string;
  orderNum: string;
  productInfos: IProductInfo[];
}

export interface IPurchaseOptionsProps {
  productInfo: IProductInfo;
  productCount: number;
  handlePlusClick: () => void;
  handleMinusClick: () => void;
}

export interface IAddressInfo {
  addressId: number;
  userId: number;
  addressName: string;
  addressZipCode: string;
}

export interface ITitleProps {
  titleText: string;
}

// 견종 묘종 데이터 타입
export type Breed = {
  animal_group1_id: number;
  animal_group2_id: number;
  animal_group2_name: string;
  breed_size_name: string;
};

export interface ICartProps {
  productId: number;
  productName: string;
  productPrice: number;
  productSale: number;
  productThumbnail: string;
  cartCnt: number;
  sellerName: string;
}

export type TProductFilterType = (typeof PRODUCT_FILTER_TYPE)[keyof typeof PRODUCT_FILTER_TYPE];

export type TAnimalType = (typeof ANIMAL_TYPE)[keyof typeof ANIMAL_TYPE];
