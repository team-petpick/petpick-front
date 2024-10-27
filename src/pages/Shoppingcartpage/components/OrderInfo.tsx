import { Map } from '@assets/svg';
import styled from 'styled-components';

const OrderInfo = () => {
  return (
    <Wrapper>
      <ShippingAddress>
        <h3>배송지</h3>
        <Map width="16px" height="16px" />
      </ShippingAddress>
    </Wrapper>
  );
};

export default OrderInfo;
const ShippingAddress = styled.div`
  border: 1px solid red;
`;
const Wrapper = styled.div`
  margin: 0 20px;
  width: 565px;
`;
