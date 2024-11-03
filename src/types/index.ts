export type ProductType = 'DOG' | 'CAT' | 'ETC';
export type ProductStatus = 'ON' | 'OFF' | 'SOLDOUT';
export interface IPurchaseOptionsProps {
  productInfo: IProductInfo;
  productCount: number;
  handlePlusClick: () => void;
  handleMinusClick: () => void;
}
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
