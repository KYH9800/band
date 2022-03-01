import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

// components/layout.js
const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
