import { TextStyles } from '@styles/textStyles';
import { PETPICK_COLORS } from '@styles/colors';
import styled from 'styled-components';

export const SuccessTextContainerStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

export const SuccessText = styled.h1`
  ${TextStyles.bigTitle.xxlargeM}
  font-size: 28px;
  color: ${PETPICK_COLORS.GRAY[900]};
  width: 100%;
  justify-content: center;
  text-align: center;
  margin-bottom: 36px;
`;

export const AnnouncementText = styled.h2`
  ${TextStyles.title.xLargeR}
  font-size: 24px;
  color: ${PETPICK_COLORS.GRAY[900]};
  margin-bottom: 48px;
  text-align: center;
`;

export const OrderInfoText = styled.span`
  ${TextStyles.subTitle.largeSB}
  color: ${PETPICK_COLORS.GRAY[900]};
  margin-bottom: 16px;
`;

export const OrderAnnouncementText = styled.span`
  ${TextStyles.subTitle.largeR}
  color: ${PETPICK_COLORS.GRAY[900]};
`;
