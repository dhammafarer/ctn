import React from 'react';
import PropTypes from 'prop-types';
import aboutText from '../assets/text/about.js';

const heroBodyStyles = {
  backgroundImage: `url(${require('../assets/img/Sky-Sun-Cloudy.jpg')})`,
  backgroundPosition: 'center 45%',
  backgroundRepeat: 'no-repeat'
};

const Fact = ({heading,title}) => (
  <div className="columns">
    <div className="column has-text-centered">
      <p className="heading">{heading}</p>
      <p className="title has-text-primary">{title}</p>
    </div>
  </div>
);

Fact.propTypes = {
  heading: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

const Tag = ({text}) => (
  <span className="tag is-info is-small is-uppercase">
    {text}
  </span>
);

Tag.propTypes = {
  text: PropTypes.string.isRequired
};

const AboutPage = () => (
  <div>
    <div className="separator"></div>
    <div className="hero is-info is-small">
      <div className="hero-body" style={heroBodyStyles}>
        <div className="container">
          <h1 className="title is-3 is-uppercase">
            About
          </h1>
        </div>
      </div>
    </div>
    <div className="separator"></div>

    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-3 has-text-centered">
            <img className="about-logo" src={require('../assets/img/ctn-logo.jpg')}/>
          </div>
          <div className="column is-7 about-title">
            <h1 className="title is-3 is-uppercase has-text-primary">
              Controlnet International
            </h1>
            <h2 className="subtitle is-uppercase">
              Expert in Power System Integration
            </h2>
          </div>
        </div>

        <div className="columns about-summary">
          <div className="column is-3 about-facts">
            <Fact heading="Established" title="1990"/>
            <Fact heading="In Power Services" title="27 YRS"/>
            <Fact heading="Projects Value" title="US $160M"/>
            <Fact heading="Staff" title="180+"/>
            <Fact heading="Offices" title="4"/>
          </div>
          <div className="column is-7">
            <div className="content about-description">
              <p>
                Controlnet International Inc. has designed and developed integrated power system solutions with focus on meeting specific user needs in diverse industries and applications for over 27 years.
              </p>
              <p>
                Since its founding, Controlnet has maintained a long-standing
                cooperation with Taiwan Power Company and China Telecom Company,
                providing engineering services for power infrastructure with monitoring
                and automation systems in numerous projects
                in Taiwan and overseas.
              </p>
              <p>
                With progressive efforts and investment in R&D in independent power
                generation, energy storage and energy management technologies,
                Controlnet has played a leading role in deploying microgrid systems and
                services in Taiwan’s Fushan ecological area and the outlying Penghu
                Qimei island which is the country’s first microgrid powered industrial
                zone.
              </p>
              <div className="tags">
                <Tag text="Microgrids" />
                <Tag text="Power SCADA" />
                <Tag text="Flood Control Automation" />
                <Tag text="Substation Automation" />
                <Tag text="Distribution Feeder Automation" />
                <Tag text="Energy Management" />
                <Tag text="Building Automation" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
);

export default AboutPage;
