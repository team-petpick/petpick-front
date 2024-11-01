import { CatDefault, DogDefault, PetGroup } from '@assets/svg';
import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import styled from 'styled-components';

const First = () => {
  return (
    <FirstComponentWrapper>
      <Title>
        어떤 반려동물과 함께하고 계신가요 ? <RequiredMark>*</RequiredMark>
      </Title>
      <IconsWrapper>
        <Icon>
          <DogDefault width={150} height={150} />
          <SelectMenu>
            <RadioButton type="radio" name="animal" id="dog" />
            <Label htmlFor="dog">강아지</Label>
          </SelectMenu>
        </Icon>

        <Icon>
          <CatDefault width={150} height={150} />
          <SelectMenu>
            <RadioButton type="radio" name="animal" id="cat" />
            <Label htmlFor="cat">고양이</Label>
          </SelectMenu>
        </Icon>

        <Icon>
          <PetGroup width={150} height={150} />
          <SelectMenu>
            <RadioButton type="radio" name="animal" id="other" />
            <Label htmlFor="other">기타</Label>
          </SelectMenu>
        </Icon>
      </IconsWrapper>
    </FirstComponentWrapper>
  );
};

export default First;
const FirstComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const Title = styled.h1`
  ${TextStyles.bigTitle.xxlargeR};
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-bottom: 32px;
`;

const RequiredMark = styled.span`
  color: ${PETPICK_COLORS.RED[200]};
`;

const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 162px;
`;

const Icon = styled.div`
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

const SelectMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
`;

const RadioButton = styled.input`
  accent-color: ${PETPICK_COLORS.BLUE[300]};
  width: 20px;
  height: 20px;
  color: ${PETPICK_COLORS.BLUE[300]};
  border: 2px solid ${PETPICK_COLORS.BLUE[300]};
`;

const Label = styled.label`
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
