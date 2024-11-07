export type ProductType = 'DOG' | 'CAT' | 'ETC';
export type ProductStatus = 'ON' | 'OFF' | 'SOLDOUT';
export type PetGender = 'MALE' | 'FEMALE' | 'OTHER';

// 상품 정보 데이터 타입
export interface IProductInfo {
  productId: number;
  productName: string;
  seller: {
    sellerId: number;
    sellerStoreName: string;
    sellerNumber: string;
    sellerAddr: string;
    sellerAddrDetail: string;
  };
  productStatus: 'ON' | 'OFF';
  likes: {
    likesCount: number;
  };
  productPrice: number;
  productShare: number;
  productSale: number;
  productCnt: number;
  productImg: {
    productImgId: number;
    productImgThumb: number;
    productImgUrl: string;
    productImgName: string;
  };
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
  orderRequest: string;
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
export type Breed = {
  animal_group1_id: number;
  animal_group2_id: number;
  animal_group2_name: string;
  breed_size_name: string;
};
