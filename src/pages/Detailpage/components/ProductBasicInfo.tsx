import { IProductInfo } from '@types';
import * as S from '../styles/ProductBasicInfo.style';

interface IProductBasicInfoProps {
  productInfo: IProductInfo;
}

export const ProductBasicInfo = ({ productInfo }: IProductBasicInfoProps) => (
  <div>
    <S.ProductTitle>
      [{productInfo.seller.sellerStoreName}] {productInfo.productName}
    </S.ProductTitle>
    <S.ProductTitleInfo> 40년 전통의 부산식 떡볶이</S.ProductTitleInfo>

    <div>
      <S.PriceContainer>
        <S.DiscountText>{productInfo.productSale}%</S.DiscountText>
        {productInfo.productSale !== 0 && (
          <S.DiscountPrice>
            {(productInfo.productPrice * (1 - productInfo.productSale / 100)).toLocaleString()}
          </S.DiscountPrice>
        )}
        <S.PriceText>원</S.PriceText>
      </S.PriceContainer>
      <S.PriceBox>
        <S.RegularPrice>{productInfo.productPrice.toLocaleString()}원</S.RegularPrice>
      </S.PriceBox>
    </div>
  </div>
);
