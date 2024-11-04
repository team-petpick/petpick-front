import { useMyPetInfoStore } from '@pages/RegisterMyPet/store/useMyPetInfo';
import * as S from '../../../styles/registerMyPetFirst.style';
import { useEffect, useState } from 'react';

interface IBirthdaySelectFormProps {
  options: number[];
  placeholder: string;
  unit: string;
}

const BirthdaySelectForm = ({ options, placeholder, unit }: IBirthdaySelectFormProps) => {
  const { myPetBirthday, setMyPetInfo, setMyPetBirthday } = useMyPetInfoStore();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: number) => {
    if (unit === '년') {
      setMyPetInfo({ petAge: new Date().getFullYear() - option });
      setMyPetBirthday({ year: option });
    } else if (unit === '월') {
      setMyPetBirthday({ month: option });
    } else if (unit === '일') {
      setMyPetBirthday({ day: option });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (unit === '년') {
      setSelectedOption(myPetBirthday.year ?? null);
    } else if (unit === '월') {
      setSelectedOption(myPetBirthday.month ?? null);
    } else if (unit === '일') {
      setSelectedOption(myPetBirthday.day ?? null);
    }
  }, []);

  return (
    <S.BirthdayDropdownContainer onClick={toggleDropdown}>
      <S.BirthdayDropdownHeader isEmpty={selectedOption === null}>
        {selectedOption ? selectedOption + unit : placeholder}
      </S.BirthdayDropdownHeader>
      {isOpen && (
        <S.BirthdayDropdownList style={{ maxHeight: '180px', overflowY: 'auto' }}>
          {options.map((option, index) => (
            <S.BirthdayDropdownItem key={index} onClick={() => handleOptionClick(option)}>
              {option} {unit}
            </S.BirthdayDropdownItem>
          ))}
        </S.BirthdayDropdownList>
      )}
    </S.BirthdayDropdownContainer>
  );
};

export default BirthdaySelectForm;
