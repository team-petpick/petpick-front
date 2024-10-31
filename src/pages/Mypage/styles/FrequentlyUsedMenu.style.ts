import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import styled from 'styled-components';

export const FrequentlyUsedMenuWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 145px;
  border: 1px solid;
  border-color: ${PETPICK_COLORS.GRAY[300]};
  border-radius: 10px;
  margin-top: 36px;
  padding: 10px 0 0 10px;
  flex-direction: column;
  box-sizing: border-box;
`;

export const FrequentlyUsedMenuList = styled.div`
  color: ${PETPICK_COLORS.GRAY[500]};
  ${TextStyles.subText.smallM};
  margin-top: 5px;
  margin-bottom: 3px;
  padding-left: 8px;
`;

export const FrequentlyUsedMenuText = styled.div`
  color: ${PETPICK_COLORS.GRAY[800]};
  ${TextStyles.body.mediumM};
  padding: 15px 0 13px 8px;
`;
