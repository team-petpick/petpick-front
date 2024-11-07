import { loadTossPayments, TossPaymentsPayment } from '@tosspayments/tosspayments-sdk';
import { nanoid } from 'nanoid';

const clientKey = import.meta.env.VITE_TOSS_CLIENT_KEY;
const customerKey = 'apFoQd6epLlSu-1VMDPcd';

export const usePayment = () => {
  const orderId = nanoid();

  const initializePayment = async (): Promise<TossPaymentsPayment | null> => {
    try {
      const tossPayments = await loadTossPayments(clientKey);
      const payment = tossPayments.payment({
        customerKey,
      });
      return payment;
    } catch (error) {
      console.error('Error initializing payment:', error);
      return null;
    }
  };

  const requestPayment = async (payment: TossPaymentsPayment, amount: number) => {
    if (!payment) {
      console.error('결제가 초기화되지 않았습니다.');
      return;
    }

    try {
      await payment.requestPayment({
        method: 'CARD',
        amount: { currency: 'KRW', value: amount },
        orderId: orderId,
        orderName: '토스 티셔츠 외 2건',
        successUrl: window.location.origin + '/success',
        failUrl: window.location.origin + '/fail',
        customerEmail: 'customer123@gmail.com',
        customerName: '김토스',
        customerMobilePhone: '01012341234',
        card: {
          useEscrow: false,
          flowMode: 'DEFAULT',
          useCardPoint: false,
          useAppCardOnly: false,
        },
      });
    } catch (error) {
      console.error('결제 요청 중 오류가 발생했습니다:', error);
    }
  };

  return { initializePayment, requestPayment };
};
