import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
/* /*
Copyright (c) 2021 Kil Hyung-jin, with Reserved Font Name Pretendard.
https://github.com/orioncactus/pretendard

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
http://scripts.sil.org/OFL
./src/assets/assets/fonts/Pretendard-Black.subset.woff2
*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  html,
  body,
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  select,
  table {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }

  ul {
    list-style: none;
  }
 input {
    margin: 0;
    padding: 0;
    border: none;
    color:inherit; 
    font-size: inherit;
 }
  select {
    margin: 0;
    padding: 0;
    border: none;
  }
  button {
    margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;
    background: none;
  }
  input:focus,
  select:focus,
  option:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  img,
  video {
    height: auto;
    max-width: 100%;
  }

@font-face {
  font-family: 'Pretendard';
  font-weight: 900;
  font-style: normal;
  font-display: fallback;
  src: local('Pretendard Black'), url('./assets/fonts/Pretendard-Black.subset.woff') format('woff');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 800;
  font-style: normal;
  font-display: fallback;
  src: local('Pretendard ExtraBold'),
    url('./assets/fonts/Pretendard-ExtraBold.subset.woff') format('woff');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 700;
  font-style: normal;
  font-display: fallback;
  src: local('Pretendard Bold'), url('./assets/fonts/Pretendard-Bold.subset.woff') format('woff');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 600;
  font-style: normal;
  font-display: fallback;
  src: local('Pretendard SemiBold'),
    url('./assets/fonts/Pretendard-SemiBold.subset.woff') format('woff');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 500;
  font-style: normal;
  font-display: fallback;
  src: local('Pretendard Medium'),
    url('./assets/fonts/Pretendard-Medium.subset.woff') format('woff');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
  src: local('Pretendard Regular'),
    url('./assets/fonts/Pretendard-Regular.subset.woff') format('woff');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 300;
  font-style: normal;
  font-display: fallback;
  src: local('Pretendard Light'), url('./assets/fonts/Pretendard-Light.subset.woff') format('woff');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 200;
  font-style: normal;
  font-display: fallback;
  src: local('Pretendard ExtraLight'),
    url('./assets/fonts/Pretendard-ExtraLight.subset.woff') format('woff');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 100;
  font-style: normal;
  font-display: fallback;
  src: local('Pretendard Thin'), url('./assets/fonts/Pretendard-Thin.subset.woff') format('woff');
}
`;
