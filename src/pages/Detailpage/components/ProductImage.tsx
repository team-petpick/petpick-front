import * as S from '../styles/ProductImage.style';

export const ProductImage = ({ imageUrl }) => (
  <S.ProductImageContainer>
    <S.ProductImage src={imageUrl} />
  </S.ProductImageContainer>
);
