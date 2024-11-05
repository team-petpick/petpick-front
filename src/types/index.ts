export interface IProductInfoItem {
  productId: number;
  productName: string;
  productCnt: number;
  productPrice: number;
  productSale: number;
  productStatus: 'ON' | 'SOLDOUT';
  productThumbnail: string | null;
  category: {
    categoryId: number;
    categoryName: string;
  };
  seller: {
    sellerId: number;
    sellerStoreName: string;
    sellerNumber: string;
    sellerAddr: string;
    sellerAddrDetail: string;
  };
}
export type ProductType = 'DOG' | 'CAT' | 'ETC';
export type ProductStatus = 'ON' | 'OFF' | 'SOLDOUT';
export type PetGender = 'MALE' | 'FEMALE' | 'OTHER';
export interface IPurchaseOptionsProps {
  productInfo: IProductInfo;
  productCount: number;
  handlePlusClick: () => void;
  handleMinusClick: () => void;
}
export interface IProductInfo {
  content: IProductInfoItem[];
  likes: {
    likesCount: number;
  };
  productShare: number;
}

export interface IOrderInfo {
  orderDate: string;
  orderNum: string;
  productInfos: IProductInfo[];
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

export type Breed = {
  animal_group1_id: number;
  animal_group2_id: number;
  animal_group2_name: string;
  breed_size_name: string;
};
