import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import OrderHistoryItem from './components/OrderHistoryItem';
import { orderPeriods } from '@constants';
import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import useOrderList from '@hooks/useOrderList';
import { IOrderInfo } from '@types';
import { useActivePeriodStore } from '../stores/useActivePeriodStore';

const OrderHistory = () => {
  const { activePeriod, setActivePeriod } = useActivePeriodStore();
  const { orderInfo, loading, updateOrderListData } = useOrderList(activePeriod);
  const [updatedOrderInfo, setUpdatedOrderInfo] = useState<IOrderInfo[]>([]);
  useEffect(() => {
    if (orderInfo) {
      setUpdatedOrderInfo(orderInfo.content);
    }
  }, [orderInfo]);

  const handlePeriodChange = (index: number) => {
    setActivePeriod(index);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header onPeriodChange={handlePeriodChange} />
      <Container>
        {loading ? (
          <Message>로딩 중입니다...</Message>
        ) : updatedOrderInfo.length > 0 ? (
          updatedOrderInfo.map((orderItem: IOrderInfo) => (
            <OrderHistoryItem
              key={orderItem.ordersId}
              orderInfo={orderItem}
              onUpdateHandler={updateOrderListData}
            />
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
