import styled from 'styled-components';
import Lottie from 'react-lottie-player';
import loading from '@assets/loading.json';

const Loading = () => {
  return (
    <LoadingContainer>
      <Lottie style={{ width: 150, height: 150 }} loop play animationData={loading} />
    </LoadingContainer>
  );
};
export default Loading;

const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1); /* 반투명 배경 */
  backdrop-filter: blur(3px); /* 블러 효과 적용 */
  -webkit-backdrop-filter: blur(5px); /* Safari 지원 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10; /* 메인 컨텐츠 위에 오버레이 */
`;
