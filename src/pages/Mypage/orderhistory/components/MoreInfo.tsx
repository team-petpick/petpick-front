import { BottomArrow, TopArrow } from '@assets/svg';
import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import styled from 'styled-components';

interface IMoreInfoProps {
  isExpanded: boolean;
  counts: number;
  onClick: () => void;
}
const MoreInfo = ({ isExpanded, counts, onClick }: IMoreInfoProps) => {
  return (
    <Wrapper onClick={onClick}>
      {isExpanded ? (
        <TextWrapper>
          접기
          <TopArrow width={15} height={10} />
        </TextWrapper>
      ) : (
        <TextWrapper>
          {`총 ${counts}건 주문 펼쳐보기`}
          <BottomArrow width={15} height={10} />
        </TextWrapper>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  ${TextStyles.body.mediumSB}
  color: ${PETPICK_COLORS.GRAY[500]};
  width: 716px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;
const TextWrapper = styled.div`
  width: auto;
  display: flex;
  gap: 6px;
  align-items: center;
`;
export default MoreInfo;
