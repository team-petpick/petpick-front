type ProductType = 'DOG' | 'CAT' | 'ETC';
type ProductStatus = 'ON' | 'OFF' | 'SOLDOUT';

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
  productStatus: 'ON';
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
