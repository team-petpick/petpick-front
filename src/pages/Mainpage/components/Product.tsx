import { Like, LikeFill, ShoppingCart } from '@assets/svg';
import * as S from '../styles/Product.style';
import { addCommaToPrice } from '@utils/addCommaToPrice';
import { IProductInfo } from '@types';
import { useState } from 'react';

interface IProductProps {
  productInfo: IProductInfo;
}

const Product = ({ productInfo }: IProductProps) => {
  const formattedOriginalPrice = addCommaToPrice(productInfo.productPrice);
  const formattedSalePrice = addCommaToPrice(
    productInfo.productPrice * (1 - productInfo.productSale / 100),
  );
  const [isLiked, setIsLiked] = useState(false);
  return (
    <S.ProductContainer>
      <S.ProductImage src={productInfo.productImageUrl} />
      <S.LikeCartButtonWrapper>
        {isLiked ? (
          <LikeFill onClick={() => setIsLiked(false)} width={30} height={30} />
        ) : (
          <Like onClick={() => setIsLiked(true)} width={30} height={30} />
        )}
        <S.AddShoppingCartButton>
          <ShoppingCart width={22} height={22} /> 담기
        </S.AddShoppingCartButton>
      </S.LikeCartButtonWrapper>
      <S.ProductInfo>
        <S.SellerName> {productInfo.sellerStoreName}</S.SellerName>
        <S.ProductName>{productInfo.productTitle}</S.ProductName>
        <S.ProductOriginalPrice>{formattedOriginalPrice}원</S.ProductOriginalPrice>
        <S.ProductSalePrice>
          <S.ProductSalePercent>{productInfo.productSale}%</S.ProductSalePercent>
          <S.ProductSalePrice>{formattedSalePrice}원</S.ProductSalePrice>
        </S.ProductSalePrice>
      </S.ProductInfo>
    </S.ProductContainer>
  );
};

export default Product;