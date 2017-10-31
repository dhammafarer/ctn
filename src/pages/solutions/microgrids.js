import React from 'react';
import PropTypes from 'prop-types';
//import Link from 'gatsby-link';

const ComponentBox = ({img, heading}) => (
  <figure className="image microgrid-box">
    <img src={img}/>
    <span className="heading is-hidden-mobile">{heading}</span>
  </figure>
);

ComponentBox.propTypes = {
  img: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired
};

const Microgrids = () => (
  <div>
    <div className="hero is-info is-medium microgrids-hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-2 is-uppercase page-title">
            Hybrid Microgrids
          </h1>
          <h2 className="subtitle">
            Some Kind of Subtitle
          </h2>
        </div>
      </div>
    </div>

    <section className="microgrid-boxes">
      <ComponentBox
        img={require('../../assets/img/icon_wood.svg')}
        heading="Biomass"
      />
      <ComponentBox
        img={require('../../assets/img/icon_solar.svg')}
        heading="Solar"
      />
      <ComponentBox
        img={require('../../assets/img/icon_wind.svg')}
        heading="Wind"
      />
      <ComponentBox
        img={require('../../assets/img/icon_diesel.svg')}
        heading="Diesel"
      />
      <ComponentBox
        img={require('../../assets/img/icon_battery.svg')}
        heading="Battery"
      />
    </section>



  </div>
);

export default Microgrids;
