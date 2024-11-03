import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import styled from 'styled-components';

export const FirstComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  ${TextStyles.bigTitle.xxlargeR};
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-bottom: 32px;
  word-wrap: break-word;
`;

export const RequiredMark = styled.span`
  color: ${PETPICK_COLORS.RED[200]};
  margin-left: 8px;
`;

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  flex-wrap: wrap;
  margin-bottom: 162px;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: 150px;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

export const SelectMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
`;

export const RadioButton = styled.input`
  accent-color: ${PETPICK_COLORS.BLUE[300]};
  width: 20px;
  height: 20px;
  color: ${PETPICK_COLORS.BLUE[300]};
  border: 2px solid ${PETPICK_COLORS.BLUE[300]};
`;

export const Label = styled.label`
  ${TextStyles.subTitle.largeR};
  color: ${PETPICK_COLORS.GRAY[900]};
  cursor: pointer;
  &:hover {
    color: ${PETPICK_COLORS.GRAY[800]};
  }
  input[type='radio']:checked + & {
    color: ${PETPICK_COLORS.GRAY[900]};
    ${TextStyles.subTitle.largeSB};
  }
`;

export const SecondComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 75px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: ${PETPICK_COLORS.BLUE[100]};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UploadButton = styled.label`
  background-color: ${PETPICK_COLORS.BLUE[300]};
  ${TextStyles.body.mediumR};
  color: ${PETPICK_COLORS.GRAY[100]};
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  width: 133px;
`;

export const FileInput = styled.input`
  display: none;
`;

export const NameInput = styled.input`
  max-width: 400px;
  width: 35vw;
  height: 48px;
  flex-shrink: 0;
  border-radius: 6px;
  padding: 14px 16px;
  border: 2px solid ${PETPICK_COLORS.BLUE[300]};
  &::placeholder {
    color: ${PETPICK_COLORS.GRAY[400]};
  }
`;

export const ThirdComponentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const BreedSelectForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const OpenDropdownButton = styled.button<{ isBreedSelected: boolean }>`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  max-width: 400px;
  width: 35vw;
  height: 48px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 2px solid ${PETPICK_COLORS.BLUE[300]};
  ${TextStyles.body.mediumM};
  text-align: left;
  padding-left: 16px;
  color: ${(props) =>
    props.isBreedSelected ? PETPICK_COLORS.GRAY[900] : PETPICK_COLORS.GRAY[400]};
  box-sizing: border-box;
  &:focus {
    outline: none;
  }

  &:hover {
    border: 2px solid ${PETPICK_COLORS.BLUE[400]};
  }
`;

export const SearchInput = styled.input`
  appearance: none;
  max-width: 400px;
  width: 35vw;
  height: 48px;
  flex-shrink: 0;
  border-radius: 6px;
  padding: 14px 16px;
  border: 2px solid ${PETPICK_COLORS.BLUE[300]};
  box-sizing: border-box;
  &::placeholder {
    color: ${PETPICK_COLORS.GRAY[400]};
  }
`;
export const DropdownList = styled.ul`
  margin: 8px 0;
  padding: 0;
  list-style: none;
  border: 1px solid lightgray;
  border-radius: 6px;
  max-width: 400px;
  width: 35vw;
  max-height: 300px;
  overflow-y: auto;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  box-sizing: border-box;
`;

export const ListItem = styled.li`
  padding: 12px 16px;
  font-size: 16px;
  color: gray;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
  box-sizing: border-box;
`;

export const BirthDateInput = styled.input`
  max-width: 400px;
  width: 35vw;
  height: 48px;
  flex-shrink: 0;
  border-radius: 6px;
  padding: 14px 16px;
  box-sizing: border-box;
`;

export const BirthdaySelectFormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  box-sizing: border-box;
`;

export const BreedSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;
`;
