import { IProductInfo } from '@types';
import Layout from '@layout/Layout';
import * as S from './index.style';
import Test2 from '@assets/svg/test-2.jpg';
import { Bell, Like, LikeFill, Minus, Plus } from '@assets/svg/index';
import { useEffect, useState } from 'react';

const DetailPage = () => {
  const isThrough = true;
  const isDiscounted = true;
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };
  useEffect(() => {}, []);
  const ProductInfo: IProductInfo = {
    productId: 1,
    sellerId: 1,
    categoryId: 1,
    productTitle: '사료1',
    productCnt: 1,
    productPrice: 10000,
    productType: 'DOG',
    productStatus: 'ON',
    productSale: 10,
    productImageUrl: '@assets/svg/test.jpg',
    sellerStoreName: '효린이네 제주농장',
  };
  return (
    <Layout>
      <S.DetailLayout>
        <S.ProductContainer>
          <S.ProductImageContainer>
            <S.ProductImage src={ProductInfo.productImageUrl} />
          </S.ProductImageContainer>
          <S.ProductInfoContainer>
            <div>
              <S.ProductTitle>
                [{ProductInfo.sellerStoreName}] {ProductInfo.productTitle}
              </S.ProductTitle>
              <S.ProductTitleInfo> 40년 전통의 부산식 떡볶이</S.ProductTitleInfo>

              <div>
                <S.PriceContainer>
                  <S.DiscountText>{ProductInfo.productSale}%</S.DiscountText>
                  <S.DiscountPrice>7,560</S.DiscountPrice>
                  <S.PriceText>원</S.PriceText>
                </S.PriceContainer>
                <S.PriceBox>
                  <S.RegularPrice>{ProductInfo.productPrice}</S.RegularPrice>
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
                  <S.Title>{ProductInfo.sellerStoreName}</S.Title>
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
                      <div>
                        [{ProductInfo.sellerStoreName}] {ProductInfo.productTitle}
                      </div>
                      <S.SelectContainer>
                        <S.IncreaseButton>
                          <button>
                            <Minus width="28px" height="28px" />
                          </button>
                          <S.CountText>{ProductInfo.productCnt}</S.CountText>
                          <button>
                            <Plus width="28px" height="28px" />
                          </button>
                        </S.IncreaseButton>
                        <S.SelectPriceContainer>
                          <S.PriceSpan isThrough={isThrough} isDiscounted={isDiscounted}>
                            {ProductInfo.productPrice}원
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
                <S.ActionButtons onClick={handleLikeClick}>
                  {liked ? (
                    <Like width="32px" height="32px" />
                  ) : (
                    <LikeFill width="32px" height="32px" />
                  )}
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
              <h1>{ProductInfo.productTitle}</h1>
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
