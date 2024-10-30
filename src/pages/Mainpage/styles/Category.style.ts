import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 74px;
`;
export const AnimalTypeWrapper = styled.div`
  max-width: 1050px;
  width: 100%;
  height: auto;
  display: flex;
  gap: 38px;
`;
export const AnimalTypeButton = styled.div<{ isActive: boolean }>`
  width: 88px;
  height: 40px;
  border-radius: 22px;
  display: flex;
  gap: 5px;
  justify-content: center;
  cursor: pointer;
  background: ${({ isActive }) => (isActive ? PETPICK_COLORS.BLUE[300] : PETPICK_COLORS.GRAY[200])};
  color: ${({ isActive }) => (isActive ? '#fff' : '#000')};
  &:hover {
    background: ${PETPICK_COLORS.BLUE[300]};
    color: #fff;
  }
`;
export const AnimalTypeIcon = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AnimalTypeText = styled.div`
  ${TextStyles.body.mediumM}
  display: flex;
  align-items: center;
`;
export const CategoryWrapper = styled.div`
  max-width: 1050px;
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 1px solid ${PETPICK_COLORS.GRAY[300]};
  background: rgba(217, 217, 217, 0);
  gap: 38px;
`;
export const CategoryButton = styled.div`
  width: 88px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
export const CategoryText = styled.div<{ isActive: boolean }>`
  ${TextStyles.body.mediumM}
  display: flex;
  align-items: center;
  color: ${({ isActive }) => (isActive ? PETPICK_COLORS.BLUE[300] : PETPICK_COLORS.GRAY[800])};
  &:hover {
    font-weight: 700;
    color: ${PETPICK_COLORS.BLUE[300]};
  }
`;
