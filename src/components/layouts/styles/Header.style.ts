import styled from 'styled-components';
import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';

export const LoginButtonText = styled.button`
  ${TextStyles.caption.xsmallR}
`;
export const HeaderLayout = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const HeaderContainer = styled.div`
  width: 1050px;
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
`;
export const TextBox = styled.span`
  ${TextStyles.caption.xsmallR}
  color: ${PETPICK_COLORS.GRAY[400]};
`;
export const LoginMenuContainer = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
  align-self: flex-end;
  gap: 12px;
`;
export const ContentContainer = styled.div`
  width: 100%;
  height: 63px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-self: center;
  gap: 26px;
`;
export const SearchContainer = styled.div`
  width: 400px;
  height: 48px;
  padding: 0 10px 0 14px;
  display: flex;
  align-items: center;
  border: 1px solid ${PETPICK_COLORS.BLUE[300]};
  border-radius: 6px;
  ${TextStyles.body.mediumR}
  color: ${PETPICK_COLORS.GRAY[900]};
`;
export const SearchBox = styled.input`
  width: 100%;
  margin-top: 3px;
  outline: none;
  ::placeholder {
    color: ${PETPICK_COLORS.GRAY[600]};
    ${TextStyles.body.mediumR}
  }
`;
export const SearchButton = styled.button`
  padding: 4px 0 0;
`;
