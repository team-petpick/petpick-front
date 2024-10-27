import Layout from '@layout/Layout';
import { TextStyles } from '@styles/textStyles';
import styled from 'styled-components';
import ProductSelection from './components/ProductSelection';
import OrderInfo from './components/OrderSummary';

const ShoppingCartPage = () => {
  return (
    <Layout>
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
  flex-direction: row;
  border: 1px solid red;
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
