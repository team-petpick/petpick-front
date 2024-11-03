import { useState } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  width: 155.181px;
  height: 48px;
  border-radius: 6px;
  border: 2px solid var(--Blue-300, #848ac4);
  background: rgba(217, 217, 217, 0);
  cursor: pointer;
`;

const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  height: 100%;
  font-size: 16px;
  color: #333;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 50px; // DropdownContainer height와 간격 조정
  width: 100%;
  border: 2px solid var(--Blue-300, #848ac4);
  border-radius: 6px;
  background: white;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 1000;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

interface IBirthdaySelectFormProps {
  options: number[];
  placeholder: string;
  unit: string;
}

const BirthdaySelectForm = ({ options, placeholder, unit }: IBirthdaySelectFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: number) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <DropdownContainer onClick={toggleDropdown}>
      <DropdownHeader>{selectedOption ? selectedOption + unit : placeholder}</DropdownHeader>
      {isOpen && (
        <DropdownList style={{ maxHeight: '180px', overflowY: 'auto' }}>
          {options.map((option, index) => (
            <DropdownItem key={index} onClick={() => handleOptionClick(option)}>
              {option} {unit}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default BirthdaySelectForm;
