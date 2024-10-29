import { TextStyles } from '@styles/textStyles';
import styled from 'styled-components';
import { ITitleProps } from '@types';

const Title = ({ titleText }: ITitleProps) => {
  return <TitleContainer>{titleText}</TitleContainer>;
};

export default Title;

const TitleContainer = styled.h1`
  padding: 50px 0px 48px;
  text-align: center;
  ${TextStyles.bigTitle.xxlargeSB}
`;
