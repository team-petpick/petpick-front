import Layout from '@layouts/Layout.tsx';
import { TextStyles } from '@styles/textStyles';
import styled from 'styled-components';
import ProductSelection from './components/ProductSelection';
import OrderInfo from './components/OrderInfo.tsx';

const ShoppingCartPage = () => {
  return (
    <Layout footerVisible={false}>
      <CartLayout>
        <CartContainer>
          <CartTitle>Shopping Cart Page</CartTitle>
          <Wrapper>
            <ProductSelection />
            <OrderInfo />
          </Wrapper>
        </CartContainer>
      </CartLayout>
    </Layout>
  );
};

export default ShoppingCartPage;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
const CartTitle = styled.h1`
  padding: 50px 0px 48px;
  text-align: center;
  ${TextStyles.bigTitle.xxlargeSB}
`;
const CartContainer = styled.div`
  width: 1050px;
`;
const CartLayout = styled.div`
  background-color: #f2f5f8;
  display: flex;
  align-items: center;
  justify-content: center;
`;
