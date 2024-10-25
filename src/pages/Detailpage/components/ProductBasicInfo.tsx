import * as S from '../styles/ProductBasicInfo.style';

export const ProductBasicInfo = ({ productInfo }) => (
  <div>
    <S.ProductTitle>
      [{productInfo.sellerStoreName}] {productInfo.productTitle}
    </S.ProductTitle>
    <S.ProductTitleInfo> 40년 전통의 부산식 떡볶이</S.ProductTitleInfo>

    <div>
      <S.PriceContainer>
        <S.DiscountText>{productInfo.productSale}%</S.DiscountText>
        <S.DiscountPrice>7,560</S.DiscountPrice>
        <S.PriceText>원</S.PriceText>
      </S.PriceContainer>
      <S.PriceBox>
        <S.RegularPrice>{productInfo.productPrice}</S.RegularPrice>
      </S.PriceBox>
    </div>
  </div>
);
