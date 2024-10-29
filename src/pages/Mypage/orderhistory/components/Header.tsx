import * as S from '../styles/Header.style';
import { orderPeriods } from '@constants';

const Header = () => {
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.TitleWrapper>주문 내역</S.TitleWrapper>
        <S.ButtonWrapper>
          {orderPeriods.map((period) => (
            <S.Button key={period}>{period}</S.Button>
          ))}
        </S.ButtonWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
export default Header;
