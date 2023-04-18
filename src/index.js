import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import  "./css/index.css";
import { App } from 'App/App';
// import {ThemeProvider} from  "@emotion/react"
// import { theme } from './constants/theme';

const root = createRoot(document.getElementById('root'));


root.render(
  <StrictMode >
      <App >User</App>    
  </StrictMode>
);