import { useState, useEffect } from 'react';
import * as S from '../styles/Category.style';
import { animalType, PRODUCT_CATEGORY_INDEX } from '@constants';
import { TAnimalType } from '@types';
import { useProductSearchStore } from '@store/productSearchStore';

const Category = () => {
  const { productListParams, setProductListParams } = useProductSearchStore();

  const getSessionStorageItem = (key: string, defaultValue: number | null) => {
    const savedValue = sessionStorage.getItem(key);
    return savedValue ? JSON.parse(savedValue) : defaultValue;
  };

  const [showCategory, setShowCategory] = useState<number | null>(
    getSessionStorageItem('showCategory', null),
  );
  const [activeButton, setActiveButton] = useState<number | null>(
    getSessionStorageItem('activeButton', null),
  );
  const [activeCategoryButton, setActiveCategoryButton] = useState<number | null>(
    getSessionStorageItem('activeCategoryButton', null),
  );

  useEffect(() => {
    sessionStorage.setItem('showCategory', JSON.stringify(showCategory));
  }, [showCategory]);

  useEffect(() => {
    sessionStorage.setItem('activeButton', JSON.stringify(activeButton));
  }, [activeButton]);

  useEffect(() => {
    sessionStorage.setItem('activeCategoryButton', JSON.stringify(activeCategoryButton));
  }, [activeCategoryButton]);

  const handleClickAnimalType = (index: number) => {
    if (activeButton === index) {
      setActiveButton(null);
      setShowCategory(null);
      setProductListParams({ ...productListParams, type: null });
    } else {
      setActiveButton(index);
      setShowCategory(index + 1);
      setProductListParams({ ...productListParams, type: animalType[index].type as TAnimalType });
    }
  };

  const handleClickCategory = (index: number) => {
    if (activeCategoryButton === index) {
      setActiveCategoryButton(null);
      setProductListParams({ ...productListParams, category: null });
    } else {
      setActiveCategoryButton(index);
      setProductListParams({ ...productListParams, category: index });
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
          {PRODUCT_CATEGORY_INDEX.map((category, index) => (
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
