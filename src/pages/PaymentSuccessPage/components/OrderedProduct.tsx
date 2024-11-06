import { IOrderDetail } from '@types';
import { addCommaToPrice } from '@utils/addCommaToPrice';
import * as S from '../styles';
const OrderItem = ({ orderDetail }: { orderDetail: IOrderDetail }) => {
  const formattedOrdersPrice = addCommaToPrice(orderDetail?.orderDetailPrice);
  const formattedPaymentPrice = addCommaToPrice(
    orderDetail?.orderDetailPrice *
      (1 - orderDetail?.productSale * 0.01) *
      orderDetail?.orderDetailCnt,
  );
  const formattedDiscountPrice = addCommaToPrice(
    orderDetail?.orderDetailPrice * (orderDetail?.productSale * 0.01),
  );
  return (
    <S.TableRow>
      <S.ProductImage src={orderDetail.productThumbnail} />
      <S.ProductInfo>
        <S.ProductTitle>{orderDetail.sellerStoreName}</S.ProductTitle>
        <S.ProductName>{orderDetail.productName}</S.ProductName>
      </S.ProductInfo>
      <S.Price>{formattedOrdersPrice}원</S.Price>
      <S.Price>{formattedDiscountPrice}원</S.Price>
      <S.Discount>{orderDetail.orderDetailCnt}</S.Discount>
      <S.TotalPrice>{formattedPaymentPrice}원</S.TotalPrice>
    </S.TableRow>
  );
};

export default OrderItem;
