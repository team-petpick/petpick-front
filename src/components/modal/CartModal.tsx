import ReactModal from 'react-modal';
import * as S from './CartModal.style';
import { Minus, Plus } from '@assets/svg/index';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@constants/ROUTE';
import { IProductInfo } from '@types';
import { postCartItem } from '@apis/cart';
import { addCommaToPrice } from '@utils/addCommaToPrice';
import { useUserStore } from '@store/userStore';
import { useState } from 'react';

interface ICartModalProps {
  isOpen: boolean;
  onRequestClose: (event: React.MouseEvent | React.KeyboardEvent) => void;
  productInfo: IProductInfo;
}
const CartModal = ({ isOpen, onRequestClose, productInfo }: ICartModalProps) => {
  const navigate = useNavigate();
  const { userInfo } = useUserStore();
  const userId = userInfo.userId;
  const [productCount, setProductCount] = useState(1);

  const handleCartButtonClick = async () => {
    console.log('clicekd');
    console.log(userId);
    if (!userId) {
      alert('로그인 해주세요');
      navigate('/login');
      return;
    }
    await fetchPostCartItem();
    // setCartItems(await getCartItem());
    const url = ROUTE.SHOPPINGCART.replace(':userId', userId.toString());
    navigate(url);
  };

  const fetchPostCartItem = async () => {
    try {
      const response = await postCartItem(productInfo.productId, productCount);
      if (response === 'Successfully added cart item') {
        alert('장바구니에 담겼습니다.');
      }
    } catch (error) {
      alert('장바구니에 담는데 실패했습니다.');
      console.error(error);
    }
  };

  const handlePlusClick = () => {
    setProductCount(productCount + 1);
  };
  const handleMinusClick = () => {
    setProductCount(productCount - 1);
  };
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      ariaHideApp={false} // 접근성 관련 설정
    >
      <S.ModalContainer>
        <S.ProductInfo>
          <S.ProductImage>
            <img src={productInfo.productThumbnail} />
          </S.ProductImage>
          <S.ProductTitle>
            [{productInfo.seller.sellerStoreName}] {productInfo.productName}
          </S.ProductTitle>
        </S.ProductInfo>
        <S.ProductPriceContainer>
          <S.ProductPriceWrapper>
            <S.ProductTitleText>{productInfo.productName}</S.ProductTitleText>
            <S.PriceCountContainer>
              <S.ProductPrice>
                <S.DiscountPrice>
                  {addCommaToPrice(productInfo.productPrice * (1 - productInfo.productSale / 100))}
                  원
                </S.DiscountPrice>
                <S.FixedPrice>{addCommaToPrice(productInfo.productPrice)}원</S.FixedPrice>
              </S.ProductPrice>
              <S.ProductCountContainer>
                <S.ProductCountButton onClick={handleMinusClick}>
                  <Minus width="20px" height="20px" />
                </S.ProductCountButton>
                <S.ProductCount>{productCount}</S.ProductCount>
                <S.ProductCountButton onClick={handlePlusClick}>
                  <Plus width="20px" height="20px" />
                </S.ProductCountButton>
              </S.ProductCountContainer>
            </S.PriceCountContainer>
          </S.ProductPriceWrapper>
        </S.ProductPriceContainer>
        <S.TotalPriceContainer>
          <S.TotalPriceText>합계</S.TotalPriceText>
          <S.TotalPrice>
            {addCommaToPrice(
              productInfo.productPrice * (1 - productInfo.productSale / 100) * productCount,
            )}
            <S.TotalWon>원</S.TotalWon>
          </S.TotalPrice>
        </S.TotalPriceContainer>
        <S.ButtonContainer>
          <S.CloseButton onClick={onRequestClose}>취소</S.CloseButton>
          <S.CartButton onClick={handleCartButtonClick}>장바구니 담기</S.CartButton>
        </S.ButtonContainer>
      </S.ModalContainer>
    </ReactModal>
  );
};

export default CartModal;
// 모달 스타일 설정
const customStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'translate(-50%, -50%)', // 모달을 중앙에 위치
    width: '440px',
    height: 'fit-content',
    padding: '0',
    border: 'none',
    borderRadius: '12px',
    background: '#fff',
    minHeight: '330px',
    overflow: 'auto',
  },
};
