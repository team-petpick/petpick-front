import * as S from '../styles/OrderedProduct.style';

const OrderedProductList = () => {
  return (
    <S.OrderedProductWrapper>
      <S.OrderedProductImage src={'../../../assets/png/cat.png'} />
      <S.OrderedProductInfo>
        <S.ProductNamePriceDiscountWrapper>
          <div>
            <S.OrderedProductSeller>윤일이네 블루베리 농장</S.OrderedProductSeller>
            <S.OrderedProductName>윤일이가 좋아하는 랜덤 게임</S.OrderedProductName>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '10vw', alignItems: 'center' }}>
            <div>
              <S.OrderedProductInfoText>12,000원</S.OrderedProductInfoText>
            </div>
            <div>
              <S.OrderedProductInfoText>1,100원</S.OrderedProductInfoText>
            </div>
          </div>
        </S.ProductNamePriceDiscountWrapper>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10vw' }}>
          <div>
            <S.OrderedProductInfoText>1개</S.OrderedProductInfoText>
          </div>
          <div>
            <S.OrderedProductInfoText>10,900원</S.OrderedProductInfoText>
          </div>
        </div>
      </S.OrderedProductInfo>
    </S.OrderedProductWrapper>
  );
};

export default OrderedProductList;
