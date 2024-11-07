import { PETPICK_COLORS } from '@styles/colors';
import styled from 'styled-components';

export const PaymentSuccessPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
`;

export const OrderedProductWrapper = styled.div`
  width: 60vw;
  height: 50px;
  border-bottom: 1px solid ${PETPICK_COLORS.GRAY[900]};
  border-top: 1px solid ${PETPICK_COLORS.GRAY[900]};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
`;

export const OrderedProductMenuText = styled.div`
  font-weight: bold;
  color: ${PETPICK_COLORS.GRAY[900]};
  padding: 10px;
  box-sizing: border-box;
`;

export const OrderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1000px;
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Table = styled.div`
  width: 100%;
  border-top: 2px solid #333;
`;

export const TableRow = styled.div`
  display: flex;
  padding: 15px 0;
  align-items: center;
  border-bottom: 1px solid #ddd;
  gap: 20px;
`;

export const TableHeader = styled(TableRow)`
  font-weight: bold;
  border-bottom: 2px solid #333;
  gap: 20px;
`;

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  background-color: #e0e0e0;
  margin-right: 15px;
`;

export const ProductInfo = styled.div`
  flex: 1;
`;

export const ProductTitle = styled.p`
  font-size: 0.9rem;
  color: #888;
  margin: 0;
`;

export const ProductName = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin: 5px 0 0;
`;

export const Price = styled.div`
  width: 80px;
  text-align: center;
  font-size: 1rem;
`;

export const Discount = styled.div`
  width: 80px;
  text-align: center;
  font-size: 1rem;
`;

export const TotalPrice = styled.div`
  width: 80px;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
`;
