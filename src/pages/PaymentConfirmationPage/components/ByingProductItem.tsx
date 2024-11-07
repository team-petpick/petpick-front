import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import { addCommaToPrice } from '@utils/addCommaToPrice';
import styled from 'styled-components';

const ByingProductItem = ({ productInfo }: any) => {
  return (
    <ProductItemLayout>
      <ProductImage src={productInfo.productThumbnail} />
      <Container>
        <ProductInfoTitle>
          <ProductTitle>{productInfo.sellerName}</ProductTitle>
          <FixedPrice>{addCommaToPrice(productInfo.productPrice)}원</FixedPrice>
        </ProductInfoTitle>
        <ProductInfoTitle>
          <ProductSubTitle>{productInfo.productName}</ProductSubTitle>
          <Price>
            {addCommaToPrice(
              productInfo.productPrice - productInfo.productPrice * (productInfo.productSale / 100),
            )}
            원
          </Price>
        </ProductInfoTitle>
      </Container>
    </ProductItemLayout>
  );
};

export default ByingProductItem;
const Price = styled.span`
  color: ${PETPICK_COLORS.GRAY[800]};
  ${TextStyles.body.mediumM};
`;
const FixedPrice = styled.span`
  color: ${PETPICK_COLORS.GRAY[500]};
  ${TextStyles.subText.smallM};
  text-decoration: line-through;
`;
const ProductSubTitle = styled.h2`
  color: ${PETPICK_COLORS.GRAY[800]};
  ${TextStyles.body.mediumM};
`;
const ProductTitle = styled.h1`
  color: ${PETPICK_COLORS.GRAY[500]};
  ${TextStyles.subText.smallM};
  margin-bottom: 5px;
`;
const ProductImage = styled.img`
  width: 83px;
  height: 98px;
  border-radius: 4px;
  margin-right: 26px;
`;
const ProductInfoTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Container = styled.div`
  width: 100%;
`;
const ProductItemLayout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 15px;
`;
