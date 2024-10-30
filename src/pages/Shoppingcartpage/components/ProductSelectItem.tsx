import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import { Delete } from '@assets/svg';
import { Minus, Plus } from '@assets/svg/index';
import Test3 from '@assets/svg/test-3.jpg';
import styled from 'styled-components';
import CheckboxLabal from './CheckboxLabal';
const ProductSelectItem = () => {
  return (
    <ProductItem>
      <SelectWrapper>
        <SelectBox>
          <CheckboxLabal text="text" />
          <SelectText> 상품명 </SelectText>
        </SelectBox>
        <SelectButton>
          <Delete width="20px" height="20px" />
        </SelectButton>
      </SelectWrapper>
      <ProductItemContainer>
        <ProductInfo>
          <ProductImage src={Test3}></ProductImage>
          <ProductContainer>
            <ProductPriceContainer>
              <ProductPrice>29,900원</ProductPrice>
              <ProductFixedPrice> 34,900원</ProductFixedPrice>
            </ProductPriceContainer>
            <ProductCountContainer>
              <ProductCountButton>
                <Minus width="20px" height="20px" />
              </ProductCountButton>
              <ProductCount>5</ProductCount>
              <ProductCountButton>
                <Plus width="20px" height="20px" />
              </ProductCountButton>
            </ProductCountContainer>
          </ProductContainer>
        </ProductInfo>
      </ProductItemContainer>
    </ProductItem>
  );
};

export default ProductSelectItem;
const ProductCount = styled.span`
  text-align: center;
  min-width: 36px;
  margin: 2px 1px 0;
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
`;
const ProductCountButton = styled.button`
  width: 20px;
  height: 20px;
`;
const ProductCountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 36px;
  background: ${PETPICK_COLORS.GRAY[200]};
  border-radius: 20px;
`;
const ProductPrice = styled.span`
  color: ${PETPICK_COLORS.GRAY[800]};
  ${TextStyles.body.mediumB};
`;
const ProductFixedPrice = styled.span`
  text-decoration: line-through;
  margin-left: 4px;
  font-weight: 400;
  font-size: 13px;
  color: ${PETPICK_COLORS.GRAY[400]};
`;
const ProductPriceContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ProductImage = styled.img`
  height: 83px;
  border-radius: 8px;
  margin-right: 16px;
`;
const ProductInfo = styled.div`
  display: flex;
`;
const SelectButton = styled.button`
  display: flex;
  margin-right: 3px;
`;

const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${PETPICK_COLORS.GRAY[0]};
  margin: 16px 0;
  border-radius: 16px;
`;
const SelectText = styled.div`
  margin-left: 16px;
  align-self: center;
`;
const SelectBox = styled.div`
  display: flex;
`;
const ProductItemContainer = styled.li`
  padding: 4px 0px 16px 34px;
  border-bottom: 1px solid ${PETPICK_COLORS.GRAY[300]};
`;
const ProductItem = styled.li``;
