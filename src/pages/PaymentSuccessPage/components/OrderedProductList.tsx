import * as S from '../styles/OrderedProduct.style';
import { IOrderDetail } from '@types';

interface IOrderedProductListProps {
  orderDetail: IOrderDetail;
}

const OrderedProductList = ({ orderDetail }: IOrderedProductListProps) => {
  const { sellerStoreName, productName, orderDetailPrice, productThumbnail, orderDetailCnt } =
    orderDetail;
  const formattedPrice = orderDetailPrice.toLocaleString('ko-KR');
  return (
    <S.OrderedProductWrapper>
      <S.OrderedProductImage src={productThumbnail} />
      <S.OrderedProductInfo>
        <S.ProductNamePriceDiscountWrapper>
          <div>
            <S.OrderedProductSeller>{sellerStoreName}</S.OrderedProductSeller>
            <S.OrderedProductName>{productName}</S.OrderedProductName>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '10vw', alignItems: 'center' }}>
            <div>
              <S.OrderedProductInfoText>{formattedPrice}원</S.OrderedProductInfoText>
            </div>
            <div>
              <S.OrderedProductInfoText>0원</S.OrderedProductInfoText>
            </div>
          </div>
        </S.ProductNamePriceDiscountWrapper>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '30vw' }}>
          <div>
            <S.OrderedProductInfoText>{orderDetailCnt}개</S.OrderedProductInfoText>
          </div>
          <div>
            <S.OrderedProductInfoText>{formattedPrice}원</S.OrderedProductInfoText>
          </div>
        </div>
      </S.OrderedProductInfo>
    </S.OrderedProductWrapper>
  );
};

export default OrderedProductList;
