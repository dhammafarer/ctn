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

const FeatureCard = ({title, body}) => (
  <div className="feature-card box">
    <div className="feature-card-body">
      <h3 className="title is-5 feature-card-title">
        {title}
      </h3>
      <div className="feature-card-separator"></div>
      <p>
        {body}
      </p>
    </div>
  </div>
);

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

const Microgrids = () => (
  <div>
    <div className="hero is-info is-medium microgrids-hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-2 is-uppercase page-title">
            Hybrid Microgrids
          </h1>
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

    <section className="section microgrids-intro">
      <div className="container has-text-centered">
        <h2 className="title is-3">
          Independent Hybrid Power
        </h2>
        <h3 className="subtitle">
          Systems For Islands and Remote Areas
        </h3>
        <hr />
        <p className="microgrids-intro">
          The Independent Hybrid Power System has been designed
          by Controlnet to provide a dependable long-term energy
          suppy that can drive a remote island to economic growth.
          It is an integrated system of sustainable generation and
          power management technologies which deliver two
          types of energy, electrical and thermal, with the following
          characteristics:
        </p>
        <div className="columns feature-cards">
          <div className="column is-third">
            <FeatureCard
              title="Reliable"
              body="Local resources with multiple generation methods and active battery storage"
            />
          </div>
          <div className="column is-third">
            <FeatureCard
              title="Efficent"
              body="Optimized scale and construction without long-distance transmission losses"
            />
          </div>
          <div className="column is-third">
            <FeatureCard
              title="Stable"
              body="Self sufficient non-stop operation supported by a buffer battery and back-up Diesel generator"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Microgrids;
