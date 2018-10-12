import React from 'react';
import PropTypes from 'prop-types';

import '../styles/global';

import SEO from './SEO';

const Layout = ({ children }) => (
  <>
    <SEO />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
