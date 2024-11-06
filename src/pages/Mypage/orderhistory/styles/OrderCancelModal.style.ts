import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  max-width: 747px;
  height: 350px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid ${PETPICK_COLORS.GRAY[400]};
  border-radius: 8px;
  background: #fff;
  z-index: 999;
  padding: 39px;
  box-sizing: border-box;
`;
export const Header = styled.div`
  ${TextStyles.subTitle.largeSB};
  color: ${PETPICK_COLORS.GRAY[800]};
  padding: 0 0 25px 0;
`;
export const Body = styled.div``;
export const TextArea = styled.textarea`
  ${TextStyles.body.mediumR};
  width: 100%;
  height: 150px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  transition: border-color 0.3s;
  &:focus {
    border-color: ${PETPICK_COLORS.BLUE[200]};
    outline: none;
    background-color: #fff;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 10px;
  padding: 25px 0;
`;
export const SubmitButton = styled.div<{ disabled: boolean }>`
  ${TextStyles.body.mediumR};
  width: 150px;
  color: #fff;
  border-radius: 12px;
  text-align: center;
  padding: 4px 8px;

  background: ${({ disabled }) => (disabled ? PETPICK_COLORS.GRAY[400] : PETPICK_COLORS.BLUE[300])};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background: ${({ disabled }) =>
      disabled ? PETPICK_COLORS.GRAY[400] : PETPICK_COLORS.BLUE[400]};
  }
`;
export const CloseButton = styled.div`
  ${TextStyles.body.mediumR};
  width: 150px;
  background: ${PETPICK_COLORS.BLUE[300]};
  color: #fff;
  &:hover {
    background: ${PETPICK_COLORS.BLUE[400]};
    cursor: pointer;
  }
  border-radius: 12px;
  text-align: center;
  padding: 4px 8px;
`;
