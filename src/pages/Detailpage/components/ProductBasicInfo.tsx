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

    <div>
      {/* <S.PriceContainer>
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
      </S.PriceBox> */}
      {/* productSale 값이 0보다 크면 할인율과 할인가 표시 */}
      <S.PriceContainer>
        {/* productSale 값이 0보다 크면 할인율과 할인가 표시 */}
        {productInfo.productSale > 0 ? (
          <>
            <S.DiscountText>{productInfo.productSale}%</S.DiscountText>
            <S.DiscountPrice>
              {Math.floor(
                productInfo.productPrice * (1 - productInfo.productSale / 100),
              ).toLocaleString()}
            </S.DiscountPrice>
          </>
        ) : (
          // productSale 값이 0이면 할인율을 숨기고 원래 가격을 DiscountPrice로 표시
          <S.DiscountPrice>{productInfo.productPrice.toLocaleString()}</S.DiscountPrice>
        )}
        <S.PriceText>원</S.PriceText>
      </S.PriceContainer>
      {/* productSale 값이 0보다 큰 경우에만 RegularPrice를 표시 */}
      {productInfo.productSale > 0 && (
        <S.PriceBox>
          <S.RegularPrice>{productInfo.productPrice.toLocaleString()}원</S.RegularPrice>
        </S.PriceBox>
      )}
    </div>
  </div>
);
