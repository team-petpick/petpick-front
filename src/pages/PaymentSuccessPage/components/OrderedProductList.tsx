import * as S from '../styles/OrderedProduct.style';
import { IOrderDetail } from '@types';

interface IOrderedProductListProps {
  orderDetail: IOrderDetail;
}

const OrderedProductList = ({ orderDetail }: IOrderedProductListProps) => {
  return (
    <S.OrderedProductWrapper>
      <S.OrderedProductImage src={orderDetail.productThumbnail} />
      <S.OrderedProductInfo>
        <S.ProductNamePriceDiscountWrapper>
          <div>
            <S.OrderedProductSeller>{orderDetail.sellerStoreName}</S.OrderedProductSeller>
            <S.OrderedProductName>{orderDetail.productName}</S.OrderedProductName>
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
        <div style={{ display: 'flex', flexDirection: 'row', gap: '30vw' }}>
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
