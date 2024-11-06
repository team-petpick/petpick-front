import { IOrderInfo } from '@types';
import * as S from '../styles/OrderHistoryItem.style';
import ProductListItem from './ProductListItem';
import MoreInfo from './MoreInfo';
import { useState } from 'react';
import OrderCancelModal from './OrderCancelModal';

interface IOrderProps {
  orderInfo: IOrderInfo;
}
const OrderHistoryItem = ({ orderInfo }: IOrderProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const visibleProducts = isExpanded ? orderInfo.orderDetails : orderInfo.orderDetails.slice(0, 3);
  const formattedDate = orderInfo.orderCreateAt.split('T')[0];
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [orderDetails] = useState({
    orderDetailId: String(orderInfo.orderDetails[0].orderDetailId),
    orderDetailCnt: orderInfo.orderDetails[0].orderDetailCnt,
    orderId: orderInfo.ordersId,
  });

  const handleMoreInfoClick = () => {
    setIsExpanded(!isExpanded);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.DateWrapper>{formattedDate}</S.DateWrapper>
          <S.orderNumWrapper>주문번호 {orderInfo.ordersId}</S.orderNumWrapper>
        </S.Header>
        <S.ProductList>
          {visibleProducts.map((product) => (
            <ProductListItem productInfo={product} onOpenModal={() => openModal()} />
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
      {isModalOpen && <OrderCancelModal orderDetails={orderDetails} onClose={closeModal} />}
    </>
  );
};
export default OrderHistoryItem;
