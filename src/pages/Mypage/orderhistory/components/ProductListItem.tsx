import { IOrderDetail } from '@types';
import * as S from '../styles/ProductListItem.style';
import { addCommaToPrice } from '@utils/addCommaToPrice';
// import { useState } from 'react';

interface IOrderProps {
  productInfo: IOrderDetail;
  onOpenModal: () => void;
}
const ProductListItem = ({ productInfo, onOpenModal }: IOrderProps) => {
  // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const formattedOriginalPrice = addCommaToPrice(productInfo.orderDetailPrice);
  const formattedSalePrice = addCommaToPrice(
    productInfo.orderDetailPrice * (1 - productInfo.productSale / 100),
  );
  // const openModal = () => {
  //   setIsModalOpen(true);
  // };
  return (
    <S.Wrapper>
      <S.ProductImage src={productInfo.productThumbnail} />
      <S.Container>
        <S.DescriptionWrapper>
          <S.SellerName>{productInfo.sellerStoreName}</S.SellerName>
          <S.ProductName>{productInfo.productName}</S.ProductName>
          <S.PriceWrapper>
            <S.ProductSalePrice>{formattedSalePrice}원</S.ProductSalePrice>
            <S.ProductOriginalPrice>{formattedOriginalPrice}원</S.ProductOriginalPrice>
          </S.PriceWrapper>
        </S.DescriptionWrapper>
        <S.ButtonWrapper>
          <S.CancelButton onClick={onOpenModal}>주문 취소</S.CancelButton>
        </S.ButtonWrapper>
      </S.Container>
    </S.Wrapper>
  );
};
export default ProductListItem;
