import { getOrderLists } from '@apis/order';
import { orderPeriodNumbers } from '@constants';
import { IOrderInfos } from '@types';
import { useEffect, useState } from 'react';

const useOrderList = (activePeriod: number) => {
  const [orderInfo, setOrderInfo] = useState<IOrderInfos | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadOrderData = async () => {
      const selectedPeriod = orderPeriodNumbers[activePeriod];
      setLoading(true);
      try {
        const response = await getOrderLists(0, Number(selectedPeriod));
        setOrderInfo(response);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    loadOrderData();
  }, [activePeriod]);
  console.log('useOrderList 결과:', { orderInfo, loading });
  return { orderInfo, loading };
};
export default useOrderList;
