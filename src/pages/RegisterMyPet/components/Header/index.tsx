import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import styled from 'styled-components';

const Header = () => {
  return (
    <TitleWrapper>
      <Title>우리 아이 프로필 등록하기</Title>
    </TitleWrapper>
  );
};

export default Header;

export const Title = styled.h1`
  ${TextStyles.bigTitle.xxlargeSB};
  color: ${PETPICK_COLORS.GRAY[900]};
`;

export const TitleWrapper = styled.header`
  width: 80%;
  height: 130px;
  border-bottom: 1px solid ${PETPICK_COLORS.GRAY[300]};
  display: flex;
  justify-content: center;
  align-items: center;
`;
