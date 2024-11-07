import { useState } from 'react';
import { IOrderInfo } from '@types';
import * as S from '../styles/OrderHistoryItem.style';
import ProductListItem from './ProductListItem';
import MoreInfo from './MoreInfo';
import OrderCancelModal from './OrderCancelModal';
import dayjs from 'dayjs';

interface IOrderProps {
  orderInfo: IOrderInfo;
  onUpdateHandler: (orderId: number, orderDetailId: number) => void;
}

const OrderHistoryItem = ({ orderInfo, onUpdateHandler }: IOrderProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [orderDetails, setOrderDetails] = useState<{
    orderDetailId: string;
    orderDetailCnt: number;
    orderId: number;
  } | null>(null);

  const visibleProducts = isExpanded ? orderInfo.orderDetails : orderInfo.orderDetails.slice(0, 3);
  console.log(orderInfo.orderCreateAt);
  const formattedDate = orderInfo.orderCreateAt.split('T')[0];
  const isCancelable = dayjs().diff(dayjs(orderInfo.orderCreateAt), 'day') <= 3;
  if (orderInfo.orderDetails.length === 0) return null;

  const handleMoreInfoClick = () => {
    setIsExpanded(!isExpanded);
  };

  const openModal = (product: IOrderInfo['orderDetails'][0]) => {
    if (product) {
      setOrderDetails({
        orderDetailId: String(product.orderDetailId),
        orderDetailCnt: product.orderDetailCnt,
        orderId: orderInfo.ordersId,
      });
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setOrderDetails(null);
  };

  const handleOrderCancelSubmit = (updatedOrderDetail: {
    orderDetailId: string;
    orderId: number;
  }) => {
    onUpdateHandler(updatedOrderDetail?.orderId, Number(updatedOrderDetail?.orderDetailId));

    closeModal();
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
            <ProductListItem
              key={product.orderDetailId}
              productInfo={product}
              onOpenModal={() => openModal(product)}
              isCancelable={isCancelable}
            />
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

      {isModalOpen && <S.Overlay />}
      {isModalOpen && orderDetails && (
        <OrderCancelModal
          orderDetails={orderDetails}
          onClose={closeModal}
          onSubmit={handleOrderCancelSubmit}
        />
      )}
    </>
  );
};

export default OrderHistoryItem;
