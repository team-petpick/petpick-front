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
import { fetchProductDetails } from '@apis';
import { IProductInfo } from '@types';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const [productInfo, setProductInfo] = useState<IProductInfo | null>(null);
  const [error, setError] = useState(null);
  const [liked, setLiked] = useState(false);
  const [productCount, setProductCount] = useState(1);
  const { productId } = useParams();

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

  useEffect(() => {
    const loadProductDetails = async () => {
      try {
        const response = await fetchProductDetails(productId);
        setProductInfo(response);
        console.log(response);
      } catch (err) {
        setError(err);
        console.error('Failed to fetch product details:', err);
      }
    };

    loadProductDetails();
  }, [productId]);
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
        <p>Loading...</p>
      )}
    </Layout>
  );
};

export default DetailPage;
