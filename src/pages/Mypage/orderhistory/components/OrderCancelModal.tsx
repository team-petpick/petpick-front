import { useState } from 'react';
import * as S from '../styles/OrderCancelModal.style';
import { deleteOrderItem } from '@apis/order';

interface IOrderCancelModalProps {
  orderDetails: {
    orderDetailId: string;
    orderDetailCnt: number;
    orderId: number;
  };
  onClose: () => void;
}
const OrderCancelModal = ({ orderDetails, onClose }: IOrderCancelModalProps) => {
  const [cancelReason, setCancelReason] = useState<string>('');

  const handleCancelReasonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCancelReason(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const { orderDetailId, orderDetailCnt, orderId } = orderDetails;
      await deleteOrderItem(orderDetailId, orderDetailCnt, orderId, cancelReason);
    } catch (error) {
      console.log('주문 취소 실패', error);
    }
  };

  return (
    <S.Wrapper>
      <S.Header>주문 취소</S.Header>
      <S.Body>
        <S.TextArea
          as="textarea"
          value={cancelReason}
          onChange={handleCancelReasonChange}
          placeholder="취소 사유를 입력하세요"
        />
        <S.ButtonWrapper>
          <S.SubmitButton disabled={!cancelReason} onClick={handleSubmit}>
            제출
          </S.SubmitButton>
          <S.CloseButton onClick={onClose}>닫기</S.CloseButton>
        </S.ButtonWrapper>
      </S.Body>
    </S.Wrapper>
  );
};
export default OrderCancelModal;
