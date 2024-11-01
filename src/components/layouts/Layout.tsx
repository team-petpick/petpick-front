// Layout.tsx
import Footer from './Footer';
import Header from './Header';
import Banner from './Banner';
import { ReactNode, memo } from 'react';

interface ILayoutProps {
  children: ReactNode;
  footerVisible?: boolean;
}

const Layout = ({ children, footerVisible }: ILayoutProps) => {
  return (
    <div>
      <Banner />
      <Header />
      <main>{children}</main>
      {footerVisible && <Footer />}
    </div>
  );
};

export default memo(Layout); // Layout을 memo로 감싸기
