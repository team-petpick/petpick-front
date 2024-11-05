import { useState } from 'react';
import * as S from '../styles/Category.style';
import { animalType } from '@constants';
import { categories } from '@constants';

interface ICategoryProps {
  onAnimalTypeChange: (type: string | null) => void;
  onCategoryChange: (category: number | null) => void;
}

const Category = ({ onAnimalTypeChange, onCategoryChange }: ICategoryProps) => {
  const [showCategory, setShowCategory] = useState<number | null>(null);
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const [activeCategoryButton, setActiveCategoryButton] = useState<number | null>(null);

  const handleClickAnimalType = (index: number) => {
    if (activeButton === index) {
      setActiveButton(null);
      setShowCategory(null);
      onAnimalTypeChange(null);
    } else {
      setActiveButton(index);
      setShowCategory(index + 1);
      onAnimalTypeChange(animalType[index].type);
    }
  };

  const handleClickCategory = (index: number) => {
    if (activeCategoryButton === index) {
      setActiveCategoryButton(null);
      onCategoryChange(null);
    } else {
      setActiveCategoryButton(index);
      onCategoryChange(index);
    }
  };

  return (
    <S.Wrapper>
      <S.AnimalTypeWrapper>
        {animalType.map((type, index) => (
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
