import React from 'react';
// CSS
import { GlobalStyle } from '../style/AppLayoutStyled';
// components
import Navbar from './Navbar';
import Footer from './Footer';

// components/layout.js
const AppLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default AppLayout;
