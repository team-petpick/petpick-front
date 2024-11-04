import * as S from '../styles/ProductSelection.style';
import ProductSelectItem from './ProductSelectItem';
import CheckboxLabal from './CheckboxLabal';
import useModal from '@components/modal/useModal';
import DeleteModal from '@components/modal/DeleteModal';
// import { useState } from 'react';
import EmptyCart from './EmptyCart';
import { PETPICK_COLORS } from '@styles/colors';
const ProductSelection = () => {
  const deleteModal = useModal();
  const checkItems = [1, 2];
  // const [checkItems, setCheckItems] = useState([]);
  // // 체크박스 단일 선택
  // const handleSingleCheck = (checked, id) => {
  //   if (checked) {
  //     setCheckItems((prev) => [...prev, id]);
  //   } else {
  //     setCheckItems(checkItems.filter((el) => el !== id));
  //   }
  // };
  // // 체크박스 전체 선택
  // const handleAllCheck = (checked) => {
  //   if (checked) {
  //     // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
  //     const idArray = [];
  //     data.forEach((el) => idArray.push(el.id));
  //     setCheckItems(idArray);
  //   } else {
  //     // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
  //     setCheckItems([]);
  //   }
  // };
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
      {checkItems.length != 0 ? (
        <S.SelectContainer>
          <S.SelectBox>
            <CheckboxLabal
              text="text"
              // onChange={(e: KeyboardEvent) => handleAllCheck(e.target.checked)}
              // checked={checkItems.length === data.length ? true : false}
            />
            <S.SelectText>전체 선택</S.SelectText>
            <S.SelectText>
              {selectCount}/{totalCount}
            </S.SelectText>
          </S.SelectBox>
          <S.DeleteButton onClick={deleteModal.openModal}>
            <S.DeleteButtonText>선택삭제</S.DeleteButtonText>
          </S.DeleteButton>
        </S.SelectContainer>
      ) : (
        <S.SelectContainer>
          <S.SelectBox>
            <CheckboxLabal text="text" />
            <S.SelectText
              color={checkItems.length === 0 ? PETPICK_COLORS.GRAY[500] : PETPICK_COLORS.GRAY[800]}
            >
              전체 선택
            </S.SelectText>
            <S.SelectText
              color={checkItems.length === 0 ? PETPICK_COLORS.GRAY[500] : PETPICK_COLORS.GRAY[800]}
            >
              0/0
            </S.SelectText>
          </S.SelectBox>
          <S.DeleteButton disabled={checkItems.length === 0}>
            <S.DeleteButtonText
              color={checkItems.length === 0 ? PETPICK_COLORS.GRAY[500] : PETPICK_COLORS.GRAY[800]}
            >
              선택삭제
            </S.DeleteButtonText>
          </S.DeleteButton>
        </S.SelectContainer>
      )}

      {checkItems.length != 0 ? (
        <S.ProductList>
          <ProductSelectItem />
          <S.ProductFooter>
            <S.SubText>가격</S.SubText>
          </S.ProductFooter>
        </S.ProductList>
      ) : (
        <EmptyCart />
      )}
    </S.Wrapper>
  );
};

export default ProductSelection;
