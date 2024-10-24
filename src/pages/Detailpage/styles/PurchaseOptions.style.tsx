import styled from 'styled-components';
import { PETPICK_COLORS } from '@constants/colors';
import { IStyleProps } from '../../../types/style.types';

export const PurchaseContainer = styled.div`
  padding-bottom: 40px;
`;

export const InfoContainer = styled.div`
  border-bottom: 1px solid ${PETPICK_COLORS.GRAY[200]};
`;

export const InfoListItem = styled.li`
  display: flex;
  padding: 17px 0 18px;
  border-top: 1px solid ${PETPICK_COLORS.GRAY[100]};
  font-size: 14px;
`;

export const InfoTitle = styled.dt`
  width: 128px;
  height: 100%;
  line-height: 19px;
  color: ${PETPICK_COLORS.GRAY[500]};
`;

export const InfoText = styled.dd`
  display: flex;
  flex-direction: column;
  color: ${PETPICK_COLORS.GRAY[900]};
  line-height: 19px;
  font-weight: 400;
`;

export const SelectLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 11px 10px 11px 15px;
  font-size: 12px;
  border: 1px solid ${PETPICK_COLORS.GRAY[200]};
  width: 100%;
`;

export const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 4px;
`;

export const IncreaseButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 88px;
  border-radius: 3px;
  border: 1px solid ${PETPICK_COLORS.GRAY[300]};
`;

export const CountText = styled.span`
  display: flex;
  justify-content: center;
  font-size: 14px;
  text-align: center;
  width: 31px;
  height: 28px;
  line-height: 28px;
`;

export const SelectPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 4px;
`;

export const PriceSpan = styled.span<IStyleProps>`
  font-weight: normal;
  font-size: 12px;
  color: ${({ isDiscounted }) =>
    isDiscounted ? PETPICK_COLORS.GRAY[400] : PETPICK_COLORS.GRAY[800]};
  text-decoration: ${({ isThrough }) => (isThrough ? 'line-through' : 'none')};
`;
