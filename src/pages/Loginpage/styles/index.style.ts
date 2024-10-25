import { PETPICK_COLORS } from '@constants/colors';
import { TextStyles } from '@styles/textStyles';
import styled from 'styled-components';

export const ArrowBox = styled.div`
  width: 20px;
  height: 20px;
  transform: rotate(-45deg);
  flex-shrink: 0;
  background-color: ${PETPICK_COLORS.GRAY[200]};
  margin-top: -10px;
  margin-bottom: 15px;
`;
export const LoginLayout = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
`;

export const SignUpText = styled.div`
  ${TextStyles.bigTitle.xxlargeSB}
  font-size: 40px;
  color: ${PETPICK_COLORS.GRAY[900]};
`;

export const SignUpExplainText = styled.div`
  ${TextStyles.subTitle.largeR}
  margin-top: 35px;
  line-height: 150%;
  color: ${PETPICK_COLORS.GRAY[800]};
  justify-content: center;
  text-align: center;
`;

export const SignUpAnnounce = styled.div`
  margin-top: 60px;
  width: 200px;
  height: 50px;
  padding: 0px 6px;
  display: flex;
  border-radius: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  ${TextStyles.subTitle.largeR};
  background-color: ${PETPICK_COLORS.GRAY[200]};
`;

export const Emphasize = styled.div`
  color: ${PETPICK_COLORS.BLUE[300]};
  ${TextStyles.subTitle.largeB}
`;
