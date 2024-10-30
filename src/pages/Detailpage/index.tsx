import { IProductInfo } from '@types';
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

const DetailPage = () => {
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

  const ProductInfo: IProductInfo = {
    productId: 1,
    sellerId: 1,
    categoryId: 1,
    productTitle: '사료1',
    productCnt: 1,
    productPrice: 10000,
    productType: 'DOG',
    productStatus: 'ON',
    productSale: 10,
    productImageUrl: '@assets/svg/test.jpg',
    sellerStoreName: '효린이네 제주농장',
  };
  return (
    <Layout>
      <S.DetailLayout>
        <S.ProductContainer>
          <ProductImage imageUrl={ProductInfo.productImageUrl} />
          <S.ProductInfoContainer>
            <ProductBasicInfo productInfo={ProductInfo} />
            <ProductAdditionalInfo sellerStoreName={ProductInfo.sellerStoreName} />
            <PurchaseOptions
              productInfo={ProductInfo}
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
        <ProductDescription productInfo={ProductInfo} />
      </S.DetailLayout>
    </Layout>
  );
};

export default DetailPage;
