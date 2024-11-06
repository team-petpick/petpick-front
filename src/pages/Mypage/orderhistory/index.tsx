import Header from './components/Header';
import OrderHistoryItem from './components/OrderHistoryItem';
import styled from 'styled-components';
import { useState } from 'react';
import { orderPeriods } from '@constants';
import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import useOrderList from '@hooks/useOrderList';
import { IOrderInfo } from '@types';
// import OrderCancelModal from './components/OrderCancelModal';

const OrderHistory = () => {
  const [activePeriod, setActivePeriod] = useState<number>(0);
  const { orderInfo, loading } = useOrderList(activePeriod);
  // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  // const [selectedProduct, setSelectedProduct] = useState<IOrderDetail | null>(null);

  const handlePeriodChange = (index: number) => {
    setActivePeriod(index);
  };

  // const openModal = (product: IOrderDetail) => {
  //   console.log('click');
  //   setSelectedProduct(product);
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  //   setSelectedProduct(null); // 선택된 상품 초기화
  // };

  // const handleSubmitCancel = (cancelReason: string) => {
  //   console.log('취소 사유:', cancelReason);
  // };
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header onPeriodChange={handlePeriodChange} activePeriod={activePeriod} />
      <Container>
        {loading ? (
          <Message>로딩 중입니다...</Message>
        ) : orderInfo?.content && orderInfo?.content?.length > 0 ? (
          orderInfo?.content.map((orderItem: IOrderInfo) => (
            <OrderHistoryItem orderInfo={orderItem} />
          ))
        ) : (
          <Message>{`${orderPeriods[activePeriod]} 간의 주문내역이 없습니다.`}</Message>
        )}
      </Container>
    </div>
  );
};

const Container = styled.div`
  height: 100%;
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
const Message = styled.div`
  ${TextStyles.subTitle.largeR}
  max-width: 745px;
  width: 100%;
  height: 300px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  color: ${PETPICK_COLORS.GRAY[800]};
  border: 1px solid ${PETPICK_COLORS.GRAY[400]};
  border-radius: 8px;
`;
export default OrderHistory;
