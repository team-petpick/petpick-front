import * as S from '../../../styles/registerMyPetFirst.style';
import BirthdaySelectForm from './BirthdaySelectForm';
import BreedSelectForm from './BreedSelectForm';
interface IThirdProps {
  setIsNextButtonActive: (value: boolean) => void;
}

const Third = ({ setIsNextButtonActive }: IThirdProps) => {
  const yearOptions = Array.from({ length: 100 }, (_, index) => 2024 - index);
  const monthOptions = Array.from({ length: 12 }, (_, index) => index + 1);
  const dayOptions = Array.from({ length: 31 }, (_, index) => index + 1);
  return (
    <S.ThirdComponentWrapper>
      <S.BreedSelectWrapper>
        <S.Title>
          우리 아이 견종/묘종을 입력해주세요 <S.RequiredMark>*</S.RequiredMark>
        </S.Title>
        <BreedSelectForm setIsNextButtonActive={setIsNextButtonActive} />
      </S.BreedSelectWrapper>
      <S.Title>우리 아이 생일을 알려주세요</S.Title>
      <S.BirthdaySelectFormWrapper>
        <BirthdaySelectForm options={yearOptions} placeholder="2024년" unit="년" />
        <BirthdaySelectForm options={monthOptions} placeholder="11월" unit="월" />
        <BirthdaySelectForm options={dayOptions} placeholder="04일" unit="일" />
      </S.BirthdaySelectFormWrapper>
    </S.ThirdComponentWrapper>
  );
};

export default Third;
