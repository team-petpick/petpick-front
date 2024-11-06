import { IOrderInfo } from '@types';
import * as S from '../styles/OrderHistoryItem.style';
import ProductListItem from './ProductListItem';
import MoreInfo from './MoreInfo';
import { useState } from 'react';

interface IOrderProps {
  orderInfo: IOrderInfo;
}
const OrderHistoryItem = ({ orderInfo }: IOrderProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const visibleProducts = isExpanded ? orderInfo.orderDetails : orderInfo.orderDetails.slice(0, 3);
  console.log(orderInfo);
  const handleMoreInfoClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <S.Wrapper>
      <S.Header>
        <S.DateWrapper>{orderInfo.orderCreateAt}</S.DateWrapper>
        <S.orderNumWrapper>주문번호 {orderInfo.ordersId}</S.orderNumWrapper>
      </S.Header>
      <S.ProductList>
        {visibleProducts.map((product) => (
          <ProductListItem productInfo={product} />
        ))}
        {orderInfo.orderDetails.length > 3 && (
          <MoreInfo
            onClick={handleMoreInfoClick}
            isExpanded={isExpanded}
            counts={orderInfo.orderDetails.length}
          />
        )}
      </S.ProductList>
    </S.Wrapper>
  );
};
export default OrderHistoryItem;
