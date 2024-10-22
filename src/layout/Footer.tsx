import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterLayout>
      <FooterContainer>
        <FooterHeader>
          <div>
            <MenuList>
              <li>펫픽 소개</li>
              <li>펫픽소개영상</li>
              <li>투자정보</li>
              <li>인재채용</li>
              <li>이용약관</li>
              <li>개인정보처리방침</li>
              <li>이용안내</li>
            </MenuList>
          </div>
          <CompanyInfo>
            법인명 (상호) : 주식회사 펫픽 | 사업자등록번호 : 261-81-23567
            <br />
            통신판매업 : 제 2018-서울강남-01646 호<br />
            주소 : 서울 강남구 선릉로 428, 4층(대치동) <br />
            대표이사 : 이효린
            <br />
            채용문의 : kyoul10121@gmail.com
            <br />
          </CompanyInfo>
        </FooterHeader>
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
            <ButtonImage
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
      </FooterContainer>
      <CopyrightInfo>
        컬리에서 판매되는 상품 중에는 컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓)
        상품이 포함되어 있습니다.
        <br />
        마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다.
        컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.
        <span>CompanyName @ 202X. All rights reserved.</span>
      </CopyrightInfo>
    </FooterLayout>
  );
};

export default Footer;
const CompanyInfo = styled.div`
  color: ${({ theme }) => theme.color.gray};
  font-size: 12px;
  font-weight: 400;
`;
const MenuList = styled.ul`
  display: flex;
  padding-bottom: 29px;
  gap: 14px;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.color.black};
`;
const FooterLayout = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  border-top: 1px solid ${({ theme }) => theme.color.grayLine};
`;
const FooterContainer = styled.div`
  width: 1050px;
  display: flex;
  flex-direction: column;
`;
const FooterHeader = styled.header`
  width: 100%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
`;
const FooterBody = styled.body`
  width: 100%;
  display: flex;
  align-self: center;
  /* justify-content: space-between; */
  gap: 30px;
  padding: 26px 33px;
  border-top: 1px solid ${({ theme }) => theme.color.grayLine};
`;
const ButtonImage = styled.img`
  height: 34px;
`;
const BodyButton = styled.button`
  display: flex;
  text-align: left;
  gap: 10px;
  color: ${({ theme }) => theme.color.gray};
  font-size: 10px;
  line-height: 14.5px;
`;
const CopyrightInfo = styled.div`
  width: 100%;
  background: #f6f6f6;
  display: flex;
  flex-direction: column;
  padding: 20px 0px 30px;
  text-align: center;
  color: ${({ theme }) => theme.color.gray};
  font-size: 10px;
  line-height: 15px;
`;
