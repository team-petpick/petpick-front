import styled from 'styled-components';
import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import ProductSelectItem from './ProductSelectItem';
import CheckboxLabal from './CheckboxLabal';
import useModal from '@components/modal/useModal';
import DeleteModal from '@components/modal/DeleteModal';
const ProductSelection = () => {
  const deleteModal = useModal();

  return (
    <Wrapper>
      <DeleteModal
        isOpen={deleteModal.isOpen}
        setIsOpen={deleteModal.setIsOpen}
        imageSrc={false}
        message={'선택한 상품을 삭제하시겠습니까 ?'}
        cancelText={'취소'}
        confirmText={'확인'}
        onConfirm={deleteModal.openModal}
      />
      <SelectContainer>
        <SelectBox>
          <CheckboxLabal text="text" />
          <SelectText> 전체 선택 </SelectText>
        </SelectBox>
        <DeleteButton onClick={deleteModal.openModal}>
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
