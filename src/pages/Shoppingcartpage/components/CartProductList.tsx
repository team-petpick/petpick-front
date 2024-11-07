import ProductSelectItem from './ProductSelectItem';
import * as S from '../styles/ProductSelection.style';
import { useCartStore } from '@store/cart';

interface CartProductListProps {
  deleteModal: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void };
}

const CartProductList = ({ deleteModal }: CartProductListProps) => {
  const { cartItems } = useCartStore();
  return (
    <S.ProductList>
      {cartItems.map((productInfo) => (
        <ProductSelectItem
          deleteModal={deleteModal}
          key={productInfo.productId}
          productInfo={productInfo}
          isChecked={productInfo.isChecked}
        />
      ))}
    </S.ProductList>
  );
};

export default CartProductList;
