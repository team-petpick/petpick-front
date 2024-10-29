import Footer from './Footer';
import Header from './Header';
import Banner from './Banner';

import { ReactNode } from 'react';
interface LayoutProps {
  children: ReactNode;
  footerVisible: boolean;
}

const Layout = ({ children, footerVisible }: LayoutProps) => {
  return (
    <div>
      {/* {isLoggedIn &&  */}
      <Banner />
      {/* } */}
      <Header />
      <main>{children}</main>
      {footerVisible && <Footer />}
    </div>
  );
};

export default Layout;
