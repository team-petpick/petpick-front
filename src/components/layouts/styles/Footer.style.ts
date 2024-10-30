import styled from 'styled-components';
import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '../../../styles/textStyles';

export const CompanyInfo = styled.div`
  color: ${PETPICK_COLORS.GRAY[700]};
  font-size: 12px;
  font-weight: 400;
`;
export const MenuList = styled.ul`
  display: flex;
  padding-bottom: 29px;
  gap: 14px;
  font-size: 14px;
  line-height: 18px;
  color: ${PETPICK_COLORS.GRAY[700]};
`;
export const FooterLayout = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 0;
  border-top: 1px solid ${PETPICK_COLORS.GRAY[400]};
`;
export const FooterContainer = styled.div`
  width: 69.44vw;
  display: flex;
  flex-direction: column;
`;
export const FooterHeader = styled.header`
  width: 100%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
`;
export const FooterBody = styled.body`
  width: 100%;
  display: flex;
  align-self: center;
  /* justify-content: space-between; */
  gap: 30px;
  padding: 26px 33px;
  border-top: 1px solid ${PETPICK_COLORS.GRAY[400]};
`;
export const ButtonImage = styled.img`
  height: 34px;
`;
export const BodyButton = styled.button`
  display: flex;
  text-align: left;
  gap: 10px;
  color: ${PETPICK_COLORS.GRAY[600]};
  ${TextStyles.caption.xsmallR}
`;
export const CopyrightInfo = styled.div`
  width: 100%;
  background: #f6f6f6;
  display: flex;
  flex-direction: column;
  padding: 20px 0px 30px;
  text-align: center;
  color: ${PETPICK_COLORS.GRAY[600]};
  ${TextStyles.caption.xsmallR}
  line-height: 15px;
`;
