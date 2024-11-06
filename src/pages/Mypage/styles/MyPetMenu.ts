import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import styled from 'styled-components';

export const DropdownMenu = styled.div`
  position: absolute;
  top: 30px; /* 적절한 위치로 조정 */
  right: 5px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1;
  white-space: nowrap;
  padding: 5px;
  button {
    background: none;
    border: none;
    color: red;
    cursor: pointer;
    padding: 5px 10px;
  }
`;

export const MyPetMenuWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 145px;
  margin-top: 20px;
  border: 1px solid;
  border-color: ${PETPICK_COLORS.GRAY[300]};
  border-radius: 10px;
  cursor: pointer;
  justify-content: space-between;
`;

export const MyPetMenuText = styled.div`
  color: ${PETPICK_COLORS.GRAY[500]};
  ${TextStyles.body.mediumM};
  margin-top: 15px;
  margin-left: 18px;
`;

export const MyPetMenuTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 18px;
`;

export const MyPetProfileImage = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: ${PETPICK_COLORS.GRAY[300]};
  margin-top: 7px;
`;

export const MyPetName = styled.div`
  ${TextStyles.body.mediumM};
  color: ${PETPICK_COLORS.BLUE[500]};
`;

export const MyPetInfoText = styled.div`
  ${TextStyles.subText.smallR};
  color: ${PETPICK_COLORS.BLUE[300]};
`;

export const MyPetImageInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 23px;
  gap: 14px;
  padding: 8px 0 0 8px;
  height: 84px;
  align-items: center;
`;
