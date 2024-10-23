import { styled } from 'styled-components';
import Layout from '@layout/Layout';
import Test from '@assets/svg/test.jpg';
import Test2 from '@assets/svg/test-2.jpg';
import { Bell, Like, Minus, Plus } from '@assets/svg/index';
import { PETPICK_COLORS } from '@constants/colors';
import { TextStyles } from '@styles/textStyles';
interface IStyleProps {
  isThrough: boolean;
  isDiscounted: boolean;
}
const DetailPage = () => {
  const isThrough = true;
  const isDiscounted = true;
  return (
    <Layout>
      <DetailLayout>
        <ProductContainer>
          <ProductImageContainer>
            <ProductImage src={Test} />
          </ProductImageContainer>
          <ProductInfoContainer>
            <div>
              <ProductTitle>[가게명] 판매명(떡볶이)</ProductTitle>
              <ProductTitleInfo> 40년 전통의 부산식 떡볶이</ProductTitleInfo>

              <div>
                <PriceContainer>
                  <DiscountText>10%</DiscountText>
                  <DiscountPrice>7,560</DiscountPrice>
                  <PriceText>원</PriceText>
                </PriceContainer>
                <PriceBox>
                  <RegularPrice>8,400원</RegularPrice>
                </PriceBox>
              </div>
            </div>

            <InfoList>
              <InfoListItem>
                <InfoTitle>배송</InfoTitle>
                <InfoText>
                  <Title>용주배송</Title>
                  <Text>
                    23시 전 주문 시 수도권/충청 내일 아침 7시 전 도착 (그 외 지역 아침 8시 전 도착)
                  </Text>
                </InfoText>
              </InfoListItem>
              <InfoListItem>
                <InfoTitle>판매자</InfoTitle>
                <InfoText>
                  <Title>이효린</Title>
                </InfoText>
              </InfoListItem>
              <InfoListItem>
                <InfoTitle>원산지</InfoTitle>
                <InfoText>
                  <Title>중국</Title>
                </InfoText>
              </InfoListItem>
            </InfoList>
            <PurchaseContainer>
              <InfoContainer>
                <InfoListItem>
                  <InfoTitle>상품선택</InfoTitle>
                  <InfoText>
                    <SelectLayout>
                      <div>[부산 상국이네] 떡볶이</div>
                      <SelectContainer>
                        <IncreaseButton>
                          <button>
                            <Minus width="28px" height="28px" />
                          </button>
                          <CountText>5</CountText>
                          <button>
                            <Plus width="28px" height="28px" />
                          </button>
                        </IncreaseButton>
                        <SelectPriceContainer>
                          <PriceSpan isThrough={isThrough} isDiscounted={isDiscounted}>
                            8,400원
                          </PriceSpan>
                          <PriceSpan isThrough={!isThrough} isDiscounted={!isDiscounted}>
                            7,560원
                          </PriceSpan>
                        </SelectPriceContainer>
                      </SelectContainer>
                    </SelectLayout>
                  </InfoText>
                </InfoListItem>
              </InfoContainer>

              <TotalContainer>
                <TotalPriceText>총 상품금액:</TotalPriceText>
                <TotalPrice>7,560</TotalPrice>
                <TotalWon>원</TotalWon>
              </TotalContainer>
              <ActionButtonContainer>
                <ActionButtons>
                  <Like width="32px" height="32px" />
                </ActionButtons>
                <ActionButtons>
                  <Bell width="32px" height="32px" />
                </ActionButtons>
                <ActionGoToCartButton>장바구니 담기</ActionGoToCartButton>
              </ActionButtonContainer>
            </PurchaseContainer>
          </ProductInfoContainer>
        </ProductContainer>
        <MainInfo>
          {/* 내비게이션바 */}
          <InfoNav>
            <NavList>
              <NavListItem>
                <Anchor>상품설명</Anchor>
              </NavListItem>
              <NavListItem>
                <Anchor>상세정보</Anchor>
              </NavListItem>
            </NavList>
          </InfoNav>

          <ProductDescriptionLayout>
            <DescriptionImageBox>
              <img src={Test2} />
            </DescriptionImageBox>
            {/* 상품 설명 텍스트 */}
            <DescriptionText>
              <h1>상품 제목</h1>
              <span>상품 세부 정보</span>
            </DescriptionText>
          </ProductDescriptionLayout>
          <DetailInfoContainer>상세정보</DetailInfoContainer>
        </MainInfo>
      </DetailLayout>
    </Layout>
  );
};

export default DetailPage;
const ActionGoToCartButton = styled.button`
  padding: 0 10px;
  text-align: center;
  overflow: hidden;
  width: 432px;
  height: 100%;
  border-radius: 3px;
  font-size: ${TextStyles.body.mediumM};
  color: #fff;
  background-color: ${PETPICK_COLORS.BLUE[300]};
  border: 0 none;
`;
const ActionButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  height: 56px;
  margin-top: 20px;
`;
const ActionButtons = styled.button`
  border: 1px solid ${PETPICK_COLORS.BLUE[300]};
  border-radius: 3px;
  width: 56px;
