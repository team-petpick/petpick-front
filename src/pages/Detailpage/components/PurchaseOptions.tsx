import * as S from '../styles/PurchaseOptions.style';
import { Minus, Plus } from '@assets/svg';
export const PurchaseOptions = ({
  productInfo,
  productCount,
  handlePlusClick,
  handleMinusClick,
}) => {
  // const isThrough = true;
  // const isDiscounted = true;
  return (
    <S.PurchaseContainer>
      <S.InfoContainer>
        <S.InfoListItem>
          <S.InfoTitle>상품선택</S.InfoTitle>
          <S.InfoText>
            <S.SelectLayout>
              <div>
                [{productInfo.sellerStoreName}] {productInfo.productTitle}
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
                  <S.PriceSpan isThrough={true} isDiscounted={false}>
                    {productInfo.productPrice}원
                  </S.PriceSpan>
                  <S.PriceSpan isThrough={false} isDiscounted={false}>
                    7,560원
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
