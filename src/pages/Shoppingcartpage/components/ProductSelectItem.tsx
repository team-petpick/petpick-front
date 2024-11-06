import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import { Delete } from '@assets/svg';
import { Minus, Plus } from '@assets/svg/index';
import styled from 'styled-components';
import CheckboxLabal from './CheckboxLabal';
import { ChangeEvent, useEffect, useState } from 'react';
import { ICartProps } from '@types';
import { addCommaToPrice } from '@utils/addCommaToPrice';
import instance from '@apis';
// import { postCartItem } from '@apis/cart';
interface IProductSelectItemProps {
  productInfo: ICartProps;
  isChecked: boolean;
  onCheck: (e: ChangeEvent<HTMLInputElement>) => void;
  onQuantityChange: (productId: number, newQuantity: number) => void;
}
const ProductSelectItem: React.FC<IProductSelectItemProps> = ({
  productInfo,
  isChecked,
  onCheck,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState(productInfo.cartCnt);

  const cartInfoDatoFromLocalStorage = localStorage.getItem('cartInfo');

  const parsedCartData = JSON.parse(cartInfoDatoFromLocalStorage || '');
  const currentCartData = parsedCartData.filter(
    (info: any) => info.productId === productInfo.productId,
  )[0];

  useEffect(() => {
    const newCartData = {
      ...currentCartData,
      cartCnt: quantity,
    };

    const final = parsedCartData.map((d: any) =>
      d.productId === productInfo.productId ? newCartData : d,
    );

    console.log('final', final);
    localStorage.setItem('cartInfo', JSON.stringify(final));
  }, [quantity]);

  const patchCartInfo = async (modifiedCartInfo: any) => {
    try {
      const res = await instance.patch(
        '/cart',
        {
          ...modifiedCartInfo,
        },
        {
          headers: {
            Authorization: localStorage.getItem('accessToken'),
          },
        },
      );
      console.log('수정 API 결과', res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const handleBeforeUnload = (event: any) => {
      const cartInfoDatoFromLocalStorage = localStorage.getItem('cartInfo');
      const parsedInfo = JSON.parse(cartInfoDatoFromLocalStorage || '');

      parsedInfo?.forEach(async (element: any) => {
        await patchCartInfo(element);
      });
      console.log('새로고침 또는 페이지 이동이 감지되었습니다.');
      event.preventDefault();

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
    onQuantityChange(productInfo.productId, newQuantity);
  };

  // 상품 수량 -
  const handleDecreaseClick = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(productInfo.productId, newQuantity);
    }
  };

  return (
    <ProductItem>
      <SelectWrapper>
        <SelectBox>
          <CheckboxLabal text="text" checked={isChecked} onChange={onCheck} />
          <SelectText> {productInfo.productName} </SelectText>
        </SelectBox>
        <SelectButton>
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
