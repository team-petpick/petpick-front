import { IProductInfo } from '@types';
import * as S from '../styles/WishListItem.style';
import Button from './Button';
import { deleteWishListItem } from '@apis/wish';
import { AxiosError } from 'axios';
import { postCartItem } from '@apis/cart';

interface IProductProps {
  productInfo: IProductInfo;
  // removeProduct: (productId: number) => void;
}
const WishListItem = ({ productInfo }: IProductProps) => {
  const handleDelete = async (productId: number) => {
    try {
      console.log(Number(productId));
      await deleteWishListItem(Number(productId));
      // removeProduct(productId);
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error(axiosError.message);
      if (axiosError.response) {
        console.error(axiosError.response);
      }
    }
  };

  const handleCart = async (productId: number, count: number) => {
    try {
      await postCartItem(productId, count);
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error(axiosError.message);
      if (axiosError.response) {
        console.error(axiosError.response);
      }
    }
  };
  return (
    <S.Wrapper>
      <S.ProductImage src={productInfo.productImg.productImgUrl} />
      <S.DescriptionWrapper>
        {/* <S.SellerName>{productInfo.seller.sellerStoreName}</S.SellerName> */}
        <S.ProductName>{productInfo.productName}</S.ProductName>
        <S.PriceWrapper>
          <S.ProductSalePercent>{productInfo.productSale}%</S.ProductSalePercent>
          <S.ProductSalePrice>{productInfo.productPrice}원</S.ProductSalePrice>
        </S.PriceWrapper>
        <S.ButtonsWrapper>
          <Button text="삭제하기" onClick={() => handleDelete(productInfo.productId)} />
          <Button text="담기" onClick={() => handleCart(productInfo.productId, 1)} />
        </S.ButtonsWrapper>
      </S.DescriptionWrapper>
    </S.Wrapper>
  );
};
export default WishListItem;
