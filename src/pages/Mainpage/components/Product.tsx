import { Like, ShoppingCart } from '@assets/svg';
import { PETPICK_COLORS } from '@constants/colors';
import { TextStyles } from '@styles/textStyles';
import { IProductInfo } from '@types';
import styled from 'styled-components';

interface IProductProps {
  productInfo: IProductInfo;
}

const Product = ({ productInfo }: IProductProps) => {
  return (
    <ProductContainer>
      <ProductImage />
      <LikeCartButtonWrapper>
        <Like width={30} height={30} />
        <AddShoppingCartButton>
          <ShoppingCart width={22} height={22} /> 담기
        </AddShoppingCartButton>
      </LikeCartButtonWrapper>
      <ProductInfo>
        <SellerName> {productInfo.sellerName}</SellerName>
        <ProductName>{productInfo.productTitle}</ProductName>
        <ProductOriginalPrice>{productInfo.productPrice}원</ProductOriginalPrice>
        <ProductSalePrice>
          <ProductSalePercent>{productInfo.productSale}%</ProductSalePercent>
          <ProductSalePrice>{productInfo.productPrice}원</ProductSalePrice>
        </ProductSalePrice>
      </ProductInfo>
    </ProductContainer>
  );
};

export default Product;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 256px;
  height: 454px;
`;

const ProductImage = styled.img`
  width: 250px;
  height: 320px;
  background-color: red;
`;
const LikeCartButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 36px;
  justify-content: space-between;
  width: 100%;
  margin-top: 8px;
  gap: 10px;
`;
const AddShoppingCartButton = styled.button`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid ${PETPICK_COLORS.GRAY[300]};
  ${TextStyles.body.mediumM};
  color: ${PETPICK_COLORS.GRAY[900]};
  gap: 10px;

  &:hover {
    background-color: ${PETPICK_COLORS.GRAY[300]};
  }
`;

const SellerName = styled.div`
  ${TextStyles.subText.smallR}
  color: ${PETPICK_COLORS.GRAY[500]};
`;

const ProductName = styled.div`
  ${TextStyles.body.mediumM};
  color: ${PETPICK_COLORS.GRAY[800]};
`;

const ProductInfo = styled.div`
  margin-top: 8px;
  width: 100%;
`;

const ProductOriginalPrice = styled.div`
  margin-top: 5px;
  ${TextStyles.subText.smallR};
  color: ${PETPICK_COLORS.GRAY[400]};
  text-decoration: line-through;
`;
const ProductSalePrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;
const ProductSalePercent = styled.div`
  ${TextStyles.body.mediumM};
  color: ${PETPICK_COLORS.RED[200]};
`;
