import { PETPICK_COLORS } from '@styles/colors';
import BasicModal from './BasicModal';
import styled from 'styled-components';
import { TextStyles } from '@styles/textStyles';
interface IStyleProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?: string;
  margin?: string;
  padding?: string;
  gap?: string;
}
interface DeleteModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  message: string;
  confirmText: string;
  cancelText: string;
  onConfirm: () => void;
  imageSrc?: boolean;
}
export default function DeleteModal({
  isOpen,
  setIsOpen,
  message,
  confirmText,
  cancelText,
  onConfirm,
}: DeleteModalProps) {

  return (
    <BasicModal isOpen={isOpen} setIsOpen={setIsOpen} width="280px" height="fit-content">
      <Block.FlexBox direction="column">
        <Text padding="10px 0 0 8px">{message}</Text>
        <Block.FlexBox justifyContent="center" margin="20px 0 0" gap="7px">
          <CloseButton onClick={() => setIsOpen(false)}>
            <Text> {cancelText}</Text>
          </CloseButton>
          <CartButton onClick={onConfirm}>
            <Text>{confirmText}</Text>
          </CartButton>
        </Block.FlexBox>
      </Block.FlexBox>
    </BasicModal>
  );
}

const Block = {
  FlexBox: styled.div<IStyleProps>`
    width: 100%;
    display: flex;
    flex-direction: ${(props) => (props.direction ? props.direction : 'none')};
    align-items: center;
    justify-content: ${(props) => props.justifyContent};
    margin: ${(props) => props.margin};
    gap: ${(props) => (props.gap ? props.gap : 'none')};
  `,
};
const Text = styled.div<IStyleProps>`
  white-space: pre-line;
  overflow-y: auto;
  padding: ${(props) => (props.padding ? props.padding : 'none')};
`;

const CloseButton = styled.button`
  box-sizing: border-box;

  width: 100%;
  height: 48px;
  border-radius: 3px;
  color: ${PETPICK_COLORS.GRAY[800]};
  background-color: ${PETPICK_COLORS.GRAY[0]};
  ${TextStyles.body.mediumM};
  border: 1px solid ${PETPICK_COLORS.GRAY[200]};
`;
const CartButton = styled.button`
  box-sizing: border-box;
  /* flex: 1;

  display: flex;
  align-items: center;
  justify-content: center; */
  /* overflow: hidden; */
  width: 100%;
  height: 48px;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: ${PETPICK_COLORS.BLUE[300]};
  ${TextStyles.body.mediumM};
  border: 0px none;
`;
