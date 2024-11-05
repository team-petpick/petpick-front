import styled from 'styled-components';
import * as S from '../../styles/leftSide.style';
const LeftSide = () => {
  return (
    <LeftSideWrapper>
      <S.Title>PetPick</S.Title>
      <S.SubTitle>당신의 팻의 선택, 팻픽</S.SubTitle>
      <img src="/png/LeftSide.png" alt="leftSide" />
    </LeftSideWrapper>
  );
};
export default LeftSide;

export const LeftSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  box-sizing: border-box;
`;
