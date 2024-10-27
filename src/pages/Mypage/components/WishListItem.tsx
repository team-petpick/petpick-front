import { IProductInfo } from '@types';
import * as S from '../styles/WishListItem.style';

interface IProductProps {
  productInfo: IProductInfo;
}
const WishListItem = ({ productInfo }: IProductProps) => {
  return (
    <S.Wrapper>
      <S.ProductImage src={productInfo.productImageUrl} />
      <S.DescriptionWrapper>
        <S.SellerName>{productInfo.sellerStoreName}</S.SellerName>
        <S.ProductName>{productInfo.productTitle}</S.ProductName>
        <S.PriceWrapper>
          <S.ProductSalePercent>{productInfo.productSale}%</S.ProductSalePercent>
          <S.ProductSalePrice>{productInfo.productPrice}원</S.ProductSalePrice>
        </S.PriceWrapper>
      </S.DescriptionWrapper>
    </S.Wrapper>
  );
};
export default WishListItem;
