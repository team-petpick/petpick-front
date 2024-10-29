import { IOrderInfo } from '@types';
import * as S from '../styles/OrderHistoryItem.style';

interface IOrderProps {
  orderInfo: IOrderInfo;
}
const OrderHistoryItem = ({ orderInfo }: IOrderProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.DateWrapper>{orderInfo.orderDate}</S.DateWrapper>
      </S.Header>
    </S.Wrapper>
  );
};
export default OrderHistoryItem;
