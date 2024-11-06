import { Alert } from '@assets/svg';
import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import styled from 'styled-components';

const EmptyCart = () => {
  return (
    <Wrapper>
      <Alert width="64px" height="64px" />
      <Text>장바구니에 담긴 상품이 없습니다.</Text>
    </Wrapper>
  );
};

export default EmptyCart;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  pointer-events: none;
  margin-top: 160px;
`;
const Text = styled.div`
  margin-top: 16px;
  color: ${PETPICK_COLORS.GRAY[800]};
  ${TextStyles.subTitle.largeSB};
`;
