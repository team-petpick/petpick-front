import CheckboxLabal from './CheckboxLabal';
import * as S from '../styles/ProductSelection.style';
import { PETPICK_COLORS } from '@styles/colors';

const NothingSelectedCountHeader = () => {
  return (
    <S.SelectContainer>
      <S.SelectBox>
        <CheckboxLabal text="text" checked={false} />
        <S.SelectText color={PETPICK_COLORS.GRAY[500]}>전체 선택</S.SelectText>
        <S.SelectText color={PETPICK_COLORS.GRAY[500]}>0/0</S.SelectText>
      </S.SelectBox>
      <S.DeleteButton disabled={true}>
        <S.DeleteButtonText color={PETPICK_COLORS.GRAY[500]}>선택삭제</S.DeleteButtonText>
      </S.DeleteButton>
    </S.SelectContainer>
  );
};

export default NothingSelectedCountHeader;
