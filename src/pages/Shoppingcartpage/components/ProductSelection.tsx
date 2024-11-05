import * as S from '../styles/ProductSelection.style';
import ProductSelectItem from './ProductSelectItem';
import CheckboxLabal from './CheckboxLabal';
import useModal from '@components/modal/useModal';
import DeleteModal from '@components/modal/DeleteModal';
import EmptyCart from './EmptyCart';
import { PETPICK_COLORS } from '@styles/colors';
import { useCallback, useState } from 'react';
interface IDataListItem {
  id: number;
  data: string;
}
const ProductSelection = () => {
  const deleteModal = useModal();
  const dataLists: IDataListItem[] = [
    { id: 1, data: 'aaa' },
    { id: 2, data: 'bbb' },
    { id: 3, data: 'ccc' },
  ];
  const [checkedList, setCheckedLists] = useState<number[]>([]);

  // 전체 체크 클릭 시 발생하는 함수
  const onCheckedAll = useCallback(
    (checked: boolean) => {
      if (checked) {
        setCheckedLists(dataLists.map((list) => list.id)); // 모든 항목의 id를 추가
      } else {
        setCheckedLists([]); // 선택 해제 시 빈 배열로 초기화
      }
    },
    [dataLists],
  );

  // 개별 체크 클릭 시 발생하는 함수
  const onCheckedElement = useCallback(
    (checked: boolean, id: number) => {
      if (checked) {
        setCheckedLists([...checkedList, id]);
      } else {
        setCheckedLists(checkedList.filter((el) => el !== id));
      }
    },
    [checkedList],
  );

  // 전체 선택 체크박스 onChange 핸들러
  const handleAllCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCheckedAll(e.target.checked);
  };

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
      {checkedList.length != 0 ? (
        <S.SelectContainer>
          <S.SelectBox>
            <CheckboxLabal
              text="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => onCheckedAll(e.target.checked)}
              checked={checkedList.length === dataLists.length && dataLists.length > 0}
            />
            <S.SelectText>전체 선택</S.SelectText>
            <S.SelectText>
              {checkedList.length}/{dataLists.length}
            </S.SelectText>
          </S.SelectBox>
          <S.DeleteButton onClick={deleteModal.openModal}>
            <S.DeleteButtonText>선택삭제</S.DeleteButtonText>
          </S.DeleteButton>
        </S.SelectContainer>
      ) : (
        <S.SelectContainer>
          <S.SelectBox>
            <CheckboxLabal text="text" checked={false} onChange={handleAllCheckChange} />
            <S.SelectText
              color={checkedList.length === 0 ? PETPICK_COLORS.GRAY[500] : PETPICK_COLORS.GRAY[800]}
            >
              전체 선택
            </S.SelectText>
            <S.SelectText
              color={checkedList.length === 0 ? PETPICK_COLORS.GRAY[500] : PETPICK_COLORS.GRAY[800]}
            >
              0/0
            </S.SelectText>
          </S.SelectBox>
          <S.DeleteButton disabled={checkedList.length === 0}>
            <S.DeleteButtonText
              color={checkedList.length === 0 ? PETPICK_COLORS.GRAY[500] : PETPICK_COLORS.GRAY[800]}
            >
              선택삭제
            </S.DeleteButtonText>
          </S.DeleteButton>
        </S.SelectContainer>
      )}

      {dataLists.length > 0 ? (
        <S.ProductList>
          {dataLists.map((product) => (
            <ProductSelectItem
              key={product.id}
              product={product}
              isChecked={checkedList.includes(product.id)}
              onCheck={(e: React.ChangeEvent<HTMLInputElement>) =>
                onCheckedElement((e.target as HTMLInputElement).checked, product.id)
              }
            />
          ))}
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
