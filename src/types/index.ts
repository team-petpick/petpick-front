type ProductType = 'DOG' | 'CAT' | 'ETC';
type ProductStatus = 'ON' | 'OFF' | 'SOLDOUT';

export interface IProductInfo {
  productId: number;
  sellerId: number;
  categoryId: number;
  productTitle: string;
  productCnt: number;
  productPrice: number;
  productType: ProductType;
  productStatus: ProductStatus;
  productSale: number;
  productImageUrl: string;
  sellerStoreName: string;
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
