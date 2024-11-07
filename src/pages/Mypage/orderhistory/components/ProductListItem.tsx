import { IOrderDetail } from '@types';
import * as S from '../styles/ProductListItem.style';
import { addCommaToPrice } from '@utils/addCommaToPrice';

interface IOrderProps {
  productInfo: IOrderDetail;
  onOpenModal: () => void;
  isCancelable: boolean;
}
const ProductListItem = ({ productInfo, onOpenModal, isCancelable }: IOrderProps) => {
  const formattedOriginalPrice = addCommaToPrice(productInfo.orderDetailPrice);
  const formattedSalePrice = addCommaToPrice(
    productInfo.orderDetailPrice * (1 - productInfo.productSale / 100),
  );
  return (
    <S.Wrapper>
      <S.ProductImage src={productInfo.productThumbnail} />
      <S.Container>
        <S.DescriptionWrapper>
          <S.SellerName>{productInfo.sellerStoreName}</S.SellerName>
          <S.InformationWrapper>
            <S.ProductName>{productInfo.productName}</S.ProductName>
            <S.ProductCnt>{productInfo.orderDetailCnt}개</S.ProductCnt>
          </S.InformationWrapper>
          <S.PriceWrapper>
            <S.ProductSalePrice>{formattedSalePrice}원</S.ProductSalePrice>
            {formattedSalePrice !== formattedOriginalPrice ? (
              <S.ProductOriginalPrice>{formattedOriginalPrice}원</S.ProductOriginalPrice>
            ) : null}
          </S.PriceWrapper>
        </S.DescriptionWrapper>
        <S.ButtonWrapper>
          {isCancelable ? <S.CancelButton onClick={onOpenModal}>주문 취소</S.CancelButton> : null}
        </S.ButtonWrapper>
      </S.Container>
    </S.Wrapper>
  );
};
export default ProductListItem;
