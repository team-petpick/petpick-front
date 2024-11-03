import axios, { AxiosError } from 'axios';
import instance from './instance';

export const sendPaymentSuccess = async (
  orderId: string,
  paymentKey: string,
  amount: number,
  userId: number, // 추가된 필드
  orderRequest: string,
) => {
  try {
    // 유효성 검사 및 데이터 확인 로그 추가
    console.log('전송할 데이터:', {
      orderId,
      paymentKey,
      amount,
      userId,
      orderRequest,
    });

    const requestData = {
      orderId,
      paymentKey,
      amount,
      userId,
      orderRequest,
    };
    // const response = await instance.post(`/payment/success`, requestData);
    const response = axios
      .get(
        `/payment/success?orderid=${orderId}&paymentKey=${paymentKey}&amount=${amount}&user_id=${userId}&order_request=${orderRequest}`,
      )
      .then((res) => res.status);

    return response;
  } catch (error) {
    console.log(error);

    //   if (error instanceof AxiosError && error.response) {
    //     console.error('서버 에러 메시지:', error.response.data); // 서버에서 반환한 에러 메시지
    //   } else {
    //     console.error('요청 자체에 실패하거나 네트워크 오류가 발생했습니다:', error);
    //   }
    //   throw error;
  }
};
