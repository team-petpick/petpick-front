import { CatDefault, DogDefault, PetGroup } from '@assets/svg';
import * as S from '../../../styles/registerMyPetFirst.style';
const First = () => {
  return (
    <S.FirstComponentWrapper>
      <S.Title>
        어떤 반려동물과 함께하고 계신가요 ? <S.RequiredMark>*</S.RequiredMark>
      </S.Title>
      <S.IconsWrapper>
        <S.Icon>
          <DogDefault width={150} height={150} />
          <S.SelectMenu>
            <S.RadioButton type="radio" name="animal" id="dog" />
            <S.Label htmlFor="dog">강아지</S.Label>
          </S.SelectMenu>
        </S.Icon>
        <S.Icon>
          <CatDefault width={150} height={150} />
          <S.SelectMenu>
            <S.RadioButton type="radio" name="animal" id="cat" />
            <S.Label htmlFor="cat">고양이</S.Label>
          </S.SelectMenu>
        </S.Icon>
        <S.Icon>
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
