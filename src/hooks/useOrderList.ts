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
            // orderDetails에서 해당하는 아이템 삭제
            const updatedOrderDetails = order?.orderDetails.filter(
              (product) => product?.orderDetailId !== orderDetailId,
            );

            // 새로운 ordersPrice 계산
            const newOrdersPrice = updatedOrderDetails.reduce(
              (acc, product) => acc + product.orderDetailPrice,
              0,
            );

            return {
              ...order,
              orderDetails: updatedOrderDetails,
              ordersPrice: newOrdersPrice, // 업데이트된 가격 설정
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
