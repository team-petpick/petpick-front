import * as S from '../styles/ProductSelection.style';
import useModal from '@components/modal/useModal';
import DeleteModal from '@components/modal/DeleteModal';
import EmptyCart from './EmptyCart';
import { useEffect } from 'react';
import { deleteCartItem, getCartItem } from '@apis/cart';
import { addCommaToPrice } from '@utils/addCommaToPrice';
import { useCartStore } from '@store/cart';
import SelectedCountHeader from './SelectedCountHeader';
import CartProductList from './CartProductList';

const ProductSelection = () => {
  const { setCartItems, cartItems } = useCartStore();
  const deleteModal = useModal();
  const totalPrice = cartItems.reduce((sum, item) => {
    if (item.isChecked) {
      return sum + item.productPrice * (1 - item.productSale / 100) * item.cartCnt;
    }
    return sum;
  }, 0);

  // 장바구니 항목을 가져오는 함수
  const fetchGetCartItem = async () => {
    const response = await getCartItem();
    const cartItems = response.map((item: any) => ({
      ...item,
      isChecked: true,
    }));
    setCartItems(cartItems);
  };

  useEffect(() => {
    fetchGetCartItem();
  }, []);

  // 장바구니 삭제 함수
  const handleDeleteButtonClick = async () => {
    try {
      const isAllChecked = cartItems.every((item) => item.isChecked);
      if (isAllChecked) {
        await Promise.all(
          cartItems.map(async (item) => {
            await deleteCartItem(item.productId);
          }),
        );
      } else {
        const filteredCartItems = cartItems.filter((item) => !item.isChecked);
        const notFilteredCartItems = cartItems.filter((item) => item.isChecked);
        setCartItems(filteredCartItems);
        await Promise.all(
          notFilteredCartItems.map(async (item) => {
            await deleteCartItem(item.productId);
          }),
        );
      }
      deleteModal.setIsOpen(false);
      alert('삭제되었습니다.');
      fetchGetCartItem();
    } catch (error) {
      console.log('장바구니 DELETE api 호출 실패', error);
    }
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
        onConfirm={handleDeleteButtonClick}
      />
      {cartItems.length !== 0 && (
        <SelectedCountHeader
          checkedListLength={cartItems.filter((item) => item.isChecked).length}
          cartListLength={cartItems.length}
          deleteModal={deleteModal}
        />
      )}

      {cartItems.length > 0 ? (
        <S.ProductList>
          <CartProductList deleteModal={deleteModal} />
          <S.ProductFooter>
            <S.SubText>{addCommaToPrice(totalPrice)} 원</S.SubText>
          </S.ProductFooter>
        </S.ProductList>
      ) : (
        <EmptyCart />
      )}
    </S.Wrapper>
  );
};

export default ProductSelection;
