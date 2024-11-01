import styled from 'styled-components';
import First from './First';
import Button from '../Button';

const RightSide = () => {
  return (
    <RightSideWrapper>
      <First />
      <ButtonWrapper>
        <Button buttonDirection="next" buttonName="다음" isActive={true} />
        <Button buttonDirection="prev" buttonName="이전" isActive={false} />
      </ButtonWrapper>
    </RightSideWrapper>
  );
};

export default RightSide;

const RightSideWrapper = styled.div`
  height: 100%;
  width: 50%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  background-color: red;
`;
