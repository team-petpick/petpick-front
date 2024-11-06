import * as S from './styles/WishList.style';
import WishListItem from './components/WishListItem';
import { useEffect, useState } from 'react';
import { deleteWishListItem, getWishLists } from '@apis/wish';
import { AxiosError } from 'axios';
import { IProductInfo } from '@types';

interface IWishProduct extends IProductInfo {
  productId: number;
}
const WishList = () => {
  const [wishList, setWishList] = useState<IWishProduct[]>([]);

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

  const handleDeleteWishItem = async (productId: number) => {
    try {
      await deleteWishListItem(productId);
      setWishList((prevWishList) => prevWishList.filter((item) => item.productId !== productId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.Header>찜한 상품</S.Header>
        <S.CountWrapper>전체 {wishList.length}개</S.CountWrapper>
        <S.ProductList>
          {wishList.map((product) => (
            <WishListItem productInfo={product} deleteItem={handleDeleteWishItem} />
          ))}
        </S.ProductList>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
export default WishList;
