import { IOrderInfo } from '@types';
import Header from './components/Header';
import OrderHistoryItem from './components/OrderHistoryItem';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { orderPeriods } from '@constants';
import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import { getOrderLists } from '@apis/order';

const OrderHistory = () => {
  const [activePeriod, setActivePeriod] = useState<number>(0);
  const [orderInfo, setOrderInfo] = useState<IOrderInfo[]>([]);

  useEffect(() => {
    const loadOrderData = async () => {
      const selectedPeriod = orderPeriods[activePeriod].split('')[0];
      try {
        const response = await getOrderLists(0, Number(selectedPeriod));
        if (response && response.data) {
          const orderList = response.data;
          setOrderInfo(orderList);
        } else {
          console.log('응답 데이터가 없습니다.');
        }
      } catch (error) {
        console.log('주문내역을 불러오는 도중 오류가 발생했습니다', error);
      }
    };
    loadOrderData();
  }, [activePeriod]);

  const handlePeriodChange = (index: number) => {
    setActivePeriod(index);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header onPeriodChange={handlePeriodChange} activePeriod={activePeriod} />
      <Container>
        {orderInfo.length > 0 ? (
          orderInfo.map((orderItem) => <OrderHistoryItem orderInfo={orderItem} />)
        ) : (
          <Message>
            {activePeriod !== null
              ? `${orderPeriods[activePeriod]} 간의 주문내역이 없습니다.`
              : '주문내역이 없습니다.'}
          </Message>
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
