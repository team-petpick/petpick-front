import { getOrderLists } from '@apis/order';
import { orderPeriodNumbers } from '@constants';
import { IOrderInfo } from '@types';
import { useEffect, useState } from 'react';

const useOrderList = (activePeriod: number) => {
  const [orderInfo, setOrderInfo] = useState<IOrderInfo[]>([]);

  useEffect(() => {
    const loadOrderData = async () => {
      const selectedPeriod = orderPeriodNumbers[activePeriod];

      try {
        const response = await getOrderLists(0, Number(selectedPeriod));
        setOrderInfo(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    loadOrderData();
  }, [activePeriod]);
  return orderInfo;
};
export default useOrderList;
