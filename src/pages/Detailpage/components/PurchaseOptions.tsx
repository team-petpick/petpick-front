import { addCommaToPrice } from '@utils/addCommaToPrice';
import * as S from '../styles/PurchaseOptions.style';
import { Minus, Plus } from '@assets/svg';
import { IPurchaseOptionsProps } from '@types';

export const PurchaseOptions = ({
  productInfo,
  productCount,
  handlePlusClick,
  handleMinusClick,
}: IPurchaseOptionsProps) => {
  const discountedPrice = addCommaToPrice(
    productInfo.productPrice * (1 - productInfo.productSale / 100),
  );
  return (
    <S.PurchaseContainer>
      <S.InfoContainer>
        <S.InfoListItem>
          <S.InfoTitle>상품선택</S.InfoTitle>
          <S.InfoText>
            <S.SelectLayout>
              <div>
                [{productInfo.seller.sellerStoreName}] {productInfo.productName}
              </div>
              <S.SelectContainer>
                <S.IncreaseButton>
                  <button onClick={handleMinusClick}>
                    <Minus width="28px" height="28px" />
                  </button>
                  <S.CountText>{productCount}</S.CountText>
                  <button onClick={handlePlusClick}>
                    <Plus width="28px" height="28px" />
                  </button>
                </S.IncreaseButton>
                <S.SelectPriceContainer>
                  {productInfo.productSale !== 0 && (
                    <S.PriceSpan isThrough={true} isDiscounted={true}>
                      {productInfo.productPrice.toLocaleString()}원
                    </S.PriceSpan>
                  )}
                  <S.PriceSpan isThrough={false} isDiscounted={false}>
                    {discountedPrice.toLocaleString()}원
                  </S.PriceSpan>
                </S.SelectPriceContainer>
              </S.SelectContainer>
            </S.SelectLayout>
          </S.InfoText>
        </S.InfoListItem>
      </S.InfoContainer>
    </S.PurchaseContainer>
  );
};
