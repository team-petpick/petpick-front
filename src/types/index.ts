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

type ProductType = 'DOG' | 'CAT' | 'ETC';
type ProductStatus = 'ON' | 'OFF' | 'SOLDOUT';
