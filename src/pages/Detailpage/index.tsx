import Layout from '@layouts/Layout';
import * as S from './styles/index.style';
import { useEffect, useState } from 'react';
import { ProductImage } from './components/ProductImage';
import { ProductBasicInfo } from './components/ProductBasicInfo';
import { ProductAdditionalInfo } from './components/ProductAdditionalInfo';
import { PurchaseOptions } from './components/PurchaseOptions';
import Like from '@assets/svg/Like';
import LikeFill from '@assets/svg/LikeFill';
import Bell from '@assets/svg/Bell';
import { ProductDescription } from './components/ProductDescription';
import useGetProductDetails from './hooks/useGetProductDetails';
import Loading from '@components/Loading';
import { useParams } from 'react-router-dom';
import { fetchToggleLike, fetchWishList } from '@apis';
import { useUserStore } from '@store/userStore';

const DetailPage = () => {
  const { productId } = useParams();
  const { productInfo, error, isLoading } = useGetProductDetails(Number(productId));
  const [productCount, setProductCount] = useState(1);
  const { userId } = useUserStore();

  const [liked, setLiked] = useState(false);

  // 좋아요 관리
  useEffect(() => {
    const loadProductLikes = async () => {
      try {
        if (userId !== null) {
          const response = await fetchWishList(userId, Number(productId));
          const likedProducts = response.data; // 좋아요한 상품 목록 데이터
          setLiked(likedProducts.includes(Number(productId)));
        }
      } catch (err) {
        console.error('Failed to fetch product details:', err);
      }
    };
    loadProductLikes();
  }, [productId, userId]);

  const handleLikeClick = async () => {
    try {
      await fetchToggleLike(Number(productId));
      setLiked(!liked); // 로컬 상태를 토글하여 즉시 UI 반영
    } catch (err) {
      console.error('Failed to update wishlist:', err);
    }
  };

  const handlePlusClick = () => {
    if (productCount >= 0) {
      setProductCount(productCount + 1);
    }
  };
  const handleMinusClick = () => {
    if (productCount >= 1) {
      setProductCount(productCount - 1);
    }
  };
  if (error) return <p>Error: {error.message}</p>;
  if (isLoading) return <Loading />;

  return (
    <Layout footerVisible={true}>
      {productInfo ? (
        <S.DetailLayout>
          <S.ProductContainer>
            <ProductImage imageUrl={productInfo.productImg.productImgUrl} />
            <S.ProductInfoContainer>
              <ProductBasicInfo productInfo={productInfo} />
              <ProductAdditionalInfo sellerStoreName={productInfo.seller.sellerStoreName} />
              <PurchaseOptions
                productInfo={productInfo}
                productCount={productCount}
                handlePlusClick={handlePlusClick}
                handleMinusClick={handleMinusClick}
              />
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
            </S.ProductInfoContainer>
          </S.ProductContainer>
          <ProductDescription productInfo={productInfo} />
        </S.DetailLayout>
      ) : (
        <Loading />
      )}
    </Layout>
  );
};

export default DetailPage;
