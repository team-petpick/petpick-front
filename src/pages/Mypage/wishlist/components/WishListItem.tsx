import * as S from '../styles/WishListItem.style';
import Button from './Button';
import { AxiosError } from 'axios';
import { postCartItem } from '@apis/cart';
import { addCommaToPrice } from '@utils/addCommaToPrice';

interface IProductProps {
  productInfo: any;
  deleteItem: (productId: number) => void;
}
const WishListItem = ({ productInfo, deleteItem }: IProductProps) => {
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
      <S.ProductImage src={productInfo.productImg[0].productImgUrl} />
      <S.DescriptionWrapper>
        <S.ProductName>{productInfo.productName}</S.ProductName>
        <S.PriceWrapper>
          <S.ProductSalePercent>{productInfo.productSale}%</S.ProductSalePercent>
          <S.ProductSalePrice>{addCommaToPrice(productInfo.productPrice)}원</S.ProductSalePrice>
        </S.PriceWrapper>
        <S.ButtonsWrapper>
          <Button text="삭제하기" onClick={() => deleteItem(productInfo.productId)} />
          <Button text="담기" onClick={() => handleCart(productInfo.productId, 1)} />
        </S.ButtonsWrapper>
      </S.DescriptionWrapper>
    </S.Wrapper>
  );
};
export default WishListItem;
