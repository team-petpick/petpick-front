import styled from 'styled-components';
import { PETPICK_COLORS } from '@constants/colors';
import { TextStyles } from '../styles/textStyles';
const Footer = () => {
  return (
    <FooterLayout>
      <FooterBody>
        <BodyButton>
          <ButtonImage
            src="https://res.kurly.com/pc/ico/2208/logo_tosspayments.svg"
            alt="payments 로고"
          />
          <p>
            토스페이먼츠 구매안전(에스크로)
            <br />
            서비스를 이용하실 수 있습니다.
          </p>
        </BodyButton>
        <BodyButton>
          <img
            src="https://www.eprivacy.or.kr/images/mng/sub/mark1_eprivacy_plus.png"
            alt="eprivacy plus 로고"
          />
          <p>
            개인정보보호 우수 웹사이트 ·
            <br />
            개인정보처리시스템 인증 (ePRIVACY PLUS)
          </p>
        </BodyButton>
      </FooterBody>
      <FooterBottom>
        컬리에서 판매되는 상품 중에는 컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓)
        상품이 포함되어 있습니다.
        <br />
        마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다.
        컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.
        <span>CompanyName @ 202X. All rights reserved.</span>
      </FooterBottom>
    </FooterLayout>
  );
};

export default Footer;

const FooterLayout = styled.footer`
  width: 100%;
`;
const FooterBody = styled.body`
  display: flex;
  justify-content: space-between;
  padding: 26px 33px;
  border-top: 1px solid ${PETPICK_COLORS.GRAY[700]};
`;
const ButtonImage = styled.img`
  width: 34px;
`;
const BodyButton = styled.button`
  display: flex;
  text-align: left;
  gap: 10px;
  color: ${PETPICK_COLORS.GRAY[600]};
  ${TextStyles.caption.xsmallR}
`;
const FooterBottom = styled.div`
  background: #f6f6f6;
  display: flex;
  flex-direction: column;
  padding: 20px 0px 30px;
  text-align: center;
  color: ${PETPICK_COLORS.GRAY[600]};
  ${TextStyles.caption.xsmallR}
  line-height: 15px;
`;
