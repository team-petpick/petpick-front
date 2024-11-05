import { TextStyles } from '@styles/textStyles';
import styled from 'styled-components';

export const Title = styled.div`
  color: #000;
  ${TextStyles.bigTitle.xxlargeB}
  font-size: 48px;
`;

export const SubTitle = styled.div`
  color: #000;
  ${TextStyles.bigTitle.xxlargeSB}
  font-size: 20px;
`;

export const LeftSideBarHeader = styled.div`
  width: 1333px;
  height: 130px;
  border-bottom: 1px solid #e0e0e0;
`;
