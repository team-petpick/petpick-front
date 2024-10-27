import styled from 'styled-components';
import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import ProductSelectItem from './ProductSelectItem';

const ProductSelection = () => {
  return (
    <Wrapper>
      <SelectContainer>
        <SelectBox>
          <input type="checkbox" />
          <SelectText> 전체 선택 </SelectText>
        </SelectBox>
        <DeleteButton>
          <DeleteButtonText>선택삭제</DeleteButtonText>
        </DeleteButton>
      </SelectContainer>
      <ProductList>
        <ProductSelectItem />
        <ProductSelectItem />
        <ProductSelectItem />
        <ProductSelectItem />
        <ProductSelectItem />
        <ProductSelectItem />
        <ProductSelectItem />
      </ProductList>
    </Wrapper>
  );
};

export default ProductSelection;

const DeleteButtonText = styled.span`
  ${TextStyles.subText.smallSB}
`;
const DeleteButton = styled.button`
  border: 1px solid ${PETPICK_COLORS.GRAY[300]};
  border-radius: 6px;
  padding: 0 12px;
  height: 32px;
`;
const SelectText = styled.div`
  margin-left: 16px;
  align-self: center;
`;
const SelectBox = styled.div`
  display: flex;
`;
const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background: ${PETPICK_COLORS.GRAY[0]};
  margin-bottom: 16px;
  border-radius: 16px;
`;

const ProductList = styled.ul`
  background: ${PETPICK_COLORS.GRAY[0]};
  border-radius: 16px;
  padding: 20px 16px;
  overflow: scroll;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 565px;
`;
