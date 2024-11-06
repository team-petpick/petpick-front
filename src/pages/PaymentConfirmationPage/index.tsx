import Layout from '@components/layouts/Layout';
import * as S from './styles/index.style';
import { IAddressInfo } from '@types';
import ByingProductItem from './components/ByingProductItem';
import TossLogo from '/png/Toss_Logo_Primary.png';
import ByingFooter from './components/ByingFooter';
import Title from '@components/layouts/Title';
import { useState } from 'react';
import DropdownSelector from './components/DropdownSelector';

const AddressInfo: IAddressInfo = {
  addressId: 1,
  userId: 1,
  addressName: '김윤일',
  addressZipCode: '46335',
};
const PaymentConfirmationPage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };
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
                  <S.SubTitle>상세 주소</S.SubTitle>
                </S.InfoContainer>
                <S.InfoContainer>
                  <S.SubContent>{AddressInfo.addressName}</S.SubContent>
                  <S.SubContent>010-3386-9999</S.SubContent>
                  <S.SubContent>주소</S.SubContent>
                  <S.SubContent>107-1210호</S.SubContent>
                </S.InfoContainer>
              </S.ShippingAddress>
              <DropdownSelector />
            </S.Container>
            <S.OrderContainer>
              <S.OrderWrapper>
                <S.HeaderWrapper>
                  <S.SectionTitle>주문 상품 및 쿠폰</S.SectionTitle>
                  <S.SectionTitle>총 2건</S.SectionTitle>
                </S.HeaderWrapper>
                <S.OrderItemContainer>
                  <ByingProductItem />
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
                <S.Price>21,900원</S.Price>
              </S.TotalPriceContainer>
            </S.OrderContainer>
            <S.Container>
              <S.SectionTitle>결제 방법</S.SectionTitle>
              <S.PaymentInfo>
                <S.SubTitle>일반 결제</S.SubTitle>
                <S.PaymentButton isClicked={isClicked} onClick={handleButtonClick}>
                  <S.LogoImageBox src={TossLogo} />
                </S.PaymentButton>
              </S.PaymentInfo>
            </S.Container>
            <S.Container>
              <S.SectionTitle>최종 주문 정보</S.SectionTitle>
              <S.FinalOrderInfo>
                <S.SubTitle>총 구매가</S.SubTitle>
                <S.SectionTitle>21,800원</S.SectionTitle>
              </S.FinalOrderInfo>
              <S.FinalOrderInfo>
                <S.SubTitle>총 배송비</S.SubTitle>
                <S.SubContent>무료</S.SubContent>
              </S.FinalOrderInfo>
            </S.Container>
            <S.Container>
              <S.SectionTitle>총 결제금액</S.SectionTitle>
              <S.TotalPrice>21,800원</S.TotalPrice>
            </S.Container>
          </S.ContentWrapper>
        </S.ContentContainer>
      </S.Content>
      <ByingFooter />
    </Layout>
  );
};

export default PaymentConfirmationPage;
