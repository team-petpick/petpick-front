import { PETPICK_COLORS } from '@styles/colors';
import BasicModal from './BasicModal';
import styled from 'styled-components';
import { TextStyles } from '@styles/textStyles';
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
    <BasicModal isOpen={isOpen} title={'안녕'} setIsOpen={setIsOpen} width="340px" height="303px">
      <Block.FlexBox>
        <Text>{message}</Text>
        <Block.FlexBox>
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
  FlexBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  `,
};
const Text = styled.div`
  white-space: pre-line;
  text-align: center;
  padding: 0 30px;
`;

const CloseButton = styled.button`
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 56px;
  border-radius: 3px;
  color: ${PETPICK_COLORS.GRAY[800]};
  background-color: ${PETPICK_COLORS.GRAY[0]};
  ${TextStyles.body.mediumM};
  border: 1px solid ${PETPICK_COLORS.GRAY[200]};
`;
const CartButton = styled.button`
  padding: 0px 10px;
  margin-left: 4px;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 56px;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: ${PETPICK_COLORS.BLUE[300]};
  ${TextStyles.body.mediumM};
  border: 0px none;
`;
