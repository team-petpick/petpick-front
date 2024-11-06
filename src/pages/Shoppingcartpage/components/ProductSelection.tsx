import styled from 'styled-components';
import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import ProductSelectItem from './ProductSelectItem';
import CheckboxLabal from './CheckboxLabal';
import { useEffect, useState } from 'react';
import { getCartItem } from '@apis/cart';
const ProductSelection = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const data = await getCartItem();
        console.log(data);
        setCartItems(data);
      } catch (error) {
        console.error('장바구니 조회 오류: ', error);
      }
    };
    fetchCartItems();
  }, []);

  return (
    <Wrapper>
      <SelectContainer>
        <SelectBox>
          <CheckboxLabal text="text" />
          <SelectText> 전체 선택 </SelectText>
        </SelectBox>
        <DeleteButton>
          <DeleteButtonText>선택삭제</DeleteButtonText>
        </DeleteButton>
      </SelectContainer>
      <ProductList>
        {cartItems.length > 0 ? (
          cartItems.map((item) => <ProductSelectItem item={item} />)
        ) : (
          <div>장바구니에 상품이 없습니다.</div>
        )}
        <ProductFooter>
          <SubText>가격</SubText>
        </ProductFooter>
      </ProductList>
    </Wrapper>
  );
};

export default ProductSelection;
const SubText = styled.span`
  color: ${PETPICK_COLORS.GRAY[800]};
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
`;
const ProductFooter = styled.button`
  width: 100%;
  height: 50px;
  background: ${PETPICK_COLORS.GRAY[200]};
  border-radius: 8px;
  margin-top: 10px;
`;
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
  margin-left: 6px;
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
  margin-right: 20px;
`;
