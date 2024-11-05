import { IProductInfo } from '@types';
import * as S from '../styles/WishListItem.style';
import Button from './Button';
import { deleteWishListItem } from '@apis/wish';

interface IProductProps {
  productInfo: IProductInfo;
  // removeProduct: (productId: number) => void;
}
const WishListItem = ({ productInfo }: IProductProps) => {
  const handleDelete = async (productId: number) => {
    try {
      await deleteWishListItem(productId);
    } catch (error) {
      console.error('상품을 삭제하는 중 오류가 발생했습니다.', error);
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
