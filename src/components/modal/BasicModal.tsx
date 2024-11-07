import { ReactNode, useEffect } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

interface BasicModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title?: string;
  maxWidth?: string;
  width?: string;
  height: string;
  children: ReactNode;
  showCloseIcon?: boolean;
}
export default function BasicModal({
  isOpen,
  setIsOpen,
  title,
  maxWidth,
  width,
  height,
  children,
  showCloseIcon = false,
}: BasicModalProps) {
  console.log('basicModal isOpen', isOpen);

  useEffect(() => {
    const handleClose = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleClose);
    }

    return () => {
      window.removeEventListener('keydown', handleClose);
    };
  }, [isOpen, setIsOpen]);

  return (
    <>
      <ReactModal
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: '999',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          content: {
            outline: 'none',
            marginTop: '220px',
            padding: 0,
            maxWidth,
            width,
            height,
            borderRadius: '12px',
            boxShadow: '3px 3px 20px 0 rgba(0, 0, 0, 0.25)',
            overflowY: 'scroll',
            backgroundColor: 'white',
          },
        }}
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="MODAL"
      >
        <Style.Wrapper>
          <Text>{title}</Text>

          {showCloseIcon && (
            <Block.FlexBox onClick={() => setIsOpen(false)}>
              <ImgBox src="/cancel.svg" />
            </Block.FlexBox>
          )}

          <Block.FlexBox>{children}</Block.FlexBox>
        </Style.Wrapper>
      </ReactModal>
    </>
  );
}

const Style = {
  Wrapper: styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 24px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
};

const Block = {
  FlexBox: styled.div`
    display: flex;
  `,
};
const Text = styled.div``;
const ImgBox = styled.img`
  width: '20px';
  cursor: pointer;
`;
