import Layout from '@components/layouts/Layout';
import * as S from './styles/index.style';
import ByingProductItem from './components/ByingProductItem';
import Title from '@components/layouts/Title';
import DropdownSelector from './components/DropdownSelector';
import { useCartStore } from '@store/cart';
import { addCommaToPrice } from '@utils/addCommaToPrice';
import CheckoutButton from '@pages/TossPaymentPage/CheckoutButton';
import { nanoid } from 'nanoid';

interface CartItem {
  cartCnt: number;
  productId: number;
  productName: string;
  productPrice: number;
  productSale: number;
  productThumbnail: string;
  sellerName: string;
}

const PaymentConfirmationPage = () => {
  const { cartItems, userAddress } = useCartStore();
  const cartItemsChecked = cartItems.filter((item) => item.isChecked);
  const totalPrice = cartItemsChecked.reduce(
    (acc, item) => acc + item.productPrice * (1 - item.productSale * 0.01) * item.cartCnt,
    0,
  );
  console.log('cartItemsChekce', cartItemsChecked);
  const orderId = nanoid();

  // 랜덤 전화번호 생성기
  function generateRandomPhoneNumber() {
    const prefix = '010';

    // 4자리와 4자리 숫자 부분을 랜덤으로 생성
    const middlePart = Math.floor(1000 + Math.random() * 9000); // 1000 ~ 9999
    const lastPart = Math.floor(1000 + Math.random() * 9000); // 1000 ~ 9999

    return `${prefix}-${middlePart}-${lastPart}`;
  }

  // 상품 이름을 줄여 표시하고, 나머지 개수를 표시하는 함수
  function getShortenedProductName(cartItem: CartItem): string {
    const otherText =
      cartItems.length > 1 ? ` 외 ${cartItems.length - 1}건` : ` 외 ${cartItems.length}건`;
    return cartItem.productName.length > 5
      ? cartItem.productName.slice(0, 5) + '...' + otherText
      : cartItem.productName + otherText;
  }

  // 첫 상품 이름과 나머지 요약 정보를 결합하여 orderName 생성
  const orderName = cartItems.length > 0 ? getShortenedProductName(cartItems[0]) : '';

  return (
    <Layout footerVisible={false}>
      <Title titleText="배송/결제" />
      <S.Content>
        <S.ContentContainer>
          <S.ContentWrapper>
            <S.Container>
              <S.SectionTitle>배송 주소</S.SectionTitle>
              <S.ShippingAddress>
                <S.InfoContainer>
                  <S.SubTitle>받는 분</S.SubTitle>
                  <S.SubTitle>연락처</S.SubTitle>
                  <S.SubTitle>주소</S.SubTitle>
                </S.InfoContainer>
                <S.InfoContainer>
                  <S.SubContent>김윤일</S.SubContent>
                  <S.SubContent>{generateRandomPhoneNumber()}</S.SubContent>
                  <S.SubContent>{`${userAddress.baseAddress} ${userAddress.detailAddress} (${userAddress.zipCode})`}</S.SubContent>
                </S.InfoContainer>
              </S.ShippingAddress>
              <DropdownSelector />
            </S.Container>
            <S.OrderContainer>
              <S.OrderWrapper>
                <S.HeaderWrapper>
                  <S.SectionTitle>주문 상품 및 쿠폰</S.SectionTitle>
                  <S.SectionTitle>총 {cartItems.length}건</S.SectionTitle>
                </S.HeaderWrapper>
                <S.OrderItemContainer>
                  {/* 상품 내역 리스트 */}
                  {cartItemsChecked.map((productInfo) => (
                    <ByingProductItem key={productInfo.productId} productInfo={productInfo} />
                  ))}
                </S.OrderItemContainer>
                {/* <S.CouponContainer>
                  <S.CouponTitle>할인쿠폰</S.CouponTitle>
                  <S.ButtonContainer>
                    <S.CouponButton>
                      <S.CouponButtonText>가입 웰컴 쿠폰</S.CouponButtonText>
                    </S.CouponButton>
                    <S.DeleteButton>사용취소</S.DeleteButton>
                  </S.ButtonContainer>
                </S.CouponContainer> */}
              </S.OrderWrapper>
              <S.TotalPriceContainer>
                <S.TotalPriceTitle>결제금액</S.TotalPriceTitle>
                <S.Price>{addCommaToPrice(totalPrice)}</S.Price>
              </S.TotalPriceContainer>
            </S.OrderContainer>
            <S.Container>
              <S.SectionTitle>결제 방법</S.SectionTitle>
              <S.PaymentInfo>
                <S.SubTitle>일반 결제</S.SubTitle>
                <CheckoutButton
                  orderId={orderId}
                  orderName={orderName}
                  amount={totalPrice}
                  successUrl={window.location.origin + '/success'}
                  failUrl={window.location.origin + '/fail'}
                  buttonText="지금 결제하기"
                />
              </S.PaymentInfo>
            </S.Container>
            <S.Container>
              <S.SectionTitle>최종 주문 정보</S.SectionTitle>
              <S.FinalOrderInfo>
                <S.SubTitle>총 구매가</S.SubTitle>
                <S.SectionTitle>{addCommaToPrice(totalPrice)}</S.SectionTitle>
              </S.FinalOrderInfo>
              <S.FinalOrderInfo>
                <S.SubTitle>총 배송비</S.SubTitle>
                <S.SubContent>무료</S.SubContent>
              </S.FinalOrderInfo>
            </S.Container>
            <S.Container>
              <S.SectionTitle>총 결제금액</S.SectionTitle>
              <S.TotalPrice>{addCommaToPrice(totalPrice)}</S.TotalPrice>
            </S.Container>
          </S.ContentWrapper>
        </S.ContentContainer>
      </S.Content>
      {/* <ByingFooter /> */}
    </Layout>
  );
};

export default PaymentConfirmationPage;
