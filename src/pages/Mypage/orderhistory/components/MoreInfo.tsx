import { PETPICK_COLORS } from '@constants/colors';
import { TextStyles } from '@styles/textStyles';
import styled from 'styled-components';

interface IMoreInfoProps {
  isExpanded: boolean;
  counts: number;
  onClick: () => void;
}
const MoreInfo = ({ isExpanded, counts, onClick }: IMoreInfoProps) => {
  return (
    <Wrapper onClick={onClick}>{isExpanded ? '접기' : `총 ${counts}건 주문 펼쳐보기`}</Wrapper>
  );
};
const Wrapper = styled.div`
  ${TextStyles.body.mediumSB}
  color: ${PETPICK_COLORS.GRAY[500]};
  width: 716px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;
export default MoreInfo;
