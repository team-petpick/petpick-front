import * as S from './styles/WishList.style';
import WishListItem from './components/WishListItem';
import { ProductInfo } from '@assets/mock';
import { useEffect, useState } from 'react';
import { getWishLists } from '@apis/wish';
import { AxiosError } from 'axios';

const WishList = () => {
  const [, setWishList] = useState([]);
  const ProductInfos = ProductInfo;
  useEffect(() => {
    const loadWishProducts = async () => {
      try {
        const response = await getWishLists();
        const wishLists = response.data;
        setWishList(wishLists);
      } catch (error) {
        const axiosError = error as AxiosError;
        console.error(axiosError.message);
      }
    };
    loadWishProducts();
  }, []);
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
