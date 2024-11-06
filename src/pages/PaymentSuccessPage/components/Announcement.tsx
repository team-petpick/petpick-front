import * as S from '../styles/Announcement.stlye';

interface IAnnouncementProps {
  orderId: number;
}

const Announcement = ({ orderId }: IAnnouncementProps) => {
  return (
    <S.SuccessTextContainerStyle>
      <S.SuccessText>주문/결제가 정상적으로 완료되었습니다.</S.SuccessText>
      <S.AnnouncementText>
        안전하고 빠르게 보내드릴게요 ! <br /> 조금만 기다려주세요 :)
      </S.AnnouncementText>
      <S.OrderInfoText>주문번호 {orderId}</S.OrderInfoText>
      <S.OrderAnnouncementText>
        주문 내역 확인은 마이페이지내의 주문 내역에서 확인할 수 있습니다.
      </S.OrderAnnouncementText>
    </S.SuccessTextContainerStyle>
  );
};

export default Announcement;
