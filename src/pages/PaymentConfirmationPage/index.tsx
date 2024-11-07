import Layout from '@components/layouts/Layout';
import * as S from './styles/index.style';
import ByingProductItem from './components/ByingProductItem';
import Title from '@components/layouts/Title';
import DropdownSelector from './components/DropdownSelector';
import { useCartStore } from '@store/cart';
import { addCommaToPrice } from '@utils/addCommaToPrice';
import CheckoutButton from '@pages/TossPaymentPage/CheckoutButton';
import { nanoid } from 'nanoid';

const PaymentConfirmationPage = () => {
  const { cartItems, userAddress, totalPrice } = useCartStore();
  const orderId = nanoid();

  // 랜덤 전화번호 생성기
  function generateRandomCompanyPhoneNumber() {
    // 대표적인 회사 전화번호의 지역번호
    const areaCodes = [
      '02',
      '031',
      '032',
      '033',
      '041',
      '042',
      '043',
      '044',
      '051',
      '052',
      '053',
      '054',
      '055',
      '061',
      '062',
      '063',
      '064',
    ];

    // 랜덤으로 지역번호 선택
    const areaCode = areaCodes[Math.floor(Math.random() * areaCodes.length)];

    // 4자리와 4자리 숫자 부분을 랜덤으로 생성
    const middlePart = Math.floor(1000 + Math.random() * 9000); // 1000 ~ 9999
    const lastPart = Math.floor(1000 + Math.random() * 9000); // 1000 ~ 9999

    return `${areaCode}-${middlePart}-${lastPart}`;
  }

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
                  <S.SubContent>userName</S.SubContent>
                  <S.SubContent>{generateRandomCompanyPhoneNumber()}</S.SubContent>
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
                  {cartItems.map((productInfo) => (
                    <ByingProductItem key={productInfo.productId} productInfo={productInfo} />
                  ))}
                </S.OrderItemContainer>
                <S.CouponContainer>
                  <S.CouponTitle>할인쿠폰</S.CouponTitle>
                  <S.ButtonContainer>
                    <S.CouponButton>
                      <S.CouponButtonText>가입 웰컴 쿠폰</S.CouponButtonText>
                    </S.CouponButton>
                    <S.DeleteButton>사용취소</S.DeleteButton>
                  </S.ButtonContainer>
                </S.CouponContainer>
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
                  orderName="토스 티셔츠 외 2건"
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
