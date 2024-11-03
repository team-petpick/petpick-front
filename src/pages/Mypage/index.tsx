import Layout from '@layouts/Layout';
import MyInfo from './components/MyInfo';
import MyPetInfo from './components/MyPetInfo';
import FrequentlyUsedMenu from './components/FrequentlyUsedMenu';
import * as S from './styles';
import MyPageContent from './components/MyPageContent';

const Mypage = () => {
  return (
    <Layout footerVisible={false}>
      <S.MyPageWrapper>
        <S.LeftSideBar>
          <MyInfo />
          <MyPetInfo />
          <FrequentlyUsedMenu />
        </S.LeftSideBar>
        <MyPageContent />
      </S.MyPageWrapper>
    </Layout>
  );
};

export default Mypage;
