import Layout from '@layouts/Layout';
import * as S from './styles/index.style';
import { useState } from 'react';
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

const DetailPage = (productId: number) => {
  const { productInfo, error, isLoading } = useGetProductDetails(productId);

  const [liked, setLiked] = useState(false);
  const [productCount, setProductCount] = useState(1);

  const handleLikeClick = () => {
    setLiked(!liked);
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
