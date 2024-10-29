import Layout from '@components/layouts/Layout';
import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import { IAddressInfo } from '@types';
import ByingProductItem from './components/ByingProductItem';
import styled from 'styled-components';
import TossLogo from '@assets/png/Toss_Logo_Primary.png';
import ByingFooter from './components/ByingFooter';
import Title from '@components/layouts/Title';

const AddressInfo: IAddressInfo = {
  addressId: 1,
  userId: 1,
  addressName: '김윤일',
  addressZipCode: '46335',
};
const PaymentConfirmationPage = () => {
  return (
    <Layout footerVisible={false}>
      <Title titleText="배송/결제" />
      <Content>
        <ContentContainer>
          <ContentWrapper>
            <Container>
              <SectionTitle>배송 주소</SectionTitle>
              <ShippingAddress>
                <InfoContainer>
                  <SubTitle>받는 분</SubTitle>
                  <SubTitle>연락처</SubTitle>
                  <SubTitle>주소</SubTitle>
                  <SubTitle>상세 주소</SubTitle>
                </InfoContainer>
                <InfoContainer>
                  <SubContent>{AddressInfo.addressName}</SubContent>
                  <SubContent>010-3386-9999</SubContent>
                  <SubContent>주소</SubContent>
                  <SubContent>107-1210호</SubContent>
                </InfoContainer>
              </ShippingAddress>
              <Dropdown>
                <Option>
                  <SubContent>요청사항 없음</SubContent>
                </Option>
                <Option>
                  <SubContent>문 앞에 놓아주세요</SubContent>
                </Option>
                <Option>
                  <SubContent>경비실에 맡겨 주세요</SubContent>
                </Option>
                <Option>
                  <SubContent>파손 위험 상품입니다. 배송 시 주의해주세요</SubContent>
                </Option>
                <Option>
                  <SubContent>직접 입력</SubContent>
                </Option>
              </Dropdown>
            </Container>
            <OrderContainer>
              <OrderWrapper>
                <HeaderWrapper>
                  <SectionTitle>주문 상품 및 쿠폰</SectionTitle>
                  <SectionTitle>총 2건</SectionTitle>
                </HeaderWrapper>
                <OrderItemContainer>
                  <ByingProductItem />
                </OrderItemContainer>
                <CouponContainer>
                  <CouponTitle>할인쿠폰</CouponTitle>
                  <ButtonContainer>
                    <CouponButton>
                      <CouponButtonText>가입 웰컴 쿠폰</CouponButtonText>
                    </CouponButton>
                    <DeleteButton>사용취소</DeleteButton>
                  </ButtonContainer>
                </CouponContainer>
              </OrderWrapper>
              <TotalPriceContainer>
                <TotalPriceTitle>결제금액</TotalPriceTitle>
                <Price>21,900원</Price>
              </TotalPriceContainer>
            </OrderContainer>
            <Container>
              <SectionTitle>결제 방법</SectionTitle>
              <PaymentInfo>
                <SubTitle>일반 결제</SubTitle>
                <PaymentButton>
                  <LogoImageBox src={TossLogo} />
                </PaymentButton>
              </PaymentInfo>
            </Container>
            <Container>
              <SectionTitle>최종 주문 정보</SectionTitle>
              <FinalOrderInfo>
                <SubTitle>총 구매가</SubTitle>
                <SectionTitle>21,800원</SectionTitle>
              </FinalOrderInfo>
              <FinalOrderInfo>
                <SubTitle>총 배송비</SubTitle>
                <SubContent>무료</SubContent>
              </FinalOrderInfo>
            </Container>
            <Container>
              <SectionTitle>총 결제금액</SectionTitle>
              <TotalPrice>21,800원</TotalPrice>
            </Container>
          </ContentWrapper>
        </ContentContainer>
      </Content>
      <ByingFooter />
    </Layout>
  );
};

export default PaymentConfirmationPage;

const Option = styled.option`
  padding: 10px;
  font-size: 16px;
  background-color: #fff;
  color: #333;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const Dropdown = styled.select`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  background-color: ${PETPICK_COLORS.GRAY[0]};
  color: #333;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  border: 1px solid ${PETPICK_COLORS.GRAY[400]};
  margin-top: 4px;
  box-sizing: border-box;
  &:hover {
    border-color: #aaa;
  }

  &:focus {
    border-color: #555;
    box-shadow: 0 0 0 2px rgba(85, 85, 85, 0.2);
  }
`;
const Price = styled.span`
  color: ${PETPICK_COLORS.GRAY[800]};
  ${TextStyles.body.mediumM};
`;
const TotalPriceTitle = styled.span`
  color: ${PETPICK_COLORS.GRAY[600]};
  ${TextStyles.body.mediumR};
`;
const TotalPriceContainer = styled.div`
  background: ${PETPICK_COLORS.GRAY[200]};
  width: 100%;
  height: 87px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0 30px;
`;
const TotalPrice = styled.div`
  color: ${PETPICK_COLORS.GRAY[900]};
  ${TextStyles.bigTitle.xxlargeSB}
  display: flex;
  justify-content: flex-end;
`;
const PaymentButton = styled.button`
  border: 1px solid ${PETPICK_COLORS.GRAY[400]};
  border-radius: 8px;
  height: 60px;
  width: 100%;
  margin-top: 10px;
`;
const CouponContainer = styled.div`
  margin-top: 20px;
`;
const LogoImageBox = styled.img`
  width: 114px;
  height: 60px;
`;
const DeleteButton = styled.button`
  width: 80px;
  height: 30px;
  border: 1px solid ${PETPICK_COLORS.GRAY[400]};
  border-radius: 20px;
  margin-left: 14px;
`;
const CouponButtonText = styled.span`
  color: ${PETPICK_COLORS.GRAY[600]};
  ${TextStyles.body.mediumR};
`;
const CouponButton = styled.button`
  border: 1px solid ${PETPICK_COLORS.GRAY[400]};
  border-radius: 8px;
  padding: 0 11px;
  margin-top: 4px;
  height: 40px;
  width: 100%;
  text-align: start;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CouponTitle = styled.h1`
  margin-bottom: 10px;
  color: ${PETPICK_COLORS.GRAY[600]};
  ${TextStyles.body.mediumR};
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
`;

const SubContent = styled.span`
  ${TextStyles.subTitle.largeR};
  color: ${PETPICK_COLORS.GRAY[600]};
  margin-bottom: 10px;
`;
const SubTitle = styled.h2`
  ${TextStyles.subTitle.largeR};
  color: ${PETPICK_COLORS.GRAY[600]};
  margin-bottom: 10px;
`;
const SectionTitle = styled.h1`
  ${TextStyles.subTitle.largeSB};
  color: ${PETPICK_COLORS.GRAY[800]};
  padding-bottom: 20px;
`;
const TotalPaymentAmount = styled.div``;
const FinalOrderInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
const PaymentInfo = styled.div``;
const OrderItemContainer = styled.div``;
const ShippingAddress = styled.div`
  display: flex;
  gap: 60px;
`;
const OrderContainer = styled.div`
  width: 100%;
  border: 1px solid ${PETPICK_COLORS.GRAY[400]};
  border-radius: 8px;
  overflow: hidden;
`;
const OrderWrapper = styled.div`
  padding: 30px 30px 0 30px;
`;
const Container = styled.div`
  width: 100%;
  padding: 30px;
  border: 1px solid ${PETPICK_COLORS.GRAY[400]};
  border-radius: 8px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContentWrapper = styled.body`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 26px;
`;
const ContentContainer = styled.div`
  width: 1050px;
  box-sizing: border-box;
  display: flex;
`;
