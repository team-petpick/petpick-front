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

// 반려동물 프로필 데이터 타입
export interface IMyPetInfo {
  petName: string | null;
  petSpecies: string | null;
  petKind: ProductType | null;
  petImg: string | null;
  petAge: number | null;
}

// 반려동물 프로필 데이터 타입
export interface IPetInfo {
  petId: number;
  petName: string;
  petKind: ProductType;
  petSpecies: string;
  petImg: string;
  petAge: number;
  petGender: PetGender | null;
}
