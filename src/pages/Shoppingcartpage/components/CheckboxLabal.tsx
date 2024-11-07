import { PETPICK_COLORS } from '@styles/colors';
import styled from 'styled-components';
interface ICheckboxLabelProps {
  text: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const CheckboxLabel = ({ text, checked, onChange }: ICheckboxLabelProps) => {
  return (
    <CheckboxContainer>
      <Label htmlFor={text}>
        <CustomCheckbox
          type="checkbox"
          id={text}
          name={text}
          checked={checked}
          onChange={onChange}
        />
      </Label>
    </CheckboxContainer>
  );
};

export default CheckboxLabel;

const CheckboxContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

const CustomCheckbox = styled.input`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  background-size: cover;
  border: 1.5px solid ${PETPICK_COLORS.GRAY[400]};
  border-radius: 0.25rem;
  appearance: none;

  /* 체크 상태 */
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${PETPICK_COLORS.BLUE[300]};
  }
`;
