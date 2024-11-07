import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { sendPaymentSuccess } from '@apis/payment';
import { IAddressProps, IOrderDetailsProps } from '@types';
import { useCartStore } from '@store/cart';

export default function SuccessPage() {
  const [searchParams] = useSearchParams();
  const { cartItems, userAddress, addressRequest } = useCartStore();

  // URL에서 쿼리 파라미터로 받은 값 추출
  const orderSerialCode = searchParams.get('orderId');
  const paymentKey = searchParams.get('paymentKey');
  const amount = Number(searchParams.get('amount'));

  const userId = 1;
  const orderRequest = addressRequest.addressRequest;
  const orderDetails: IOrderDetailsProps[] = cartItems.map((item: any) => ({
    productId: item.productId,
    orderDetailPrice: item.productPrice,
    orderDetailCnt: item.cartCnt,
  }));
  const address: IAddressProps = {
    addressName: 'none',
    addressZipcode: Number(userAddress.zipCode),
    addressAddr: userAddress.baseAddress,
    addressAddrDetail: userAddress.detailAddress,
    addressTel: 'none',
    addressRequest: '빠른 배송 부탁드립니다.',
    addressDefault: 'YES',
  };
  useEffect(() => {
    async function handlePaymentSuccess() {
      if (orderSerialCode && paymentKey && amount) {
        try {
          const response = await sendPaymentSuccess(
            paymentKey,
            amount,
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
