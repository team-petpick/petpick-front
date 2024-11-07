import { useActivePeriodStore } from '@pages/Mypage/stores/useActivePeriodStore';
import * as S from '../styles/Header.style';
import { orderPeriods } from '@constants';

interface HeaderProps {
  onPeriodChange: (index: number) => void;
}
const Header = ({ onPeriodChange }: HeaderProps) => {
  const handleClickPeriod = (index: number) => {
    onPeriodChange(index);
  };
  const { activePeriod } = useActivePeriodStore();
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.TitleWrapper>주문 내역</S.TitleWrapper>
        <S.ButtonWrapper>
          {orderPeriods.map((period, index) => (
            <S.Button
              key={period}
              onClick={() => handleClickPeriod(index)}
              isActive={activePeriod === index}
            >
              {period}
            </S.Button>
          ))}
        </S.ButtonWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
export default Header;
