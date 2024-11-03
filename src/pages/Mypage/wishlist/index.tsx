import * as S from './styles/WishList.style';
import WishListItem from './components/WishListItem';
import { ProductInfo } from '@assets/mock';

const WishList = () => {
  const ProductInfos = ProductInfo;
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Header>찜한 상품</S.Header>
        <S.CountWrapper>전체 {ProductInfo.length}개</S.CountWrapper>
        <S.ProductList>
          {ProductInfos.map((product) => (
            <WishListItem productInfo={product} />
          ))}
        </S.ProductList>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
export default WishList;
