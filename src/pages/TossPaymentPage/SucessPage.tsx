import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { sendPaymentSuccess } from '@apis/payment';

export default function SuccessPage() {
  const [searchParams] = useSearchParams();

  // URL에서 쿼리 파라미터로 받은 값 추출
  const orderId = searchParams.get('orderId');
  const paymentKey = searchParams.get('paymentKey');
  const amount = searchParams.get('amount');

  // 임시데이터

  const userId = 1;
  const orderRequest = '빨리 주이소 !!';
  useEffect(() => {
    async function handlePaymentSuccess() {
      if (orderId && paymentKey && amount) {
        try {
          const response = await sendPaymentSuccess(
            orderId,
            paymentKey,
            Number(amount),
            userId,
            orderRequest,
          );
          if (response === 200) {
            console.log('결제 정보가 백엔드에 성공적으로 전송되었습니다.');
          }
        } catch (error) {
          console.error('결제 성공 정보를 전송하는 중 오류 발생:', error);
        }
      }
    }

    // 모든 파라미터가 존재할 경우에만 호출
    handlePaymentSuccess();
  }, [orderId, paymentKey, amount]);

  return <h2>결제가 성공적으로 완료되었습니다!</h2>;
}
