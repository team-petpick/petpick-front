import * as S from './styles/WishList.style';
import WishListItem from './components/WishListItem';
import { ProductInfo } from '@assets/mock';
import { useEffect, useState } from 'react';
import { getWishLists } from '@apis/wish';

const WishList = () => {
  const [wishList, setWishList] = useState([]);
  const ProductInfos = ProductInfo;
  useEffect(() => {
    const loadWishProducts = async () => {
      const response = await getWishLists();
      const wishList = response.data;
      setWishList(wishList);
    };
    loadWishProducts();
  }, []);
  console.log(wishList);
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
