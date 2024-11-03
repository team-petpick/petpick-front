import styled from 'styled-components';
import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';

export const MainInfo = styled.main`
  width: 1010px;
`;
export const ProductDescriptionLayout = styled.div`
  padding-top: 40px;
`;

export const DescriptionImageBox = styled.div`
  width: 100%;
`;

export const DescriptionText = styled.p``;

export const InfoNav = styled.nav`
  width: 100%;
  display: flex;
  margin-top: 50px;
  box-shadow: inset 0 -0.5px 0 0 #${PETPICK_COLORS.GRAY[300]};
`;

export const NavList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: 60px;
`;

export const NavListItem = styled.li`
  width: 100%;
  display: flex;
  flex: 1;
  border-width: 1px 0 1px 1px;
  border-color: ${PETPICK_COLORS.GRAY[200]};
  border-style: solid;
  background-color: ${PETPICK_COLORS.GRAY[100]};
`;

export const Anchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  ${TextStyles.body.mediumM}
  color: ${PETPICK_COLORS.GRAY[600]}
`;
export const DetailInfoContainer = styled.div`
  padding-bottom: 100px;
`;
