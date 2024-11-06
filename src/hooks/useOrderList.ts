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
      try {
        const res = await getOrderLists(0, Number(selectedPeriod));
        console.log(res.content);
        setOrderInfo(res);
        setLoading(true);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadOrderData();
  }, [activePeriod]);

  const updateOrderListData = (orderId: number, orderDetailId: number) => {
    const updateData = {
      ...orderInfo,
      content:
        orderInfo?.content.map((order) => {
          if (order?.ordersId === orderId) {
            return {
              ...order,
              orderDetails: order?.orderDetails.filter((product) => {
                return product?.orderDetailId !== orderDetailId;
              }),
            };
          }
          return order;
        }) || [],
    };

    setOrderInfo(updateData);
  };

  return { orderInfo, loading, updateOrderListData };
};
export default useOrderList;
