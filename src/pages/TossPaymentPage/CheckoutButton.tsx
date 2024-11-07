import * as S from './CheckoutButton.style';
import { useEffect, useState } from 'react';
import { loadTossPayments, TossPaymentsPayment } from '@tosspayments/tosspayments-sdk';
import TossLogo from '/png/Toss_Logo_Primary.png';

const clientKey = import.meta.env.VITE_TOSS_CLIENT_KEY;

interface CheckoutButtonProps {
  orderId: string;
  orderName: string;
  amount: number;
  successUrl: string;
  failUrl: string;
  buttonText?: string;
}

const CheckoutButton = ({
  orderId,
  orderName,
  amount,
  successUrl,
  failUrl,
}: CheckoutButtonProps) => {
  const [payment, setPayment] = useState<TossPaymentsPayment | null>(null);

  useEffect(() => {
    async function initializePayment() {
      try {
        const tossPayments = await loadTossPayments(clientKey);
        const payment = tossPayments.payment({
          customerKey: 'apFoQd6epLlSu-1VMDPcd', // 고유 회원 식별 키
        });
        setPayment(payment);
      } catch (error) {
        console.error('결제 초기화 오류:', error);
      }
    }

    initializePayment();
  }, []);

  const requestPayment = async () => {
    if (!payment) {
      console.error('결제가 초기화되지 않았습니다.');
      return;
    }

    await payment.requestPayment({
      method: 'CARD', // 결제 방법
      amount: { currency: 'KRW', value: amount }, // 결제 금액
      orderId, // 주문 ID
      orderName, // 주문 이름
      successUrl, // 성공 URL
      failUrl, // 실패 URL
      card: {
        useEscrow: false,
        flowMode: 'DEFAULT',
        useCardPoint: false,
        useAppCardOnly: false,
      },
    });
  };
  return (
    <S.PaymentButtonContainer className="button" onClick={requestPayment}>
      <S.LogoImageBox src={TossLogo} />
    </S.PaymentButtonContainer>
  );
};

export default CheckoutButton;
