import { Route, Routes } from 'react-router-dom';
import MainPage from './Mainpage';
import DetailPage from './Detailpage';
import { ROUTE } from '@constants/ROUTE';
import LoginPage from './Loginpage';
import Mypage from './Mypage';
import ShoppingCartPage from './Shoppingcartpage';
import { Suspense } from 'react';
import Loading from '@components/Loading';
import PaymentConfirmationPage from './PaymentConfirmationPage';
export const Router = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path={ROUTE.MAINPAGE} element={<MainPage />} />
        <Route path={ROUTE.LOGINPAGE} element={<LoginPage />} />
        <Route path={ROUTE.SIGNUPPAGE} element={<LoginPage />} />
        <Route path={ROUTE.MYPAGE} element={<Mypage />} />
        <Route path={ROUTE.DETAILPAGE} element={<DetailPage />} />
        <Route path={ROUTE.SHOPPINGCART} element={<ShoppingCartPage />} />
        <Route path={ROUTE.PAYMENTCONFIRMATIONPAGE} element={<PaymentConfirmationPage />} />
        <Route path={ROUTE.NOTFOUND} element={<div>404</div>} />
      </Routes>
    </Suspense>
  );
};
