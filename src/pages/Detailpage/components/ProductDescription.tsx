import * as S from '../styles/ProductDescription.style';

export const ProductDescription = ({ productInfo }) => (
  <S.MainInfo>
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
        <img src={productInfo.productImageUrl} />
      </S.DescriptionImageBox>
      <S.DescriptionText>
        <h1>{productInfo.productTitle}</h1>
        <span>상품 세부 정보</span>
      </S.DescriptionText>
    </S.ProductDescriptionLayout>
    <S.DetailInfoContainer>상세정보</S.DetailInfoContainer>
  </S.MainInfo>
);
