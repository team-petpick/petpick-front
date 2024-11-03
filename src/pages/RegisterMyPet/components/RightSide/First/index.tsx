import { CatDefault, DogDefault, PetGroup } from '@assets/svg';
import * as S from '../../../styles/registerMyPetFirst.style';
import { useEffect, useState } from 'react';
import { ANIMAL_TYPE } from '@constants';
const First = ({ setIsNextButtonActive }: { setIsNextButtonActive: (value: boolean) => void }) => {
  const [selectedAnimal, setSelectedAnimal] = useState<string>('');

  const handleAnimalClick = (animal: string) => {
    setSelectedAnimal(animal);
    setIsNextButtonActive(true);
  };

  useEffect(() => {
    console.log(selectedAnimal);
  }, [selectedAnimal]);

  return (
    <S.FirstComponentWrapper>
      <S.Title>
        어떤 반려동물과 함께하고 계신가요 ? <S.RequiredMark>*</S.RequiredMark>
      </S.Title>
      <S.IconsWrapper>
        <S.Icon onClick={() => handleAnimalClick(ANIMAL_TYPE.DOG)}>
          <DogDefault width={150} height={150} />
          <S.SelectMenu>
            <S.RadioButton type="radio" name="animal" id="dog" />
            <S.Label htmlFor="dog">강아지</S.Label>
          </S.SelectMenu>
        </S.Icon>
        <S.Icon onClick={() => handleAnimalClick(ANIMAL_TYPE.CAT)}>
          <CatDefault width={150} height={150} />
          <S.SelectMenu>
            <S.RadioButton type="radio" name="animal" id="cat" />
            <S.Label htmlFor="cat">고양이</S.Label>
          </S.SelectMenu>
        </S.Icon>
        <S.Icon onClick={() => handleAnimalClick(ANIMAL_TYPE.ETC)}>
          <PetGroup width={150} height={150} />
          <S.SelectMenu>
            <S.RadioButton type="radio" name="animal" id="other" />
            <S.Label htmlFor="other">기타</S.Label>
          </S.SelectMenu>
        </S.Icon>
      </S.IconsWrapper>
    </S.FirstComponentWrapper>
  );
};

export default First;
