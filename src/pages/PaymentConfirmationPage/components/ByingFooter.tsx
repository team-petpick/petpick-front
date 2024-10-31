import { PETPICK_COLORS } from '@styles/colors';
import { TextStyles } from '@styles/textStyles';
import styled from 'styled-components';

const ByingFooter = () => {
  return (
    <ByingButtonContainer>
      <ByingButton>
        <ButtonText>21,800원 총 3건 결제하기</ButtonText>
      </ByingButton>
    </ByingButtonContainer>
  );
};

export default ByingFooter;
const ButtonText = styled.span`
  color: ${PETPICK_COLORS.GRAY[0]};
  ${TextStyles.bigTitle.xxlargeSB};
`;
const ByingButton = styled.button`
  width: 1050px;
  height: 73px;
  background: ${PETPICK_COLORS.BLUE[100]};
  border-radius: 10px;
  margin-top: 36px;
`;
const ByingButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid ${PETPICK_COLORS.GRAY[400]};
  width: 100%;
  height: 145px;
`;
