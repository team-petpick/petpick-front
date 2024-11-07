import CheckboxLabal from './CheckboxLabal';

import * as S from '../styles/ProductSelection.style';
import { useCartStore } from '@store/cart';

interface SelectedCountHeaderProps {
  checkedListLength: number;
  cartListLength: number;
  deleteModal: {
    isOpen: boolean;
    openModal: () => void;
  };
}

const SelectedCountHeader = ({
  checkedListLength,
  cartListLength,
  deleteModal,
}: SelectedCountHeaderProps) => {
  const { cartItems, setCartItems } = useCartStore();
  const isAllChecked = cartItems.every((item) => item.isChecked);
  const handleCheckboxClick = () => {
    const newCartItems = cartItems.map((item) => ({ ...item, isChecked: !isAllChecked }));
    setCartItems(newCartItems);
  };
  return (
    <S.SelectContainer>
      <S.SelectBox>
        <div onClick={handleCheckboxClick}>
          <CheckboxLabal text="text" checked={isAllChecked} />
        </div>
        <S.SelectText>전체 선택</S.SelectText>
        <S.SelectText>
          {checkedListLength}/{cartListLength}
        </S.SelectText>
      </S.SelectBox>
      <S.DeleteButton onClick={deleteModal.openModal}>
        <S.DeleteButtonText>선택삭제</S.DeleteButtonText>
      </S.DeleteButton>
    </S.SelectContainer>
  );
};

export default SelectedCountHeader;
