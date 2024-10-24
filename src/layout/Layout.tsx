import Footer from './Footer';
import Header from './Header';
import Banner from './Banner';

import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {/* {isLoggedIn &&  */}
      <Banner />
      {/* } */}
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
