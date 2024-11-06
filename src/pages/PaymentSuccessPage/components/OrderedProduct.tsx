import { IOrderDetail } from '@types';
import * as S from '../styles';
const OrderItem = ({ orderDetail }: { orderDetail: IOrderDetail }) => {
  const formattedOrdersPrice = orderDetail?.orderDetailPrice.toLocaleString('ko-KR');

  return (
    <S.TableRow>
      <S.ProductImage src={orderDetail.productThumbnail} />
      <S.ProductInfo>
        <S.ProductTitle>{orderDetail.sellerStoreName}</S.ProductTitle>
        <S.ProductName>{orderDetail.productName}</S.ProductName>
      </S.ProductInfo>
      <S.Price>{orderDetail.orderDetailPrice}</S.Price>
      <S.Discount>{orderDetail.orderDetailCnt}</S.Discount>
      <S.TotalPrice>{formattedOrdersPrice}</S.TotalPrice>
    </S.TableRow>
  );
};

export default OrderItem;
