import { loadTossPayments } from '@tosspayments/tosspayments-sdk';
import { useEffect, useState } from 'react';

// ------  SDK 초기화 ------
// @docs https://docs.tosspayments.com/sdk/v2/js#토스페이먼츠-초기화
const clientKey = 'test_ck_6bJXmgo28e4j1baB0A2yrLAnGKWx';
const customerKey = 'apFoQd6epLlSu-1VMDPcd';

export default function CheckoutPage() {
  const [payment, setPayment] = useState(null);
  const [amount] = useState({
    currency: 'KRW',
    value: 50000,
  });
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  function selectPaymentMethod(method) {
    setSelectedPaymentMethod(method);
  }

  useEffect(() => {
    async function fetchPayment() {
      try {
        const tossPayments = await loadTossPayments(clientKey);

        // 회원 결제
        // @docs https://docs.tosspayments.com/sdk/v2/js#tosspaymentspayment
        const payment = tossPayments.payment({
          customerKey,
        });
        // 비회원 결제
        // const payment = tossPayments.payment({ customerKey: ANONYMOUS });

        setPayment(payment);
      } catch (error) {
        console.error('Error fetching payment:', error);
      }
    }

    fetchPayment();
  }, [clientKey, customerKey]);

  // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
  // @docs https://docs.tosspayments.com/sdk/v2/js#paymentrequestpayment
  async function requestPayment() {
    // 결제를 요청하기 전에 orderId, amount를 서버에 저장하세요.
    // 결제 과정에서 악의적으로 결제 금액이 바뀌는 것을 확인하는 용도입니다.
    await payment.requestPayment({
      method: 'CARD', // 카드 및 간편결제
      amount: amount,
      orderId: 'dRS7Ep8DESWVkN4j4GySI', // 고유 주분번호
      orderName: '토스 티셔츠 외 2건',
      successUrl: window.location.origin + '/success', // 결제 요청이 성공하면 리다이렉트되는 URL
      failUrl: window.location.origin + '/fail', // 결제 요청이 실패하면 리다이렉트되는 URL
      customerEmail: 'customer123@gmail.com',
      customerName: '김토스',
      customerMobilePhone: '01012341234',
      // 카드 결제에 필요한 정보
      card: {
        useEscrow: false,
        flowMode: 'DEFAULT', // 통합결제창 여는 옵션
        useCardPoint: false,
        useAppCardOnly: false,
      },
    });
  }

  return (
    // 결제하기 버튼
    <button className="button" onClick={() => requestPayment()}>
      결제하기
    </button>
  );
}
