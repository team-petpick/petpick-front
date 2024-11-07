import * as S from '../styles/ProductSelection.style';
import useModal from '@components/modal/useModal';
import DeleteModal from '@components/modal/DeleteModal';
import EmptyCart from './EmptyCart';
import { useEffect, useState } from 'react';
import { getCartItem } from '@apis/cart';
import { ICartProps } from '@types';
import { addCommaToPrice } from '@utils/addCommaToPrice';
import { useCartStore } from '@store/cart';
import SelectedCountHeader from './SelectedCountHeader';
import CartProductList from './CartProductList';

const ProductSelection = () => {
  const deleteModal = useModal();
  const [cartList, setCartList] = useState<ICartProps[]>([]);
  const [productInfo, setProductInfo] = useState<ICartProps | null>(null);
  const { setCartItems, cartItems } = useCartStore();

  const totalPrice = cartItems.reduce((sum, item) => {
    if (item.isChecked) {
      return sum + item.productPrice * (1 - item.productSale / 100) * item.cartCnt;
    }
    return sum;
  }, 0);

  // 장바구니 항목을 가져오는 함수
  const fetchGetCartItem = async () => {
    const response = await getCartItem();
    const result = response.map(
      ({ productId, cartCnt }: { productId: number; cartCnt: number }) => ({ productId, cartCnt }),
    );
    localStorage.setItem('cartInfo', JSON.stringify(result));
    setCartList(response);
    setProductInfo(response);
    setCartItems(response);
  };

  useEffect(() => {
    fetchGetCartItem();
  }, []);

  // 장바구니 삭제 함수
  const handleDeleteButtonClick = async () => {
    // try {
    //   // 체크된 항목별로 삭제 API 호출
    //   for (const productId of checkedList) {
    //     await deleteCartItem(productId);
    //   }
    //   // 삭제된 항목을 cartList에서 제거하고 상태 업데이트
    //   setCartList((prevList) => prevList.filter((item) => !checkedList.includes(item.productId)));
    //   // setCheckedLists([]); // 체크된 항목 초기화
    //   deleteModal.setIsOpen(false); // 모달 닫기
    // } catch (error) {
    //   console.log('장바구니 DELETE api 호출 실패', error);
    // }
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

      {cartList.length > 0 && productInfo ? (
        <S.ProductList>
          <CartProductList />
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
