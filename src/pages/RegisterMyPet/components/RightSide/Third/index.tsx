import * as S from '../../../styles/registerMyPetFirst.style';
import BirthdaySelectForm from './BirthdaySelectForm';
import BreedSelectForm from './BreedSelectForm';
import { useCallback, useEffect, useState } from 'react';
import { PETPICK_COLORS } from '@styles/colors';
import { PetGender } from '@types';
import { DAY_OPTIONS, MONTH_OPTIONS, PET_GENDER, YEAR_OPTIONS } from '@constants';
import { useMyPetInfoStore } from '@pages/RegisterMyPet/store/useMyPetInfo';
import PetButton from '../../PetButton';
interface IThirdProps {
  setIsNextButtonActive: (value: boolean) => void;
}

const Third = ({ setIsNextButtonActive }: IThirdProps) => {
  const [gender, setGender] = useState<PetGender>(PET_GENDER.MALE);
  const { myPetInfo, setMyPetInfo } = useMyPetInfoStore();

  const getBackgroundColor = useCallback((isMale: boolean) => {
    return isMale ? PETPICK_COLORS.BLUE[300] : 'transparent';
  }, []);
  const getColor = useCallback((isMale: boolean) => {
    return isMale ? PETPICK_COLORS.GRAY[100] : PETPICK_COLORS.GRAY[400];
  }, []);
  const getBorder = useCallback((isMale: boolean) => {
    return isMale ? 'none' : `2px solid ${PETPICK_COLORS.GRAY[300]}`;
  }, []);

  useEffect(() => {
    setMyPetInfo({ petGender: gender });
  }, [gender]);

  const handleClickGenderButton = () => {
    setGender((prev) => (prev === PET_GENDER.MALE ? PET_GENDER.FEMALE : PET_GENDER.MALE));
  };

  return (
    <S.ThirdComponentWrapper>
      <S.BreedSelectWrapper>
        <S.Title>
          우리 아이 {myPetInfo.petKind === 'DOG' ? '견종' : '묘종'}을 입력해주세요{' '}
          <S.RequiredMark>*</S.RequiredMark>
        </S.Title>
        <BreedSelectForm setIsNextButtonActive={setIsNextButtonActive} />
      </S.BreedSelectWrapper>
      <div>
        <S.Title>우리 아이 생일을 알려주세요</S.Title>
        <S.BirthdaySelectFormWrapper>
          <BirthdaySelectForm options={YEAR_OPTIONS} placeholder="2024년" unit="년" />
          <BirthdaySelectForm options={MONTH_OPTIONS} placeholder="11월" unit="월" />
          <BirthdaySelectForm options={DAY_OPTIONS} placeholder="04일" unit="일" />
        </S.BirthdaySelectFormWrapper>
      </div>
      <div>
        <S.Title>우리 아이 성별을 알려주세요</S.Title>
        <div style={{ display: 'flex', gap: '10px' }}>
          <PetButton
            buttonName="남아"
            isActive={true}
            buttonDirection="next"
            style={{
              width: '155px',
              border: getBorder(gender === PET_GENDER.MALE),
              backgroundColor: getBackgroundColor(gender === PET_GENDER.MALE),
              color: getColor(gender === PET_GENDER.MALE),
            }}
            onClick={handleClickGenderButton}
          />
          <PetButton
            buttonName="여아"
            isActive={true}
            buttonDirection="next"
            style={{
              width: '155px',
              border: getBorder(gender === PET_GENDER.FEMALE),
              backgroundColor: getBackgroundColor(gender === PET_GENDER.FEMALE),
              color: getColor(gender === PET_GENDER.FEMALE),
            }}
            onClick={handleClickGenderButton}
          />
        </div>
      </div>
    </S.ThirdComponentWrapper>
  );
};

export default Third;
