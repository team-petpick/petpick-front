import { CatDefault, DogDefault, PetGroup } from '@assets/svg';
import * as S from '../../../styles/registerMyPetFirst.style';
import { ANIMAL_TYPE } from '@constants';
import { TProductType } from '@types';
import { useMyPetInfoStore } from '@pages/RegisterMyPet/store/useMyPetInfo';

const First = ({ setIsNextButtonActive }: { setIsNextButtonActive: (value: boolean) => void }) => {
  const { myPetInfo, setMyPetInfo } = useMyPetInfoStore();
  setIsNextButtonActive(myPetInfo.petKind !== null);
  const handleAnimalClick = (animal: TProductType) => {
    setMyPetInfo({ petKind: animal });
    setIsNextButtonActive(true);
  };

  return (
    <S.FirstComponentWrapper>
      <S.Title>
        어떤 반려동물과 함께하고 계신가요 ? <S.RequiredMark>*</S.RequiredMark>
      </S.Title>
      <S.IconsWrapper>
        <S.Icon onClick={() => handleAnimalClick(ANIMAL_TYPE.DOG)}>
          <DogDefault width={150} height={150} />
          <S.SelectMenu>
            <S.RadioButton
              type="radio"
              name="animal"
              id="dog"
              checked={myPetInfo.petKind === ANIMAL_TYPE.DOG}
            />
            <S.Label htmlFor="dog">강아지</S.Label>
          </S.SelectMenu>
        </S.Icon>
        <S.Icon onClick={() => handleAnimalClick(ANIMAL_TYPE.CAT)}>
          <CatDefault width={150} height={150} />
          <S.SelectMenu>
            <S.RadioButton
              type="radio"
              name="animal"
              id="cat"
              checked={myPetInfo.petKind === ANIMAL_TYPE.CAT}
            />
            <S.Label htmlFor="cat">고양이</S.Label>
          </S.SelectMenu>
        </S.Icon>
        <S.Icon onClick={() => handleAnimalClick(ANIMAL_TYPE.ETC)}>
          <PetGroup width={150} height={150} />
          <S.SelectMenu>
            <S.RadioButton
              type="radio"
              name="animal"
              id="other"
              checked={myPetInfo.petKind === ANIMAL_TYPE.ETC}
            />
            <S.Label htmlFor="other">기타</S.Label>
          </S.SelectMenu>
        </S.Icon>
      </S.IconsWrapper>
    </S.FirstComponentWrapper>
  );
};

export default First;
