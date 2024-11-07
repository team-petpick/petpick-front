import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { sendPaymentSuccess } from '@apis/payment';
import { IAddressProps, IOrderDetailsProps } from '@types';
import { useCartStore } from '@store/cart';
import Loading from '@components/Loading';
import { useUserStore } from '@store/userStore';

export default function SuccessPage() {
  const [searchParams] = useSearchParams();
  const { cartItems, userAddress, addressRequest } = useCartStore();

  const navigate = useNavigate();
  // URL에서 쿼리 파라미터로 받은 값 추출
  const orderSerialCode = searchParams.get('orderId');
  const paymentKey = searchParams.get('paymentKey');
  const amount = Number(searchParams.get('amount'));

  const orderRequest = addressRequest.addressRequest;
  const orderDetails: IOrderDetailsProps[] = cartItems
    .filter((item) => item.isChecked)
    .map((item: any) => ({
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

  const { userInfo } = useUserStore();

  useEffect(() => {
    async function handlePaymentSuccess() {
      const userId = userInfo.userId;
      if (orderSerialCode && paymentKey && amount && userId) {
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
          console.log(response);
          if (response.status === 200) {
            const orderId = response.data;
            navigate(`/paymentsuccess/${orderId}`);
          }
        } catch (error) {
          console.error('결제 성공 정보를 전송하는 중 오류 발생:', error);
        }
      }
    }

    // 모든 파라미터가 존재할 경우에만 호출
    handlePaymentSuccess();
  }, [orderSerialCode, paymentKey, amount]);

  return <Loading />;
}
