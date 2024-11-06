import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem {
  productId: number;
  productName: string;
  productPrice: number;
  productSale: number;
  productThumbnail: string;
  cartCnt: number;
  sellerName: string;
  selectedItems: number[];
  isChecked: boolean;
}

interface CartStore {
  calculateTotalPrice: any;
  totalPrice: number;
  originalTotalPrice: number; // 할인 적용 전 총 가격
  checkedTotalPrice: number;
  setCheckedTotalPrice: (price: number) => void;
  cartItems: CartItem[];
  addCartItem: (item: CartItem) => void;
  setCartItems: (items: CartItem[]) => void;
  removeCartItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  userAddress: string;
  setUserAddress: (userAddress: string) => void;
  getCartItems: () => CartItem[];
  calculateCheckedTotalPrice: () => void;
  checkedList: number[];
  setCheckedList: (list: number[]) => void;
  toggleChecked: (productId: number) => void; // 상품 체크/해제
}

export const useCartStore = create(
  persist<CartStore>(
    (set, get) => ({
      cartItems: [],
      totalPrice: 0,
      originalTotalPrice: 0,
      userAddress: '배송지를 입력해주세요',
      checkedTotalPrice: 0,
      checkedList: [],
      setCheckedList: (list: any) => set(() => ({ checkedList: list })),

      setCheckedTotalPrice: (price: any) => set({ checkedTotalPrice: price }),

      getCartItems: () => get().cartItems,
      // 장바구니에 항목 추가
      addCartItem: (item) =>
        set((state) => ({
          cartItems: [...state.cartItems, item],
        })),

      // 장바구니 새로 넣어주기
      setCartItems: (items: CartItem[]) =>
        set(() => ({
          cartItems: items,
        })),

      // 장바구니에서 항목 제거
      removeCartItem: (productId) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.productId !== productId),
        })),

      // 수량 업데이트
      updateQuantity: (productId, quantity) => {
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.productId === productId ? { ...item, cartCnt: quantity } : item,
          ),
        }));
        get().calculateTotalPrice();
      },
      // 총 가격 계산
      calculateTotalPrice: () =>
        set((state) => {
          const totalPrice = state.cartItems.reduce(
            (total, item) =>
              total + item.productPrice * (1 - item.productSale / 100) * item.cartCnt,
            0,
          );

          const originalTotalPrice = state.cartItems.reduce(
            (total, item) => total + item.productPrice * item.cartCnt,
            0,
          );

          return { ...state, totalPrice, originalTotalPrice };
        }),

      // 체크된 상품 리스트 업데이트
      toggleChecked: (productId) => {
        const { checkedList } = get();
        const newCheckedList = checkedList.includes(productId)
          ? checkedList.filter((id) => id !== productId)
          : [...checkedList, productId];
        set({ checkedList: newCheckedList });
        get().calculateTotalPrice();
      },
      // 체크된 항목의 총 금액을 계산하여 저장
      calculateCheckedTotalPrice: () => {
        const { cartItems, checkedList } = get();
        const checkedTotal = cartItems
          .filter((item) => item.isChecked)
          .reduce(
            (total, item) =>
              total + item.productPrice * (1 - item.productSale / 100) * item.cartCnt,
            0,
          );
        set({ checkedTotalPrice: checkedTotal });
      },

      setUserAddress: (userAddress: string) =>
        set(() => ({
          userAddress: userAddress,
        })),
    }),
    {
      name: 'cartStorage',
    },
  ),
);
