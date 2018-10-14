import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import '../styles/global';
import theme from '../../config/theme';

import SEO from './SEO';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <SEO />
      {children}
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
