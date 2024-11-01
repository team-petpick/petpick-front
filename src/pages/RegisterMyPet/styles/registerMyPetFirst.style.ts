import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import styled from 'styled-components';

export const FirstComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  ${TextStyles.bigTitle.xxlargeR};
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-bottom: 32px;
  padding-left: 16px;
`;

export const RequiredMark = styled.span`
  color: ${PETPICK_COLORS.RED[200]};
  margin-left: 8px;
`;

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  flex-wrap: wrap;
  margin-bottom: 162px;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: 150px;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

export const SelectMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
`;

export const RadioButton = styled.input`
  accent-color: ${PETPICK_COLORS.BLUE[300]};
  width: 20px;
  height: 20px;
  color: ${PETPICK_COLORS.BLUE[300]};
  border: 2px solid ${PETPICK_COLORS.BLUE[300]};
`;

export const Label = styled.label`
  ${TextStyles.subTitle.largeR};
  color: ${PETPICK_COLORS.GRAY[900]};
  cursor: pointer;
  &:hover {
    color: ${PETPICK_COLORS.GRAY[800]};
  }
  input[type='radio']:checked + & {
    color: ${PETPICK_COLORS.GRAY[900]};
    ${TextStyles.subTitle.largeSB};
  }
`;
