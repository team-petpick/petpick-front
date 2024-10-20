import { Route, Routes } from 'react-router-dom';
import MainPage from './mainpage';
import DetailPage from './detailpage';
import { ROUTE } from '@constants/ROUTE';
import LoginPage from './loginpage';
import Mypage from './mypage';
import ShoppingCartPage from './shoppingcartpage';

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE.MAINPAGE} element={<MainPage />} />
      <Route path={ROUTE.LOGINPAGE} element={<LoginPage />} />
      <Route path={ROUTE.MYPAGE} element={<Mypage />} />
      <Route path={ROUTE.DETAILPAGE} element={<DetailPage />} />
      <Route path={ROUTE.SHOPPINGCART} element={<ShoppingCartPage />} />
      <Route path={ROUTE.NOTFOUND} element={<div>404</div>} />
    </Routes>
  );
};
