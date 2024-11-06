import * as S from './styles/WishList.style';
import WishListItem from './components/WishListItem';
import { useEffect, useState } from 'react';
import { getWishLists } from '@apis/wish';
import { AxiosError } from 'axios';

const WishList = () => {
  const [wishList, setWishList] = useState([]);

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

  // const removeProductFromWishList = (productId: number) => {
  //   setWishList((prevWishList) => prevWishList.filter((item) => item.productId !== productId));
  // };
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Header>찜한 상품</S.Header>
        <S.CountWrapper>전체 {wishList.length}개</S.CountWrapper>
        <S.ProductList>
          {wishList.map((product) => (
            <WishListItem productInfo={product} />
          ))}
        </S.ProductList>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
export default WishList;
