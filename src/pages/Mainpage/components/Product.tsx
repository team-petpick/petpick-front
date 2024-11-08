import { Like, LikeFill, ShoppingCart } from '@assets/svg';
import * as S from '../styles/Product.style';
import { addCommaToPrice } from '@utils/addCommaToPrice';
import { useState } from 'react';
import CartModal from '@components/modal/CartModal';
import { IProductInfo } from '@types';
import { fetchToggleLike } from '@apis/like';
import useGetLikeAll from '../hooks/useGetLikeAll';
import { ROUTE } from '@constants/ROUTE';
import { useNavigate } from 'react-router-dom';

interface IProductProps {
  productInfo: IProductInfo;
  isLiked: boolean;
  onClick: () => void;
}

const Product = ({ productInfo, isLiked, onClick }: IProductProps) => {
  const formattedOriginalPrice = addCommaToPrice(productInfo.productPrice);
  const formattedSalePrice = addCommaToPrice(
    Math.floor(productInfo.productPrice * (1 - productInfo.productSale / 100)),
  );
  const { reloadLikedProducts } = useGetLikeAll();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleDeleteModalClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  const handleLikeClick = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      alert('로그인 후 이용해주세요.');
      navigate(ROUTE.LOGINPAGE);
      return;
    }
    try {
      await fetchToggleLike(Number(productInfo.productId));
      reloadLikedProducts();
    } catch {
      throw new Error('찜한 상품 정보를 가져오는데 실패했습니다::');
    }
  };

  return (
    <S.ProductContainer onClick={onClick}>
      <S.ProductImage src={productInfo.productThumbnail} />
      <S.LikeCartButtonWrapper>
        {isLiked ? (
          <div onClick={(e) => handleLikeClick(e)}>
            <LikeFill width={30} height={30} />
          </div>
        ) : (
          <div onClick={(e) => handleLikeClick(e)}>
            <Like width={30} height={30} />
          </div>
        )}
        <S.AddShoppingCartButton onClick={(e) => handleDeleteModalClick(e)}>
          <ShoppingCart width={22} height={22} /> 담기
        </S.AddShoppingCartButton>
      </S.LikeCartButtonWrapper>
      <S.ProductInfo>
        <S.SellerName> {productInfo.seller.sellerStoreName}</S.SellerName>
        <S.ProductName>{productInfo.productName}</S.ProductName>
        {productInfo.productSale ? (
          <S.ProductOriginalPrice>{formattedOriginalPrice}원</S.ProductOriginalPrice>
        ) : (
          <S.ProductOriginalPricePlaceholder />
        )}
        <S.ProductSalePrice>
          {productInfo.productSale ? (
            <S.ProductSalePercent>{productInfo.productSale}%</S.ProductSalePercent>
          ) : null}
          <S.ProductSalePrice>{formattedSalePrice}원</S.ProductSalePrice>
        </S.ProductSalePrice>
      </S.ProductInfo>
      {isOpen && (
        <CartModal
          productInfo={productInfo}
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
        />
      )}
    </S.ProductContainer>
  );
};

export default Product;
