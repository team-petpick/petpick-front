import Footer from './Footer';
import Header from './Header';
import Banner from './Banner';

import { ReactNode } from 'react';
interface ILayoutProps {
  children?: ReactNode;
  footerVisible?: boolean;
}

const Layout = ({ children, footerVisible }: ILayoutProps) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
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
