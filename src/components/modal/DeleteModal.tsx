import { PETPICK_COLORS } from '@styles/colors';
import BasicModal from './BasicModal';
import styled from 'styled-components';
import { TextStyles } from '@styles/textStyles';
import { useCartStore } from '@store/cart';
import { deleteCartItem, getCartItem } from '@apis/cart';
import { useEffect } from 'react';
interface IStyleProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?: string;
  margin?: string;
  padding?: string;
  gap?: string;
}
interface DeleteModalProps {
  message: string;
  confirmText: string;
  cancelText: string;
  onConfirm: () => void;
  imageSrc?: boolean;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
export default function DeleteModal({
  message,
  confirmText,
  cancelText,
  isOpen,
  setIsOpen,
}: DeleteModalProps) {
  const { cartItems, setCartItems, deleteModalProductId, setDeleteModalProductId } = useCartStore();

  // 장바구니 항목을 가져오는 함수
  const fetchGetCartItem = async () => {
    const response = await getCartItem();
    setCartItems(response);
  };

  useEffect(() => {
    fetchGetCartItem();
  }, []);

  const handleDelete = async () => {
    const isAllChecked = cartItems.every((item) => item.isChecked);

    try {
      if (deleteModalProductId) {
        await deleteCartItem(deleteModalProductId);
      } else if (isAllChecked) {
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
      fetchGetCartItem();
      setIsOpen(false);
      setDeleteModalProductId(null);
      alert('삭제되었습니다.');
    } catch (error) {
      console.log('장바구니 DELETE api 호출 실패', error);
    }
  };

  return (
    <BasicModal isOpen={isOpen} setIsOpen={setIsOpen} width="280px" height="fit-content">
      <Block.FlexBox direction="column">
        <Text padding="10px 0 0 8px">{message}</Text>
        <Block.FlexBox justifyContent="center" margin="20px 0 0" gap="7px">
          <CloseButton onClick={() => setIsOpen(false)}>
            <Text> {cancelText}</Text>
          </CloseButton>
          <CartButton onClick={handleDelete}>
            <Text>{confirmText}</Text>
          </CartButton>
        </Block.FlexBox>
      </Block.FlexBox>
    </BasicModal>
  );
}

const Block = {
  FlexBox: styled.div<IStyleProps>`
    width: 100%;
    display: flex;
    flex-direction: ${(props) => (props.direction ? props.direction : 'none')};
    align-items: center;
    justify-content: ${(props) => props.justifyContent};
    margin: ${(props) => props.margin};
    gap: ${(props) => (props.gap ? props.gap : 'none')};
  `,
};
const Text = styled.div<IStyleProps>`
  white-space: pre-line;
  overflow-y: auto;
  padding: ${(props) => (props.padding ? props.padding : 'none')};
`;

const CloseButton = styled.button`
  box-sizing: border-box;

  width: 100%;
  height: 48px;
  border-radius: 3px;
  color: ${PETPICK_COLORS.GRAY[800]};
  background-color: ${PETPICK_COLORS.GRAY[0]};
  ${TextStyles.body.mediumM};
  border: 1px solid ${PETPICK_COLORS.GRAY[200]};
`;
const CartButton = styled.button`
  box-sizing: border-box;
  /* flex: 1;

  display: flex;
  align-items: center;
  justify-content: center; */
  /* overflow: hidden; */
  width: 100%;
  height: 48px;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: ${PETPICK_COLORS.BLUE[300]};
  ${TextStyles.body.mediumM};
  border: 0px none;
`;
