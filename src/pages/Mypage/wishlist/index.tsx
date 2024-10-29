import { IProductInfo } from '@types';
import * as S from './styles/WishList.style';
import WishListItem from './components/WishListItem';

const WishList = () => {
  const ProductInfo: IProductInfo[] = [
    {
      productId: 1,
      sellerId: 1,
      categoryId: 1,
      productTitle: '강아지가 먹을 수 있는 닭고기',
      productCnt: 1,
      productPrice: 10000,
      productType: 'DOG',
      productStatus: 'ON',
      productSale: 10,
      sellerStoreName: '윤일이네 농장',
      productImageUrl: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg',
    },
    {
      productId: 1,
      sellerId: 1,
      categoryId: 1,
      productTitle: '강아지가 먹을 수 있는 닭고기',
      productCnt: 1,
      productPrice: 10000,
      productType: 'DOG',
      productStatus: 'ON',
      productSale: 10,
      sellerStoreName: '윤일이네 농장',
      productImageUrl: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg',
    },
    {
      productId: 1,
      sellerId: 1,
      categoryId: 1,
      productTitle: '강아지가 먹을 수 있는 닭고기',
      productCnt: 1,
      productPrice: 10000,
      productType: 'DOG',
      productStatus: 'ON',
      productSale: 10,
      sellerStoreName: '윤일이네 농장',
      productImageUrl: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg',
    },
  ];
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Header>찜한 상품</S.Header>
        <S.CountWrapper>전체 {ProductInfo.length}개</S.CountWrapper>
        <S.ProductList>
          {ProductInfo.map((product) => (
            <WishListItem productInfo={product} />
          ))}
        </S.ProductList>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
export default WishList;
