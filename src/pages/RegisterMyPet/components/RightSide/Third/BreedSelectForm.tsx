import { useState } from 'react';
import dogSpecies from '../../../../../assets/dogSpecies.json';
import catSpecies from '../../../../../assets/catSpecies.json';
import { Breed } from '@types';
import * as S from '../../../styles/registerMyPetFirst.style';
import { useMyPetInfoStore } from '@pages/RegisterMyPet/store/useMyPetInfo';

interface IBreedSelectFormProps {
  setIsNextButtonActive: (value: boolean) => void;
}

const BreedSelectForm = ({ setIsNextButtonActive }: IBreedSelectFormProps) => {
  const { myPetInfo, setMyPetInfo } = useMyPetInfoStore();
  const [searchTerm, setSearchTerm] = useState('');
  const species = myPetInfo.petKind === 'DOG' ? dogSpecies.dogList : catSpecies.catList;
  const [filteredBreeds, setFilteredBreeds] = useState(species);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setFilteredBreeds(
      species.filter((breed) =>
        breed.animal_group2_name.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  };

  const handleBreedClick = (breed: Breed) => {
    setMyPetInfo({ petSpecies: breed.animal_group2_name });
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
          isBreedSelected={myPetInfo.petSpecies !== null}
          onClick={handleDropdownClick}
        >
          {myPetInfo.petSpecies === null
            ? myPetInfo.petKind === 'DOG'
              ? '우리 아이 견종을 알려주세요'
              : '우리 아이 묘종을 알려주세요'
            : myPetInfo.petSpecies}
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
