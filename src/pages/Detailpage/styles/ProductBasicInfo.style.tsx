import styled from 'styled-components';
import { TextStyles } from '@styles/textStyles';

export const ProductTitle = styled.h1`
  width: 500px;
  ${TextStyles.bigTitle.xxlargeSB}
  color: rgb(51, 51, 51);
  margin: 0px 20px 0px 0px;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
  padding-top: 20px;
  font-weight: bold;
  line-height: 30px;
`;

export const DiscountText = styled.span`
  padding-right: 9px;
  color: rgb(250, 98, 47);
  font-size: 28px;
`;

export const DiscountPrice = styled.span`
  padding-right: 4px;
  font-size: 28px;
  color: rgb(51, 51, 51);
`;

export const RegularPrice = styled.span`
  font-size: 16px;
  color: rgb(181, 181, 181);
  letter-spacing: -0.5px;
  text-decoration: line-through;
  margin-right: 1px;
`;
export const PriceText = styled.span`
  font-size: 18px;
  color: rgb(51, 51, 51);
`;
export const PriceBox = styled.div`
  margin: 8px 0 40px;
`;
