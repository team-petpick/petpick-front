import { useEffect, useState } from 'react';

export const useAuthStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const accessToken = localStorage.getItem('accessToken');
      setIsLoggedIn(!!accessToken);
    };
    checkLoginStatus();
  }, []);
  return isLoggedIn;
};
