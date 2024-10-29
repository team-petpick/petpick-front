import styled from 'styled-components';
import { PETPICK_COLORS } from '@constants/colors';
import { TextStyles } from '@styles/textStyles';

export const Wrapper = styled.div`
  max-width: 745px;
  width: 100%;
  height: 145px;
  margin: 0 auto;
  border-radius: 8px;
  border: 1px solid ${PETPICK_COLORS.GRAY[400]};
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  padding: 0 14px;
`;
export const TitleWrapper = styled.div`
  ${TextStyles.subTitle.largeSB};
  height: 75px;
  display: flex;
  align-items: center;
  padding-left: 25px;
`;
export const ButtonWrapper = styled.div`
  height: 40px;
  display: flex;
  gap: 24px;
  padding: 0 22px;
`;
export const Button = styled.div`
  ${TextStyles.body.mediumR};
  width: 150px;
  border-radius: 20px;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  &:first-child {
    background: ${PETPICK_COLORS.BLUE[300]};
    color: #fff;
  }
  &:hover {
    cursor: pointer;
    background: ${PETPICK_COLORS.BLUE[300]};
    color: #fff;
  }
`;
