import * as S from '../styles/Header.style';
import { orderPeriods } from '@constants';
import { useState } from 'react';

const Header = () => {
  const [activeButton, setActiveButton] = useState<number | null>(0);

  const handleClickPeriod = (index: number) => {
    if (activeButton === index) {
      setActiveButton(null);
    } else {
      setActiveButton(index);
    }
  };
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.TitleWrapper>주문 내역</S.TitleWrapper>
        <S.ButtonWrapper>
          {orderPeriods.map((period, index) => (
            <S.Button
              key={period}
              onClick={() => handleClickPeriod(index)}
              isActive={activeButton === index}
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
