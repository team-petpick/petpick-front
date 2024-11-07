import ProductSelectItem from './ProductSelectItem';
import * as S from '../styles/ProductSelection.style';
import { useCartStore } from '@store/cart';

const CartProductList = () => {
  const { cartItems } = useCartStore();
  return (
    <S.ProductList>
      {cartItems.map((productInfo) => (
        <ProductSelectItem
          key={productInfo.productId}
          productInfo={productInfo}
          isChecked={productInfo.isChecked}
        />
      ))}
    </S.ProductList>
  );
};

export default CartProductList;
