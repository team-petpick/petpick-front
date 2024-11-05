import { Route, Routes } from 'react-router-dom';
import { ROUTE } from '@constants/ROUTE';
import { Suspense } from 'react';
import MainPage from './Mainpage';
import LoginPage from './Loginpage';
import DetailPage from './Detailpage';
import Mypage from './Mypage';
import ShoppingCartPage from './Shoppingcartpage';
import Loading from '@components/Loading';
import AddressInputPage from './Shoppingcartpage/components/AddressInputPage';
import PaymentConfirmationPage from './PaymentConfirmationPage';
import CheckoutPage from './TossPaymentPage/CheckoutPage';
import FailPage from './TossPaymentPage/FailPage';
import SuccessPage from './TossPaymentPage/SucessPage';

import RegisterMyPet from './RegisterMyPet';
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
        <Route path={ROUTE.ADDRESSINPUTPAGE} element={<AddressInputPage />} />
        <Route path={ROUTE.PAYMENTCONFIRMATIONPAGE} element={<PaymentConfirmationPage />} />
        <Route path={ROUTE.CHECKOUTPAGE} element={<CheckoutPage />} />
        <Route path={ROUTE.SUCCESSPAGE} element={<SuccessPage />} />
        <Route path={ROUTE.FAILPAGE} element={<FailPage />} />
        <Route path={ROUTE.REGISTERMYPET} element={<RegisterMyPet />} />
        <Route path={ROUTE.NOTFOUND} element={<div>404</div>} />
      </Routes>
    </Suspense>
  );
};
