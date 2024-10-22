import { useState } from 'react';
import * as S from './Category.style';

const Category = () => {
  const [showCategory, setShowCategory] = useState<number | null>(null);
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleClickAnimalType = (index: number) => {
    if (activeButton === index) {
      setActiveButton(null);
      setShowCategory(null);
    } else {
      setActiveButton(index);
      setShowCategory(index + 1);
    }
  };

  return (
    <S.Wrapper>
      <S.AnimalTypeWrapper>
        {['강아지', '고양이', '기타'].map((type, index) => (
          <S.AnimalTypeButton
            key={type}
            onClick={() => handleClickAnimalType(index)}
            isActive={activeButton === index}
          >
            <S.AnimalTypeText>{type}</S.AnimalTypeText>
          </S.AnimalTypeButton>
        ))}
      </S.AnimalTypeWrapper>

      {showCategory && (
        <S.CategoryWrapper>
          {['전체', '용품', '사료', '간식', '의류'].map((category) => (
            <S.CategoryButton key={category}>
              <S.CategoryText>{category}</S.CategoryText>
            </S.CategoryButton>
          ))}
        </S.CategoryWrapper>
      )}
    </S.Wrapper>
  );
};
export default Category;
