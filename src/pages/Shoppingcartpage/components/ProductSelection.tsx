import * as S from '../styles/ProductSelection.style';
import ProductSelectItem from './ProductSelectItem';
import CheckboxLabal from './CheckboxLabal';
import useModal from '@components/modal/useModal';
import DeleteModal from '@components/modal/DeleteModal';
import EmptyCart from './EmptyCart';
import { PETPICK_COLORS } from '@styles/colors';
import { useCallback, useEffect, useState } from 'react';
import { deleteCartItem, getCartItem } from '@apis/cart';
import { ICartProps } from '@types';
import { addCommaToPrice } from '@utils/addCommaToPrice';

interface ProductSelectionProps {
  setTotalPrice: (price: number) => void;
  totalPrice: number;
}

const ProductSelection: React.FC<ProductSelectionProps> = ({ setTotalPrice, totalPrice }) => {
  const deleteModal = useModal();
  const [cartList, setCartList] = useState<ICartProps[]>([]);
  const [productInfo, setProductInfo] = useState<ICartProps | null>(null);
  const [checkedList, setCheckedLists] = useState<number[]>([]);
  // const [totalPrice, setTotalPrice] = useState(0);

  // 장바구니 항목을 가져오는 함수
  const fetchGetCartItem = async () => {
    const response = await getCartItem();
    const result = response.map(
      ({ productId, cartCnt }: { productId: number; cartCnt: number }) => ({ productId, cartCnt }),
    );
    localStorage.setItem('cartInfo', JSON.stringify(result));
    setCartList(response);
    setProductInfo(response);
  };

  useEffect(() => {
    fetchGetCartItem();
  }, []);

  // 총 금액 계산
  useEffect(() => {
    const total = cartList.reduce((sum, item) => {
      const itemTotalPrice = item.productPrice * (1 - item.productSale / 100) * item.cartCnt;
      return sum + itemTotalPrice;
    }, 0);
    setTotalPrice(total);
  }, [cartList, setTotalPrice]);

  // 수량 업데이트 핸들러
  const handleQuantityChange = (productId: number, newQuantity: number) => {
    setCartList((prevList) =>
      prevList.map((item) =>
        item.productId === productId ? { ...item, cartCnt: newQuantity } : item,
      ),
    );
  };

  // 장바구니 삭제 함수
  const handleDeleteButtonClick = async () => {
    try {
      // 체크된 항목별로 삭제 API 호출
      for (const productId of checkedList) {
        await deleteCartItem(productId);
      }
      // 삭제된 항목을 cartList에서 제거하고 상태 업데이트
      setCartList((prevList) => prevList.filter((item) => !checkedList.includes(item.productId)));
      setCheckedLists([]); // 체크된 항목 초기화
      deleteModal.setIsOpen(false); // 모달 닫기
    } catch (error) {
      console.log('장바구니 DELETE api 호출 실패', error);
    }
  };

  // 전체 체크 클릭 시 발생하는 함수
  const onCheckedAll = useCallback(
    (checked: boolean) => {
      if (checked) {
        setCheckedLists(cartList.map((list) => list.productId)); // 모든 항목의 id를 추가
      } else {
        setCheckedLists([]); // 선택 해제 시 빈 배열로 초기화
      }
    },
    [cartList],
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
        onConfirm={handleDeleteButtonClick}
      />
      {checkedList.length != 0 ? (
        <S.SelectContainer>
          <S.SelectBox>
            <CheckboxLabal
              text="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => onCheckedAll(e.target.checked)}
              checked={checkedList.length === cartList.length && cartList.length > 0}
            />
            <S.SelectText>전체 선택</S.SelectText>
            <S.SelectText>
              {checkedList.length}/{cartList.length}
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

      {cartList.length > 0 && productInfo ? (
        <S.ProductList>
          {cartList.map((productInfo) => (
            <ProductSelectItem
              key={productInfo.productId}
              productInfo={productInfo}
              isChecked={checkedList.includes(productInfo.productId)}
              onCheck={(e: React.ChangeEvent<HTMLInputElement>) =>
                onCheckedElement((e.target as HTMLInputElement).checked, productInfo.productId)
              }
              onQuantityChange={handleQuantityChange}
            />
          ))}
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
