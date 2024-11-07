import * as S from '../styles/ProductAdditionalInfo.style';

interface IProductAdditionalInfoProps {
  sellerStoreName: string;
}

export const ProductAdditionalInfo = ({ sellerStoreName }: IProductAdditionalInfoProps) => (
  <S.InfoList>
    <S.InfoListItem>
      <S.InfoTitle>배송</S.InfoTitle>
      <S.InfoText>
        <S.Title>준수배송</S.Title>
        <S.Text>
          23시 전 주문 시 수도권/충청 내일 아침 7시 전 도착 (그 외 지역 아침 8시 전 도착)
        </S.Text>
      </S.InfoText>
    </S.InfoListItem>
    <S.InfoListItem>
      <S.InfoTitle>판매자</S.InfoTitle>
      <S.InfoText>
        <S.Title>{sellerStoreName}</S.Title>
      </S.InfoText>
    </S.InfoListItem>
    <S.InfoListItem>
      <S.InfoTitle>원산지</S.InfoTitle>
      <S.InfoText>
        <S.Title>중국</S.Title>
      </S.InfoText>
    </S.InfoListItem>
  </S.InfoList>
);
