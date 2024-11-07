export const ROUTE = {
  MAINPAGE: '/',
  LOGINPAGE: '/login',
  GOOGLECALLBACKPAGE: '/login/oauth2/code/google',
  SIGNUPPAGE: '/signup',
  DETAILPAGE: '/detail/:productId',
  MYPAGE: '/mypage/:userId',
  SHOPPINGCART: '/shoppingcart/:userId',
  ADDRESSINPUTPAGE: '/addressinput/:userId',
  PAYMENTCONFIRMATIONPAGE: '/paymentconfirm/:userId',
  CHECKOUTPAGE: '/checkout',
  SUCCESSPAGE: '/success',
  FAILPAGE: '/fail',
  REGISTERMYPET: '/registermypet/:step',
  PAYMENTSUCCESSPAGE: '/paymentsuccess/:userId',
  NOTFOUND: '*',
} as const;
