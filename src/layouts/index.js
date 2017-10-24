import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './index.scss';

const Header = () => (
  <nav className="navbar is-primary" role="navigation" aria-label="main-navigation">
    <div className="container">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <span className="title has-text-white">CTN</span>
        </Link>
        <button className="button is-primary navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/page-2/">
            About
          </Link>
          <Link className="navbar-item" to="/page-2/">
            Services
          </Link>
          <Link className="navbar-item" to="/page-2/">
            Contact
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <p>
          footer text
        </p>
      </div>
    </div>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div className="site">
    <Helmet
      title="Controlnet"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <Header />
    <div className="wrapper">
      {children()}
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
