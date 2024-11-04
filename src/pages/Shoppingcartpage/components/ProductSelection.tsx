import * as S from '../styles/ProductSelection.style';
import ProductSelectItem from './ProductSelectItem';
import CheckboxLabal from './CheckboxLabal';
import useModal from '@components/modal/useModal';
import DeleteModal from '@components/modal/DeleteModal';
const ProductSelection = () => {
  const deleteModal = useModal();
  const selectCount = 1;
  const totalCount = 1;
  return (
    <S.Wrapper>
      <DeleteModal
        isOpen={deleteModal.isOpen}
        setIsOpen={deleteModal.setIsOpen}
        imageSrc={false}
        message={'선택한 상품을 삭제하시겠습니까 ?'}
        cancelText={'취소'}
        confirmText={'확인'}
        onConfirm={deleteModal.openModal}
      />
      <S.SelectContainer>
        <S.SelectBox>
          <CheckboxLabal text="text" />
          <S.SelectText> 전체 선택 </S.SelectText>
          <S.SelectText>
            {selectCount}/{totalCount}
          </S.SelectText>
        </S.SelectBox>
        <S.DeleteButton onClick={deleteModal.openModal}>
          <S.DeleteButtonText>선택삭제</S.DeleteButtonText>
        </S.DeleteButton>
      </S.SelectContainer>
      <S.ProductList>
        <ProductSelectItem />

        <S.ProductFooter>
          <S.SubText>가격</S.SubText>
        </S.ProductFooter>
      </S.ProductList>
    </S.Wrapper>
  );
};

export default ProductSelection;
