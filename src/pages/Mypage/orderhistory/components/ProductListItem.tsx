import { IOrderDetail } from '@types';
import * as S from '../styles/ProductListItem.style';
import { addCommaToPrice } from '@utils/addCommaToPrice';

interface IOrderProps {
  productInfo: IOrderDetail;
}
const ProductListItem = ({ productInfo }: IOrderProps) => {
  const formattedOriginalPrice = addCommaToPrice(productInfo.orderDetailPrice);
  const formattedSalePrice = addCommaToPrice(
    productInfo.orderDetailPrice * (1 - productInfo.productSale / 100),
  );
  return (
    <S.Wrapper>
      <S.ProductImage src={productInfo.productThumbnail} />
      <S.DescriptionWrapper>
        <S.SellerName>{productInfo.sellerStoreName}</S.SellerName>
        <S.ProductName>{productInfo.productName}</S.ProductName>
        <S.PriceWrapper>
          <S.ProductSalePrice>{formattedSalePrice}원</S.ProductSalePrice>
          <S.ProductOriginalPrice>{formattedOriginalPrice}원</S.ProductOriginalPrice>
        </S.PriceWrapper>
      </S.DescriptionWrapper>
    </S.Wrapper>
  );
};
export default ProductListItem;
