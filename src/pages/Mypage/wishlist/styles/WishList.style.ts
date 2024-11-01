import styled from 'styled-components';
import { TextStyles } from '@styles/textStyles';
import { PETPICK_COLORS } from '@styles/colors';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 745px;
  min-width: fit-content;
  border-radius: 8px;
  border: 1px solid ${PETPICK_COLORS.GRAY[200]};
`;
export const ContentWrapper = styled.div`
  max-width: 718px;
  width: 100%;
  padding: 0 24px;
`;
export const Header = styled.div`
  width: 100%;
  padding: 25px 0;
  ${TextStyles.subTitle.largeSB};
  border-bottom: 1px solid ${PETPICK_COLORS.GRAY[300]};
`;
export const CountWrapper = styled.div`
  ${TextStyles.subText.smallM};
  color: ${PETPICK_COLORS.GRAY[900]};
  padding: 7px 0;
  margin-top: 11px;
`;
export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  padding: 22px 0;
`;
export const ProductItem = styled.div`
  display: flex;
`;
