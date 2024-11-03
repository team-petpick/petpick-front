import { useState } from 'react';
import dogSpecies from '../../../../../assets/dogSpecies.json';
import { Breed } from '@types';
import * as S from '../../../styles/registerMyPetFirst.style';

interface IBreedSelectFormProps {
  setIsNextButtonActive: (value: boolean) => void;
}

const BreedSelectForm = ({ setIsNextButtonActive }: IBreedSelectFormProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBreeds, setFilteredBreeds] = useState(dogSpecies.dogList);
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setFilteredBreeds(
      dogSpecies.dogList.filter((breed) =>
        breed.animal_group2_name.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  };

  const handleBreedClick = (breed: Breed) => {
    setSelectedBreed(breed.animal_group2_name);
    setIsOpenDropdown(false);
    setIsNextButtonActive(true);
  };

  const handleDropdownClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpenDropdown(!isOpenDropdown);
  };
  return (
    <S.BreedSelectForm>
      {!isOpenDropdown ? (
        <S.OpenDropdownButton
          isBreedSelected={selectedBreed !== null}
          onClick={handleDropdownClick}
        >
          {selectedBreed === null ? '우리 아이 견종을 알려주세요' : selectedBreed}
        </S.OpenDropdownButton>
      ) : (
        <S.SearchInput
          autoFocus
          type="text"
          placeholder="견종을 입력하세요"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      )}

      {isOpenDropdown && (
        <S.DropdownList>
          {filteredBreeds.map((breed, index) => (
            <S.ListItem onClick={() => handleBreedClick(breed)} key={index}>
              {breed.animal_group2_name}
            </S.ListItem>
          ))}
        </S.DropdownList>
      )}
    </S.BreedSelectForm>
  );
};

export default BreedSelectForm;
