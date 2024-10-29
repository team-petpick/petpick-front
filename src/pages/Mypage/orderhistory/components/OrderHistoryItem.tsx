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
  const visibleProducts = isExpanded ? orderInfo.productInfos : orderInfo.productInfos.slice(0, 3);

  const handleMoreInfoClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <S.Wrapper>
      <S.Header>
        <S.DateWrapper>{orderInfo.orderDate}</S.DateWrapper>
        <S.orderNumWrapper>주문번호 {orderInfo.orderNum}</S.orderNumWrapper>
      </S.Header>
      <S.ProductList>
        {visibleProducts.map((product) => (
          <ProductListItem productInfo={product} />
        ))}
        {orderInfo.productInfos.length > 3 && (
          <MoreInfo
            onClick={handleMoreInfoClick}
            isExpanded={isExpanded}
            counts={orderInfo.productInfos.length}
          />
        )}
      </S.ProductList>
    </S.Wrapper>
  );
};
export default OrderHistoryItem;
