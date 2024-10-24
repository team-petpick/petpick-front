import { ShoppingCart } from '@assets/svg';
import { PETPICK_COLORS } from '@constants/colors';
import { TextStyles } from '@styles/textStyles';
import { IProductInfo } from '@types';
import styled from 'styled-components';

interface IProductProps {
  productInfo: IProductInfo;
}

const Product = ({ productInfo }: IProductProps) => {
  console.log(productInfo);
  return (
    <ProductContainer>
      <ProductImage />
      <AddShoppingCartButton>
        <ShoppingCart width={22} height={22} /> 담기
      </AddShoppingCartButton>
      <SellerName> {productInfo.seller}</SellerName>
      <ProductName>{productInfo.name}</ProductName>
      <div>{productInfo.price}</div>
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
  width: 250;
  height: 320px;
`;

const AddShoppingCartButton = styled.button`
  width: 100%;
  height: 36px;
  ${TextStyles.body.mediumM};
  color: ${PETPICK_COLORS.GRAY[900]};
`;

const SellerName = styled.div`
  ${TextStyles.subText.smallR}
  color: ${PETPICK_COLORS.GRAY[500]};
`;

const ProductName = styled.div`
  ${TextStyles.body.mediumM};
  color: ${PETPICK_COLORS.GRAY[800]};
`;
