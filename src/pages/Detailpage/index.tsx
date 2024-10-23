import { styled } from 'styled-components';
import Layout from '@layout/Layout';
import Test from '@assets/test.jpg';

const DetailPage = () => {
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
              <div>
                <InfoListItem>
                  <InfoTitle>상품선택</InfoTitle>
                  <InfoText>
                    <div>
                      <div>상국이네 떡볶이</div>
                      <div>
                        <div>
                          <button>-</button>
                          <span>5</span>
                          <button>+</button>
                        </div>
                        <div>총 결제금액</div>
                      </div>
                    </div>
                  </InfoText>
                </InfoListItem>
              </div>

              <div>총 결제금액</div>
              <div>
                <button>좋아요</button>
                <button>알림설정</button>
                <button>장바구니 담기</button>
              </div>
            </PurchaseContainer>
          </ProductInfoContainer>
        </ProductContainer>
        <MainInfo>
          <InfoTabs>
            <TabItem>상품설명</TabItem>
            <TabItem>상세정보</TabItem>
          </InfoTabs>
          <ProductDescription>
            <DescriptionText>상품 설명 텍스트</DescriptionText>
          </ProductDescription>
          <DetailInfoContainer>상세정보</DetailInfoContainer>
        </MainInfo>
      </DetailLayout>
    </Layout>
  );
};

export default DetailPage;

const PurchaseContainer = styled.div``;
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
  font-weight: 500;
  font-size: 24px;
  color: rgb(51, 51, 51);
  line-height: 34px;
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
  margin: 20px 0 40px;
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
  margin: 0px auto;
`;
const DetailInfoContainer = styled.div``;
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
const ProductDescription = styled.div``;
const DescriptionText = styled.p``;
const InfoTabs = styled.div`
  display: flex;
  border: 1px solid red;
`;
const TabItem = styled.div``;
