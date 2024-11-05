import * as S from '../styles/ProductImage.style';

interface IProductImage {
  imageUrl: string;
}

export const ProductImage = ({ imageUrl }: IProductImage) => (
  <S.ProductImageContainer>
    <S.ProductImage src={imageUrl} />
  </S.ProductImageContainer>
);
