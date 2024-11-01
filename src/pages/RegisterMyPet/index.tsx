import Layout from '@components/layouts/Layout';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import styled from 'styled-components';
import Header from './components/Header';
import { BANNER_HEIGHT, HEADER_HEIGHT } from '@constants/styles';
import { PETPICK_COLORS } from '@styles/colors';

const RegisterMyPet = () => {
  return (
    <Layout footerVisible={false}>
      <RegisterMyPetWrapper>
        <Header />
        <RegisterContent>
          <LeftSide />
          <RightSide />
        </RegisterContent>
      </RegisterMyPetWrapper>
    </Layout>
  );
};

export default RegisterMyPet;

const RegisterMyPetWrapper = styled.div`
  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT + BANNER_HEIGHT}) px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RegisterContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
  border: 1px solid ${PETPICK_COLORS.GRAY[200]};
  border-radius: 10px;
  padding: 100px 70px;
  margin-top: 28px;
  box-sizing: border-box;
`;
