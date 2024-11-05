import { BANNER_HEIGHT } from '@constants/styles';
import styled from 'styled-components';

const Banner = () => {
  return (
    <BannerLayout>
      <BannerText>
        지금 가입하고, <b>1만원 할인 쿠폰 </b>
        받아가세요!
      </BannerText>
    </BannerLayout>
  );
};

export default Banner;

const BannerLayout = styled.div`
  width: 100%;
  background: #848ac4;
`;
const BannerText = styled.p`
  color: #fff;
  text-align: center;
  font-size: 14px;
  line-height: 42px;
  height: ${BANNER_HEIGHT}px;
`;
