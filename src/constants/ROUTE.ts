export const ROUTE = {
  MAINPAGE: '/',
  LOGINPAGE: '/login',
  SIGNUPPAGE: '/signup',
  DETAILPAGE: '/detail/:productId',
  MYPAGE: '/mypage/:userId',
  SHOPPINGCART: '/shoppingcart/:userId',
  ADDRESSINPUTPAGE: '/addressinput/:userId',
  PAYMENTCONFIRMATIONPAGE: '/paymentconfirm/:userId',
  REGISTERMYPET: '/registermypet/:userId',
  NOTFOUND: '*',
} as const;
