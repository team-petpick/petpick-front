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
import { useNavigate, useParams } from 'react-router-dom';
import { fetchToggleLike, fetchWishList } from '@apis';
import { useUserStore } from '@store/userStore';
import { ROUTE } from '@constants/ROUTE';
import { postCartItem } from '@apis/cart';

const DetailPage = () => {
  const { productId } = useParams();
  const { productInfo, error, isLoading } = useGetProductDetails(Number(productId));
  const [productCount, setProductCount] = useState(1);
  const [liked, setLiked] = useState(false);
  const { userInfo } = useUserStore();
  const userId = userInfo.userId;
  const navigate = useNavigate();

  // 좋아요 관리
  useEffect(() => {
    const loadProductLikes = async () => {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        return;
      }
      try {
        if (userId !== null) {
          const response = await fetchWishList(userId);
          const likedProducts = response.data; // 좋아요한 상품 목록 데이터
          setLiked(likedProducts.includes(Number(productId))); // productId가 목록에 있는지 확인
        }
      } catch (err) {
        console.error('상품 정보를 가져오는데 실패했습니다:', err);
      }
    };
    loadProductLikes();
  }, [productId, userId]);

  const handleLikeClick = async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      alert('로그인 후 이용해주세요.');
      return;
    }
    try {
      if (userId != null) {
        await fetchToggleLike(Number(productId));
        setLiked(!liked); // 로컬 상태를 토글하여 즉시 UI 반영
        console.log('좋아요 상태 API 호출 성공.'); // API 호출 여부 확인
      }
    } catch (err) {
      console.error('찜한 상품 정보를 가져오는데 실패했습니다::', err);
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

  const fetchPostCartItem = async () => {
    if (!productInfo) {
      console.error('productInfo가 정의되지 않았습니다.');
      return;
    }
    try {
      console.log('장바구니 요청 데이터:', {
        productId: productInfo.productId,
        quantity: productInfo.productCnt,
      });
      const response = await postCartItem(productInfo.productId, productCount);
      console.log('장바구니 추가 응답:', response);
      if (response === 'Successfully added cart item') {
        alert('장바구니에 담겼습니다.');
      }
    } catch (error) {
      alert('장바구니에 담는데 실패했습니다.');
      console.error(error);
    }
  };

  const handleCartButtonClick = async () => {
    if (!userId) return;
    await fetchPostCartItem();
    const url = ROUTE.SHOPPINGCART.replace(':userId', userId.toString());
    navigate(url);
  };

  return (
    <Layout footerVisible={true}>
      {productInfo ? (
        <S.DetailLayout>
          <S.ProductContainer>
            <ProductImage />
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
                <S.ActionGoToCartButton onClick={handleCartButtonClick}>
                  장바구니 담기
                </S.ActionGoToCartButton>
              </S.ActionButtonContainer>
            </S.ProductInfoContainer>
          </S.ProductContainer>
          <ProductDescription />
        </S.DetailLayout>
      ) : (
        <Loading />
      )}
    </Layout>
  );
};

export default DetailPage;
