import { useState } from 'react';
import * as S from './Category.style';
import { anymalType } from '@constants';
import { categories } from '@constants';

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
        {anymalType.map((type, index) => (
          <S.AnimalTypeButton
            key={type.name}
            onClick={() => handleClickAnimalType(index)}
            isActive={activeButton === index}
          >
            {/* <type.icon width={30} height={30} /> */}
            <S.AnimalTypeText>{type.name}</S.AnimalTypeText>
          </S.AnimalTypeButton>
        ))}
      </S.AnimalTypeWrapper>

      {showCategory && (
        <S.CategoryWrapper>
          {categories.map((category) => (
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
