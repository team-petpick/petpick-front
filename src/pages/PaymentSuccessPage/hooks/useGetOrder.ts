import { getOrderById } from '@apis/order';
import { IOrderDetail } from '@types';
import { useEffect, useState } from 'react';

const useGetOrder = (orderId: number) => {
  const [orders, setOrders] = useState<IOrderDetail[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getOrder = async () => {
    try {
      setIsLoading(true);
      const response = await getOrderById(orderId);
      setOrders(response);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setError('주문 정보를 불러오는 데 실패했습니다.');
    }
  };
  useEffect(() => {
    getOrder();
  }, []);

  return { orders, isLoading, error };
};

export default useGetOrder;
