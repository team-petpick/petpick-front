import { IProductInfo } from '../types';

export const ProductInfo: IProductInfo[] = [
  {
    productId: 1,
    productName: '강아지 사료 1kg',
    seller: {
      sellerId: 100,
      sellerStoreName: '멍멍이네',
      sellerNumber: '02-1234-5678',
      sellerAddr: '서울시 강남구',
      sellerAddrDetail: '역삼동 123-45',
    },
    productStatus: 'ON',
    likes: {
      likesCount: 15,
    },
    productPrice: 25000,
    productShare: 5,
    productSale: 0,
    productCnt: 100,
    productImg: {
      productImgId: 1,
      productImgThumb: 1,
      productImgUrl: 'https://via.placeholder.com/200',
      productImgName: 'dog-food-1kg.jpg',
    },
  },
  {
    productId: 2,
    productName: '고양이 장난감',
    seller: {
      sellerId: 101,
      sellerStoreName: '냥냥이네',
      sellerNumber: '02-9876-5432',
      sellerAddr: '서울시 서초구',
      sellerAddrDetail: '서초동 456-78',
    },
    productStatus: 'ON',
    likes: {
      likesCount: 23,
    },
    productPrice: 15000,
    productShare: 3,
    productSale: 10,
    productCnt: 50,
    productImg: {
      productImgId: 2,
      productImgThumb: 1,
      productImgUrl: 'https://via.placeholder.com/200',
      productImgName: 'cat-toy.jpg',
    },
  },
];
