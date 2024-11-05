import { IProductInfo } from '@types';
import * as S from '../styles/WishListItem.style';
import Button from './Button';
import { deleteWishListItem } from '@apis/wish';
import { AxiosError } from 'axios';

interface IProductProps {
  productInfo: IProductInfo;
  removeProduct: (productId: number) => void;
}
const WishListItem = ({ productInfo, removeProduct }: IProductProps) => {
  const handleDelete = async (productId: number) => {
    try {
      console.log(Number(productId));
      await deleteWishListItem(Number(productId));
      removeProduct(productId);
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error(axiosError.message);
      if (axiosError.response) {
        console.error(axiosError.response); // 서버가 제공하는 추가 정보 확인
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
          <Button text="담기" onClick={() => console.log('담기')} />
        </S.ButtonsWrapper>
      </S.DescriptionWrapper>
    </S.Wrapper>
  );
};
export default WishListItem;
