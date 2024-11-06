import { IProductInfo } from '@types';
import * as S from '../styles/ProductListItem.style';
import { addCommaToPrice } from '@utils/addCommaToPrice';

interface IProductProps {
  productInfo: IProductInfo;
}
const ProductListItem = ({ productInfo }: IProductProps) => {
  const formattedOriginalPrice = addCommaToPrice(productInfo.productPrice);
  const formattedSalePrice = addCommaToPrice(
    productInfo.productPrice * (1 - productInfo.productSale / 100),
  );
  return (
    <S.Wrapper>
      <S.ProductImage src={productInfo.productThumbnail} />
      <S.DescriptionWrapper>
        <S.SellerName>{productInfo.seller.sellerStoreName}</S.SellerName>
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
