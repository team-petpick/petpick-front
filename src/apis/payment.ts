import { AxiosError } from 'axios';
import instance from './instance';

export const sendPaymentSuccess = async (
  paymentKey: string,
  amount: number,
  userId: number, // 추가된 필드
  orderSerialCode: string,
  orderRequest: string,
  orderDetails: Array<{ productId: number; orderDetailPrice: number; orderDetailCnt: number }>,
  address: {
    addressName: string;
    addressZipcode: number;
    addressAddr: string;
    addressAddrDetail: string;
    addressTel: string;
    addressRequest: string;
    addressDefault: string;
  },
) => {
  try {
    // 유효성 검사 및 데이터 확인 로그 추가
    console.log('전송할 데이터:', {
      orderSerialCode,
      paymentKey,
      amount,
      userId,
      orderRequest,
      orderDetails,
      address,
    });

    const requestData = {
      orderSerialCode,
      paymentKey,
      amount,
      orderRequest,
      userId,
      orderDetails,
      address,
    };
    const response = await instance.post(`/payment/success`, requestData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('response -> ', response);
    return response;
  } catch (error) {
    console.log(error);

    if (error instanceof AxiosError && error.response) {
      console.error('서버 에러 메시지:', error.response.data); // 서버에서 반환한 에러 메시지
    } else {
      console.error('요청 자체에 실패하거나 네트워크 오류가 발생했습니다:', error);
    }
    throw error;
  }
};
