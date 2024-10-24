import Layout from '@layout/Layout';
import * as S from './index.style';
import Test from '@assets/svg/test.jpg';
import Test2 from '@assets/svg/test-2.jpg';
import { Bell, Like, Minus, Plus } from '@assets/svg/index';

interface IStyleProps {
  isThrough: boolean;
  isDiscounted: boolean;
}
const DetailPage = () => {
  const isThrough = true;
  const isDiscounted = true;
  return (
    <Layout>
      <S.DetailLayout>
        <S.ProductContainer>
          <S.ProductImageContainer>
            <S.ProductImage src={Test} />
          </S.ProductImageContainer>
          <S.ProductInfoContainer>
            <div>
              <S.ProductTitle>[가게명] 판매명(떡볶이)</S.ProductTitle>
              <S.ProductTitleInfo> 40년 전통의 부산식 떡볶이</S.ProductTitleInfo>

              <div>
                <S.PriceContainer>
                  <S.DiscountText>10%</S.DiscountText>
                  <S.DiscountPrice>7,560</S.DiscountPrice>
                  <S.PriceText>원</S.PriceText>
                </S.PriceContainer>
                <S.PriceBox>
                  <S.RegularPrice>8,400원</S.RegularPrice>
                </S.PriceBox>
              </div>
            </div>

            <S.InfoList>
              <S.InfoListItem>
                <S.InfoTitle>배송</S.InfoTitle>
                <S.InfoText>
                  <S.Title>용주배송</S.Title>
                  <S.Text>
                    23시 전 주문 시 수도권/충청 내일 아침 7시 전 도착 (그 외 지역 아침 8시 전 도착)
                  </S.Text>
                </S.InfoText>
              </S.InfoListItem>
              <S.InfoListItem>
                <S.InfoTitle>판매자</S.InfoTitle>
                <S.InfoText>
                  <S.Title>이효린</S.Title>
                </S.InfoText>
              </S.InfoListItem>
              <S.InfoListItem>
                <S.InfoTitle>원산지</S.InfoTitle>
                <S.InfoText>
                  <S.Title>중국</S.Title>
                </S.InfoText>
              </S.InfoListItem>
            </S.InfoList>
            <S.PurchaseContainer>
              <S.InfoContainer>
                <S.InfoListItem>
                  <S.InfoTitle>상품선택</S.InfoTitle>
                  <S.InfoText>
                    <S.SelectLayout>
                      <div>[부산 상국이네] 떡볶이</div>
                      <S.SelectContainer>
                        <S.IncreaseButton>
                          <button>
                            <Minus width="28px" height="28px" />
                          </button>
                          <S.CountText>5</S.CountText>
                          <button>
                            <Plus width="28px" height="28px" />
                          </button>
                        </S.IncreaseButton>
                        <S.SelectPriceContainer>
                          <S.PriceSpan isThrough={isThrough} isDiscounted={isDiscounted}>
                            8,400원
                          </S.PriceSpan>
                          <S.PriceSpan isThrough={!isThrough} isDiscounted={!isDiscounted}>
                            7,560원
                          </S.PriceSpan>
                        </S.SelectPriceContainer>
                      </S.SelectContainer>
                    </S.SelectLayout>
                  </S.InfoText>
                </S.InfoListItem>
              </S.InfoContainer>

              <S.TotalContainer>
                <S.TotalPriceText>총 상품금액:</S.TotalPriceText>
                <S.TotalPrice>7,560</S.TotalPrice>
                <S.TotalWon>원</S.TotalWon>
              </S.TotalContainer>
              <S.ActionButtonContainer>
                <S.ActionButtons>
                  <Like width="32px" height="32px" />
                </S.ActionButtons>
                <S.ActionButtons>
                  <Bell width="32px" height="32px" />
                </S.ActionButtons>
                <S.ActionGoToCartButton>장바구니 담기</S.ActionGoToCartButton>
              </S.ActionButtonContainer>
            </S.PurchaseContainer>
          </S.ProductInfoContainer>
        </S.ProductContainer>
        <S.MainInfo>
          {/* 내비게이션바 */}
          <S.InfoNav>
            <S.NavList>
              <S.NavListItem>
                <S.Anchor>상품설명</S.Anchor>
              </S.NavListItem>
              <S.NavListItem>
                <S.Anchor>상세정보</S.Anchor>
              </S.NavListItem>
            </S.NavList>
          </S.InfoNav>

          <S.ProductDescriptionLayout>
            <S.DescriptionImageBox>
              <img src={Test2} />
            </S.DescriptionImageBox>
            {/* 상품 설명 텍스트 */}
            <S.DescriptionText>
              <h1>상품 제목</h1>
              <span>상품 세부 정보</span>
            </S.DescriptionText>
          </S.ProductDescriptionLayout>
          <S.DetailInfoContainer>상세정보</S.DetailInfoContainer>
        </S.MainInfo>
      </S.DetailLayout>
    </Layout>
  );
};

export default DetailPage;
