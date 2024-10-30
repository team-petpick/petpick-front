import test3 from '@assets/svg/test-3.jpg';
import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import styled from 'styled-components';

const ByingProductItem = () => {
  return (
    <ProductItemLayout>
      <ProductImage src={test3} />
      <Container>
        <ProductInfoTitle>
          <ProductTitle>윤일이네 농장</ProductTitle>
          <FixedPrice>정가</FixedPrice>
        </ProductInfoTitle>
        <ProductInfoTitle>
          <ProductSubTitle>강아지가 먹을 수 있는 닭고기</ProductSubTitle>
          <Price>판매가</Price>
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
`;
