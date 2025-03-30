import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Login from './Login_Page.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Login />
  </StrictMode>
);
