import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const DropdownSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedText, setSelectedText] = useState('배송 시 요청사항을 선택하세요');
  const [isCustomInput, setIsCustomInput] = useState(false);
  const [customText, setCustomText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const options = [
    '요청사항 없음',
    '문 앞에 놓아주세요',
    '경비실에 맡겨 주세요',
    '파손 위험 상품입니다. 배송 시 주의해주세요',
    '직접 입력',
  ];

  useEffect(() => {
    if (isCustomInput && inputRef.current) {
      inputRef.current?.focus();
    }
  }, [isCustomInput]);

  const toggleList = () => {
    setIsOpen(!isOpen);
    setIsCustomInput(false);
  };

  const handleSelect = (text: string) => {
    if (text === '직접 입력') {
      setIsCustomInput(true);
      setSelectedText('');
      setCustomText('');
    } else {
      setSelectedText(text);
      setIsCustomInput(false);
      setIsOpen(false);
    }
  };

  const handleCustomInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomText(e.target.value);
    setSelectedText(e.target.value);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSelectedText(customText || '직접 입력 중...');
      setIsCustomInput(false);
      setIsOpen(false);
    }
  };

  return (
    <Container>
      {isCustomInput ? (
        <CustomInput
          ref={inputRef} // inputRef를 customInput에 연결
          type="text"
          placeholder="요청사항을 입력하세요"
          value={customText}
          onChange={handleCustomInputChange}
          onKeyPress={handleKeyPress}
        />
      ) : (
        <SelectButton onClick={toggleList}>
          <SubContent>{selectedText}</SubContent>
        </SelectButton>
      )}
      {isOpen && (
        <Dropdown>
          {options.map((option) => (
            <Option key={option} onClick={() => handleSelect(option)}>
              <SubContent>{option}</SubContent>
            </Option>
          ))}
        </Dropdown>
      )}
    </Container>
  );
};

export default DropdownSelector;
const SubContent = styled.span`
  text-align: center;
  color: ${PETPICK_COLORS.GRAY[600]};
  ${TextStyles.body.mediumR};
  margin-bottom: 10px;
`;
const Container = styled.div`
  margin: 10px 0 0;
  width: 100%;
`;

const SelectButton = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px;
  background: ${PETPICK_COLORS.GRAY[0]};
  color: ${PETPICK_COLORS.GRAY[800]};
  border: 1px solid ${PETPICK_COLORS.GRAY[400]};
  border-radius: 8px;
  text-align: left;
  cursor: pointer;
`;

const Dropdown = styled.ul`
  width: 100%;
  margin-top: 4px;
  border-radius: 8px;
  border: 1px solid ${PETPICK_COLORS.GRAY[400]};
  background-color: ${PETPICK_COLORS.GRAY[0]};
  transition: all 0.3s ease;
  overflow: hidden;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    border-color: #aaa;
  }
  &:focus-within {
    border-color: #555;
    box-shadow: 0 0 0 2px rgba(85, 85, 85, 0.2);
  }
`;

const Option = styled.li`
  padding: 10px;
  font-size: 16px;
  background-color: #fff;
  color: #333;

  &:hover {
    background-color: #f1f1f1;
  }
`;

// const Option = styled.button`
//   display: block;
//   height: 100%;
//   width: 100%;
//   background-color: #fff;
//   border: 1px solid black;
//   border-top: none;
//   cursor: pointer;

//   &:hover {
//     background-color: #eee;
//   }
// `;

const CustomInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid ${PETPICK_COLORS.GRAY[400]};
  outline: none;
`;