`;
const TotalContainer = styled.div`
  padding-top: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
const TotalWon = styled.div`
  padding-left: 5px;
  ${TextStyles.subTitle.largeSB}
`;
const TotalPriceText = styled.span`
  padding-right: 12px;
  ${TextStyles.body.mediumM}
`;
const TotalPrice = styled.span`
  color: ${PETPICK_COLORS.GRAY[800]};
  ${TextStyles.bigTitle.xxlargeB}
`;
const InfoContainer = styled.div`
  border-bottom: 1px solid ${PETPICK_COLORS.GRAY[200]};
`;
const PriceSpan = styled.span<IStyleProps>`
  font-weight: normal;
  font-size: 12px;
  color: ${({ isDiscounted }) =>
    isDiscounted ? PETPICK_COLORS.GRAY[400] : PETPICK_COLORS.GRAY[800]};
  text-decoration: ${({ isThrough }) => (isThrough ? 'line-through' : 'none')};
`;
const SelectPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 4px;
`;
const CountText = styled.span`
  display: flex;
  justify-content: center;
  font-size: 14px;
  text-align: center;
  width: 31px;
  height: 28px;
  line-height: 28px;
`;
const SelectLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 11px 10px 11px 15px;
  font-size: 12px;
  border: 1px solid ${PETPICK_COLORS.GRAY[200]};
  width: 100%;
`;
const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 4px;
`;
const IncreaseButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 88px;
  border-radius: 3px;
  border: 1px solid ${PETPICK_COLORS.GRAY[300]};
`;
const PurchaseContainer = styled.div`
  padding-bottom: 40px;
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
  padding-top: 20px;
  font-weight: bold;
  line-height: 30px;
`;
const PriceBox = styled.div`
  margin: 8px 0 40px;
`;
const PriceText = styled.span`
  font-size: 18px;
  color: rgb(51, 51, 51);
`;
const DiscountText = styled.span`
  padding-right: 9px;
  color: rgb(250, 98, 47);
  font-size: 28px;
`;
const DiscountPrice = styled.span`
  padding-right: 4px;
  font-size: 28px;
  color: rgb(51, 51, 51);
`;
const RegularPrice = styled.span`
  font-size: 16px;
  color: rgb(181, 181, 181);
  letter-spacing: -0.5px;
  text-decoration: line-through;
  margin-right: 1px;
`;
const ProductTitle = styled.h1`
  width: 500px;
  ${TextStyles.bigTitle.xxlargeSB}
  color: rgb(51, 51, 51);
  margin: 0px 20px 0px 0px;
`;
const ProductTitleInfo = styled.h2`
  width: 500px;
  font-size: 14px;
  font-weight: 400;
  color: #b5b5b5;
  line-height: 19px;
  margin-top: 4px;
`;
const Title = styled.p`
  color: rgb(51, 51, 51);
  font-weight: 400;
  line-height: 19px;
  white-space: pre-line;
`;
const Text = styled.p`
  font-size: 12px;
  color: rgb(102, 102, 102);
  padding-top: 4px;
  line-height: 16px;
  white-space: pre-line;
`;
const InfoTitle = styled.dt`
  width: 128px;
  height: 100%;
  line-height: 19px;
  color: rgb(102, 102, 102);
`;
const InfoText = styled.dd`
  display: flex;
  flex-direction: column;
  color: rgb(51, 51, 51);
  line-height: 19px;
  font-weight: 400;
`;
const InfoList = styled.ul`
  margin-top: 20px;
`;
const InfoListItem = styled.li`
  display: flex;

  padding: 17px 0 18px;
  border-top: 1px solid rgb(244, 244, 244);
  font-size: 14px;
`;
const MainInfo = styled.main`
  width: 1010px;
`;

const DetailLayout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: auto;
  margin: 0px auto;
`;
const DetailInfoContainer = styled.div`
  padding-bottom: 100px;
`;
const ProductContainer = styled.div`
  width: 1050px;
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
`;
const ProductImageContainer = styled.div`
  width: 430px;
  height: 552px;
`;
const ProductImage = styled.img`
  width: 100%;
  border-radius: 6px;
`;
const ProductInfoContainer = styled.section`
  width: 560px;
`;
const ProductDescriptionLayout = styled.div`
  padding-top: 40px;
`;

const DescriptionImageBox = styled.div`
  width: 100%;
`;
const DescriptionText = styled.p``;
const InfoNav = styled.nav`
  width: 100%;
  display: flex;
  margin-top: 50px;
  box-shadow: inset 0 -0.5px 0 0 #${PETPICK_COLORS.GRAY[300]};
`;
const NavList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: 60px;
`;
const NavListItem = styled.li`
  width: 100%;
  display: flex;
  flex: 1;
  border-width: 1px 0 1px 1px;
  border-color: ${PETPICK_COLORS.GRAY[200]};
  border-style: solid;
  background-color: ${PETPICK_COLORS.GRAY[100]};
`;
const Anchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  ${TextStyles.body.mediumM}
  color: ${PETPICK_COLORS.GRAY[600]}
`;
