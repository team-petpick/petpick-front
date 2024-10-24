import { useState } from 'react';
import * as S from './Category.style';
import { anymalType } from '@constants';
import { categories } from '@constants';

const Category = () => {
  const [showCategory, setShowCategory] = useState<number | null>(null);
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const [activeCategoryButton, setActiveCategoryButton] = useState<number | null>(null);

  const handleClickAnimalType = (index: number) => {
    if (activeButton === index) {
      setActiveButton(null);
      setShowCategory(null);
    } else {
      setActiveButton(index);
      setShowCategory(index + 1);
    }
  };

  const handleClickCategory = (index: number) => {
    if (activeCategoryButton === index) {
      setActiveCategoryButton(null);
    } else {
      setActiveCategoryButton(index);
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
            <S.AnimalTypeIcon>
              <img src={type.icon} alt={type.name} width="20" height="20" />
            </S.AnimalTypeIcon>
            <S.AnimalTypeText>{type.name}</S.AnimalTypeText>
          </S.AnimalTypeButton>
        ))}
      </S.AnimalTypeWrapper>

      {showCategory && (
        <S.CategoryWrapper>
          {categories.map((category, index) => (
            <S.CategoryButton key={category} onClick={() => handleClickCategory(index)}>
              <S.CategoryText isActive={activeCategoryButton === index}>{category}</S.CategoryText>
            </S.CategoryButton>
          ))}
        </S.CategoryWrapper>
      )}
    </S.Wrapper>
  );
};
export default Category;
