import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from '../globalStyle.ts';
import Modal from 'react-modal';

Modal.setAppElement('#root');
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>,
);
