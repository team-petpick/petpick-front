import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { sendPaymentSuccess } from '@apis/payment';

export default function SuccessPage() {
  const [searchParams] = useSearchParams();

  // URL에서 쿼리 파라미터로 받은 값 추출
  const orderSerialCode = searchParams.get('orderId');
  const paymentKey = searchParams.get('paymentKey');
  const amount = searchParams.get('amount');

  // 임시데이터

  const userId = 1;
  const orderRequest = '빨리 주이소 !!';
  //더미데이터 추가됨
  const orderDetails = [
    {
      productId: 1,
      orderDetailPrice: 20000,
      orderDetailCnt: 1,
    },
    {
      productId: 2,
      orderDetailPrice: 30000,
      orderDetailCnt: 1,
    },
  ];
  const address = {
    addressId: null,
    userId: 1,
    addressName: '집',
    addressZipcode: 10233,
    addressAddr: '강남구 신림동',
    addressAddrDetail: '오송빌딩',
    addressTel: '010-1234-5678',
    addressRequest: '문앞ㅇ[ 두고 가세[요',
    addressDefault: 'DEFAULT',
  };
  useEffect(() => {
    async function handlePaymentSuccess() {
      if (orderSerialCode && paymentKey && amount) {
        try {
          const response = await sendPaymentSuccess(
            paymentKey,
            Number(amount),
            userId,
            orderSerialCode,
            orderRequest,
            orderDetails,
            address,
          );
          if (response.status === 200) {
            console.log('결제 정보가 백엔드에 성공적으로 전송되었습니다.');
          }
        } catch (error) {
          console.error('결제 성공 정보를 전송하는 중 오류 발생:', error);
        }
      }
    }

    // 모든 파라미터가 존재할 경우에만 호출
    handlePaymentSuccess();
  }, [orderSerialCode, paymentKey, amount]);

  return <h2>결제가 성공적으로 완료되었습니다!</h2>;
}
