import Footer from './Footer';
import Header from './Header';
import Banner from './Banner';

import { ReactNode } from 'react';
interface ILayoutProps {
  children: ReactNode;
  footerVisible: boolean;
}

const Layout = ({ children, footerVisible }: ILayoutProps) => {
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
