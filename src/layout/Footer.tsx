import * as S from './styles/Footer.style';
const Footer = () => {
  return (
    <S.FooterLayout>
      <S.FooterContainer>
        <S.FooterHeader>
          <div>
            <S.MenuList>
              <li>펫픽 소개</li>
              <li>펫픽소개영상</li>
              <li>투자정보</li>
              <li>인재채용</li>
              <li>이용약관</li>
              <li>개인정보처리방침</li>
              <li>이용안내</li>
            </S.MenuList>
          </div>
          <S.CompanyInfo>
            법인명 (상호) : 주식회사 펫픽 | 사업자등록번호 : 261-81-23567
            <br />
            통신판매업 : 제 2018-서울강남-01646 호<br />
            주소 : 서울 강남구 선릉로 428, 4층(대치동) <br />
            대표이사 : 이효린
            <br />
            채용문의 : kyoul10121@gmail.com
            <br />
          </S.CompanyInfo>
        </S.FooterHeader>
        <S.FooterBody>
          <S.BodyButton>
            <S.ButtonImage
              src="https://res.kurly.com/pc/ico/2208/logo_tosspayments.svg"
              alt="payments 로고"
            />
            <p>
              토스페이먼츠 구매안전(에스크로)
              <br />
              서비스를 이용하실 수 있습니다.
            </p>
          </S.BodyButton>
          <S.BodyButton>
            <S.ButtonImage
              src="https://www.eprivacy.or.kr/images/mng/sub/mark1_eprivacy_plus.png"
              alt="eprivacy plus 로고"
            />
            <p>
              개인정보보호 우수 웹사이트 ·
              <br />
              개인정보처리시스템 인증 (ePRIVACY PLUS)
            </p>
          </S.BodyButton>
        </S.FooterBody>
      </S.FooterContainer>
      <S.CopyrightInfo>
        컬리에서 판매되는 상품 중에는 컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓)
        상품이 포함되어 있습니다.
        <br />
        마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다.
        컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.
        <span>CompanyName @ 202X. All rights reserved.</span>
      </S.CopyrightInfo>
    </S.FooterLayout>
  );
};

export default Footer;
