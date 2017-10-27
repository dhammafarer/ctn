/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './index.scss';

class Header extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu () {
    let menu = this.state.menu;
    let el = document.querySelector('.wrapper');
    let handler = () => this.setState({menu: false});
    if (!menu) {
      this.setState({menu: true});
      el.addEventListener('click', handler);
    } else {
      this.setState({menu: false});
      el.removeEventListener('click', handler);
    }
  }

  render () {
    return (
      <nav className="navbar" role="navigation" aria-label="main-navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img src={require('../assets/img/ctn-FONT_003.png')}/>
            </Link>
            <a className={'navbar-burger ' + (this.state.menu ? 'is-active' : '')}
              onClick={this.toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
          <div className={'navbar-menu ' + (this.state.menu ? 'is-active' : '')}>
            <div className="navbar-start">
              <Link className="navbar-item" to="/about/" onClick={this.toggleMenu}>
                About
              </Link>
              <Link className="navbar-item" to="/services/" onClick={this.toggleMenu}>
                Services
              </Link>
              <Link className="navbar-item" to="/contact/" onClick={this.toggleMenu}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const Address = ({children}) => (
  <div className="column">
    <address className="address">
      {children}
    </address>
  </div>
);

Address.propTypes = {
  children: PropTypes.object.isRequired
};

const Footer = () => (
  <div className="footer has-text-grey">
    <div className="container">
      <div className="content">

        <section className="footer-brand">
          <span className="has-text-info is-uppercase has-text-weight-semibold">
            Controlnet International
          </span>
          <br />
          <span className="has-text-white">
            Expert in Power System Integration
          </span>
        </section>

        <section className="footer-contact-details">
          <div className="columns">
            <Address>
              <p>
                Taipei Headquarters:
                <br />
                No. 33, Lane 21,
                <br />
                Sec. 6 Minchuan E.Rd.
                <br />
                Neihu District, Taipei 11494
                <br />
                Taiwan
              </p>
            </Address>
            <Address>
              <p>
                Taichung Branch:
                <br />
                No. 33, Lane 21,
                <br />
                Sec. 6 Minchuan E.Rd.
                <br />
                Neihu District, Taipei 11494
                <br />
                Taiwan
              </p>
            </Address>
            <Address>
              <p>
                Kaohsiung Branch:
                <br />
                No. 33, Lane 21,
                <br />
                Sec. 6 Minchuan E.Rd.
                <br />
                Neihu District, Taipei 11494
                <br />
                Taiwan
              </p>
            </Address>
            <Address>
              <p>
                Shanghai Branch:
                <br />
                No. 33, Lane 21,
                <br />
                Sec. 6 Minchuan E.Rd.
                <br />
                Neihu District, Taipei 11494
                <br />
                Taiwan
              </p>
            </Address>
          </div>
        </section>

        <section className="footer-navigation">
          <div className="columns">
            <div className="column is-half">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="column is-half">
              <p>
                Copyright 2017, Controlnet International
              </p>
            </div>
          </div>
        </section>
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
