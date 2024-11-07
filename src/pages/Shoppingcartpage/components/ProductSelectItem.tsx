import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import { Delete } from '@assets/svg';
import { Minus, Plus } from '@assets/svg/index';
import styled from 'styled-components';
import CheckboxLabal from './CheckboxLabal';
import { useEffect, useState } from 'react';
import { ICartProps } from '@types';
import { addCommaToPrice } from '@utils/addCommaToPrice';
import { patchCartInfo } from '@apis/cart';
import { ICartItem, useCartStore } from '@store/cart';
import useModal from '@components/modal/useModal';
interface IProductSelectItemProps {
  productInfo: ICartProps;
  isChecked: boolean;
  deleteModal: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void };
}
const ProductSelectItem: React.FC<IProductSelectItemProps> = ({
  productInfo,
  isChecked,
  deleteModal,
}) => {
  const { cartItems, setCartItems, updateQuantity, calculateTotalPrice, setDeleteModalProductId } =
    useCartStore();
  const [quantity, setQuantity] = useState(productInfo.cartCnt);
  const { setIsOpen, openModal } = useModal();

  useEffect(() => {
    const handleBeforeUnload = (event: any) => {
      const patchCartItems = cartItems.map((item) => ({
        productId: item.productId,
        cartCnt: item.cartCnt,
      }));

      event.preventDefault();
      patchCartItems?.forEach(async (element: any) => {
        await patchCartInfo(element);
      });
      console.log('새로고침 또는 페이지 이동이 감지되었습니다.');

      event.returnValue = ''; // 이 설정은 대부분의 브라우저에서 경고 메시지 표시를 위한 기본 설정입니다.
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // 상품 수량 +
  const handleIncreaseClick = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateQuantity(productInfo.productId, newQuantity);
    calculateTotalPrice();
  };

  // 상품 수량 -
  const handleDecreaseClick = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateQuantity(productInfo.productId, newQuantity);
      calculateTotalPrice();
    }
  };

  const handleCheckboxClick = () => {
    const newCartItems = cartItems.map((item: ICartItem) =>
      item.productId === productInfo.productId ? { ...item, isChecked: !isChecked } : item,
    );
    setCartItems(newCartItems);
  };

  const handleDeleteButtonClick = () => {
    console.log(productInfo.productId);
    setDeleteModalProductId(productInfo.productId);
    setIsOpen(true);
    openModal();
    deleteModal.setIsOpen(true);
  };
  return (
    <ProductItem>
      <SelectWrapper>
        <SelectBox>
          <div onClick={handleCheckboxClick}>
            <CheckboxLabal text="text" checked={isChecked} />
          </div>
          <SelectText>
            [{productInfo.sellerName}] {productInfo.productName}{' '}
          </SelectText>
        </SelectBox>
        <SelectButton onClick={handleDeleteButtonClick}>
          <Delete width="20px" height="20px" />
        </SelectButton>
      </SelectWrapper>
      <ProductItemContainer>
        <ProductInfo>
          <ProductImage src={productInfo.productThumbnail}></ProductImage>
          <ProductContainer>
            <ProductPriceContainer>
              <ProductPrice>
                {addCommaToPrice(
                  productInfo.productPrice * (1 - productInfo.productSale / 100) * quantity,
                )}
                원
              </ProductPrice>
              <ProductFixedPrice>
                {addCommaToPrice(productInfo.productPrice * quantity)} 원
              </ProductFixedPrice>
            </ProductPriceContainer>
            <ProductCountContainer>
              <ProductCountButton onClick={handleDecreaseClick}>
                <Minus width="20px" height="20px" />
              </ProductCountButton>
              <ProductCount>{quantity}</ProductCount>
              <ProductCountButton onClick={handleIncreaseClick}>
                <Plus width="20px" height="20px" />
              </ProductCountButton>
            </ProductCountContainer>
          </ProductContainer>
        </ProductInfo>
      </ProductItemContainer>
    </ProductItem>
  );
};

export default ProductSelectItem;
const ProductCount = styled.span`
  text-align: center;
  min-width: 36px;
  margin: 2px 1px 0;
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
`;
const ProductCountButton = styled.button`
  width: 20px;
  height: 20px;
`;
const ProductCountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 36px;
  background: ${PETPICK_COLORS.GRAY[200]};
  border-radius: 20px;
`;
const ProductPrice = styled.span`
  color: ${PETPICK_COLORS.GRAY[800]};
  ${TextStyles.body.mediumB};
`;
const ProductFixedPrice = styled.span`
  text-decoration: line-through;
  margin-left: 4px;
  font-weight: 400;
  font-size: 13px;
  color: ${PETPICK_COLORS.GRAY[400]};
`;
const ProductPriceContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ProductImage = styled.img`
  height: 83px;
  border-radius: 8px;
  margin-right: 16px;
`;
const ProductInfo = styled.div`
  display: flex;
`;
const SelectButton = styled.button`
  display: flex;
  margin-right: 3px;
`;

const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${PETPICK_COLORS.GRAY[0]};
  margin: 16px 0;
  border-radius: 16px;
`;
const SelectText = styled.div`
  margin-left: 6px;
  align-self: center;
`;
const SelectBox = styled.div`
  display: flex;
`;
const ProductItemContainer = styled.li`
  padding: 4px 0px 16px 34px;
`;
const ProductItem = styled.li`
  margin: 0 0 40px;
`;
