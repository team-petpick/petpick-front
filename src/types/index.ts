export type TProductType = 'DOG' | 'CAT' | 'ETC';
export type TProductStatus = 'ON' | 'OFF' | 'SOLDOUT';
export type TPetGender = 'MALE' | 'FEMALE' | 'OTHER';
export type TProductFilterType = 'createAt_desc' | 'productLikesTotal_desc';
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

export interface IOrderInfos {
  content: IOrderInfo[];
}
export interface IOrderInfo {
  orderCreateAt: string;
  ordersId: number;
  ordersPrice: number;
  orderStatus: string;
  ordersRequest: string;
  orderDetails: IOrderDetail[];
}
export interface IOrderDetail {
  orderDetailCnt: number;
  orderDetailId: number;
  orderDetailPrice: number;
  orderDetailStatus: string;
  productId: number;
  productName: string;
  productSale: number;
  productThumbnail: string;
  sellerStoreName: string;
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
export type TBreed = {
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

// 반려동물 프로필 데이터 타입
export interface IMyPetInfo {
  petName: string | null;
  petSpecies: string | null;
  petKind: TProductType | null;
  petImg: string | null;
  petAge: number | null;
}

// 반려동물 프로필 데이터 타입
export interface IPetInfo {
  petId: number;
  petName: string;
  petKind: TProductType;
  petSpecies: string;
  petImg: string;
  petAge: number;
  petGender: TPetGender | null;
}

export interface IAddressProps {
  addressName: string;
  addressZipcode: number;
  addressAddr: string;
  addressAddrDetail: string;
  addressTel: string;
  addressRequest: string;
  addressDefault: 'YES' | 'NO';
}

export interface IOrderDetailsProps {
  productId: number;
  orderDetailPrice: number;
  orderDetailCnt: number;
}
export interface IOrderDetail {
  orderDetailId: number;
  productId: number;
  productName: string;
  sellerStoreName: string;
  orderDetailPrice: number;
  orderDetailCnt: number;
  productThumbnail: string;
  productSale: number;
}

export interface IOrder {
  ordersId: number;
  ordersPrice: number;
  orderCreateAt: string;
  ordersStatus: OrderStatus;
  orderDetails: IOrderDetail[];
}

export enum OrderStatus {
  ORDER_CONFIRM = 'ORDER_CONFIRM',
  ORDER_CANCEL = 'ORDER_CANCEL',
  SHIPPING = 'SHIPPING',
  SHIPPED = 'SHIPPED',
}
