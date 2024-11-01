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
