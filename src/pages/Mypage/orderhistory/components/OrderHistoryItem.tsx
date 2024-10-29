import { IOrderInfo } from '@types';
import * as S from '../styles/OrderHistoryItem.style';
import ProductListItem from './ProductListItem';

interface IOrderProps {
  orderInfo: IOrderInfo;
}
const OrderHistoryItem = ({ orderInfo }: IOrderProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.DateWrapper>{orderInfo.orderDate}</S.DateWrapper>
        <S.orderNumWrapper>주문번호 {orderInfo.orderNum}</S.orderNumWrapper>
      </S.Header>
      <S.ProductList>
        {orderInfo.productInfos.map((product) => (
          <ProductListItem productInfo={product} />
        ))}
      </S.ProductList>
    </S.Wrapper>
  );
};
export default OrderHistoryItem;
