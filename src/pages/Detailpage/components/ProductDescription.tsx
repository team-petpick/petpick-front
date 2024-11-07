import { IProductInfo } from '@types';
import * as S from '../styles/ProductDescription.style';

interface IProductDescription {
  productInfo: IProductInfo;
}

export const ProductDescription = ({ productInfo }: IProductDescription) => (
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
        <img src={productInfo.productThumbnail} />
      </S.DescriptionImageBox>
      <S.DescriptionText>
        <h1>{productInfo.productName}</h1>
        <span>상품 세부 정보</span>
      </S.DescriptionText>
    </S.ProductDescriptionLayout>
    <S.DetailInfoContainer>상세정보</S.DetailInfoContainer>
  </S.MainInfo>
);
