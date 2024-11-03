import ReactModal, { Styles } from 'react-modal';
import * as S from './DeleteModal.style';
import { Minus, Plus } from '@assets/svg/index';
import Test3 from '@assets/svg/test-3.jpg';

interface IBasicModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const BasicModal = ({ isOpen, onRequestClose }: IBasicModalProps) => {
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
            <img src={Test3} />
          </S.ProductImage>
          <S.ProductTitle>[가게명] 상품명</S.ProductTitle>
        </S.ProductInfo>
        <S.ProductPriceContainer>
          <S.ProductPriceWrapper>
            <S.ProductTitleText>[삼도갈비] 마늘 양념 소갈비살 260g</S.ProductTitleText>
            <S.PriceCountContainer>
              <S.ProductPrice>
                <S.DiscountPrice>13,940원</S.DiscountPrice>
                <S.FixedPrice>14,990원</S.FixedPrice>
              </S.ProductPrice>
              <S.ProductCountContainer>
                <S.ProductCountButton>
                  <Minus width="20px" height="20px" />
                </S.ProductCountButton>
                <S.ProductCount>5</S.ProductCount>
                <S.ProductCountButton>
                  <Plus width="20px" height="20px" />
                </S.ProductCountButton>
              </S.ProductCountContainer>
            </S.PriceCountContainer>
          </S.ProductPriceWrapper>
        </S.ProductPriceContainer>
        <S.TotalPriceContainer>
          <S.TotalPriceText>합계</S.TotalPriceText>
          <S.TotalPrice>
            10,900<S.TotalWon>원</S.TotalWon>
          </S.TotalPrice>
        </S.TotalPriceContainer>
        <S.ButtonContainer>
          <S.CloseButton onClick={onRequestClose}>취소</S.CloseButton>
          <S.CartButton>장바구니 담기</S.CartButton>
        </S.ButtonContainer>
      </S.ModalContainer>
    </ReactModal>
  );
};

export default BasicModal;

// 모달 스타일 설정
const customStyles: Styles = {
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
