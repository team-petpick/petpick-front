import ReactModal from 'react-modal';
import styled from 'styled-components';
import { Minus, Plus } from '@assets/svg/index';

import Test3 from '@assets/svg/test-3.jpg';
import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';

const BasicModal = ({ isOpen, onRequestClose, children }) => {
  // 모달 스타일 설정
  const customStyles = {
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
      height: 'auto',
      padding: '0',
      border: 'none',
      borderRadius: '12px',
      background: '#fff',
      // maxHeight: '90vh',
      minHeight: '330px',
      overflow: 'auto',
    },
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      ariaHideApp={false} // 접근성 관련 설정
    >
      <ModalContainer>
        {children}
        <ProductInfo>
          <ProductImage>
            <img src={Test3} />
          </ProductImage>
          <ProductTitle>[가게명] 상품명</ProductTitle>
        </ProductInfo>
        <ProductPriceContainer>
          <ProductPriceWrapper>
            <ProductTitleText>[삼도갈비] 마늘 양념 소갈비살 260g</ProductTitleText>
            <PriceCountContainer>
              <ProductPrice>
                <DiscountPrice>13,940원</DiscountPrice>
                <FixedPrice>14,990원</FixedPrice>
              </ProductPrice>
              <ProductCountContainer>
                <ProductCountButton>
                  <Minus width="20px" height="20px" />
                </ProductCountButton>
                <ProductCount>5</ProductCount>
                <ProductCountButton>
                  <Plus width="20px" height="20px" />
                </ProductCountButton>
              </ProductCountContainer>
            </PriceCountContainer>
          </ProductPriceWrapper>
        </ProductPriceContainer>
        <TotalPriceContainer>
          <TotalPriceText>합계</TotalPriceText>
          <TotalPrice>
            10,900<TotalWon>원</TotalWon>
          </TotalPrice>
        </TotalPriceContainer>
        <ButtonContainer>
          <CloseButton onClick={onRequestClose}>취소</CloseButton>
          <CartButton>장바구니 담기</CartButton>
        </ButtonContainer>
      </ModalContainer>
    </ReactModal>
  );
};

export default BasicModal;
const FixedPrice = styled.span`
  margin-left: 4px;
  font-weight: normal;
  font-size: 12px;
  color: rgb(181, 181, 181);
  text-decoration: line-through;
  line-height: 16px;
  letter-spacing: -0.5px;
`;
const DiscountPrice = styled.span`
  ${TextStyles.subText.smallSB};
`;
const TotalWon = styled.span`
  margin-left: 3px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  vertical-align: 3px;
`;
const TotalPrice = styled.span`
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
`;
const TotalPriceText = styled.span`
  ${TextStyles.body.mediumM};
`;
const TotalPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 0 23px;
  width: 100%;
`;
const PriceCountContainer = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: space-between;
  padding-top: 5px;
`;
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
  width: 88px;
  height: 30px;
  background: ${PETPICK_COLORS.GRAY[0]};
  border: 1px solid ${PETPICK_COLORS.GRAY[200]};
  border-radius: 3px;
`;
const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5px;
`;
const ProductTitleText = styled.h1`
  width: 100%;
  display: flex;
  font-size: 14px;
  line-height: 19px;
  color: ${PETPICK_COLORS.GRAY[800]};
  overflow: hidden;
  white-space: normal;
`;
const ProductPriceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px 0px;
  border-radius: 3px;
  border-bottom: 1px solid rgb(244, 244, 244);
`;
const ProductPriceContainer = styled.div`
  overflow: hidden auto;
  max-height: 355px;
  width: 100%;
`;
const ProductTitle = styled.div`
  display: flex;
  height: 50px;
  margin-top: 2px;
  word-break: break-all;
`;
const ProductImage = styled.div`
  flex: 0 0 50px;
  overflow: hidden;
  position: relative;
  height: 50px;
  margin-right: 14px;
  border-radius: 3px;
`;
const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  padding: 5px 0px 12px;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid rgb(244, 244, 244);
`;
const CartButton = styled.button`
  padding: 0px 10px;
  margin-left: 4px;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 56px;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: ${PETPICK_COLORS.BLUE[300]};
  ${TextStyles.body.mediumM};
  border: 0px none;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0px 4px;
`;
const ModalContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CloseButton = styled.button`
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 56px;
  border-radius: 3px;
  color: ${PETPICK_COLORS.GRAY[800]};
  background-color: ${PETPICK_COLORS.GRAY[0]};
  ${TextStyles.body.mediumM};
  border: 1px solid ${PETPICK_COLORS.GRAY[200]};
`;
