import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

const background = require('../assets/img/power-1549122_1920.jpg');
const overlay = 'rgba(56,56,56,0.4)';
const heroBodyStyles = {
  background: `linear-gradient(${overlay}, ${overlay}), url(${background}) no-repeat center bottom`,
  backgroundSize: 'cover'
};

const Card = ({children, to, img, title}) => (
  <div className="column is-3">
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={img}/>
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-4 has-text-primary">
          {title}
        </p>
        <hr />
        {children}
        <p className="solution-link">
          <Link className="button is-info is-small"
            to={`/solutions${to}`}
          >
            Read More
          </Link>
        </p>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  img: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
};

const IndexPage = () => (
  <div>

    <section className="hero is-light is-medium">
      <div className="separator"></div>
      <div className="hero-body" style={heroBodyStyles}>
        <div className="container has-text-centered">
          <h1 className="title is-2 is-uppercase has-text-white">
            Controlnet International
          </h1>
          <h2 className="subtitle has-text-white">
            Expert in Power System Integration
          </h2>
        </div>
      </div>
      <div className="separator"></div>
    </section>

    <section className="hero is-small is-white">
      <div className="hero-body">
        <div className="container">
          <div className="has-text-centered summary">
            <h2 className="summary-text">
              Controlnet International Inc. has designed and developed
              integrated power system solutions with focus on meeting specific user
              needs in diverse industries and applications for over 27 years.
            </h2>
            <div className="summary-key-points">
              <span>
                Cost Efficient
              </span>
              <div className="dot"></div>
              <span>
                Customized Solutions
              </span>
              <div className="dot"></div>
              <span>
                Long Term Support
              </span>
            </div>
            <Link className="button is-primary is-outlined is-medium"
              to="/about"
            >
              More About The Company
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="hero has-text-centered is-light">
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-warning is-uppercase">
            Complete Solutions
          </h1>
          <h2>
            Controlnet offers complete EPC solutions in the fields of microgrids, automation systems, SCADA and more.
          </h2>
          <hr />

          <div className="columns">
            <Card
              to="/microgrids"
              img={require('../assets/img/boat-2345242_1280.jpg')}
              title="Microgrids"
            >
              <p>Remote areas and what not</p>
            </Card>

            <Card
              to="/flood-control"
              img={require('../assets/img/tropical-828997_1280.jpg')}
              title="Flood Control"
            >
              <p>Pumping station automation</p>
            </Card>

            <Card
              to="/microgrids"
              img={require('../assets/img/terraces-2275061_1280.jpg')}
              title="SCADA"
            >
              <p>Remote areas and what not</p>
            </Card>

            <Card
              to="/microgrids"
              img={require('../assets/img/reflection-2339624_1280.jpg')}
              title="Automation"
            >
              <p>Remote areas and what not</p>
            </Card>
          </div>
        </div>
      </div>
    </section>

  </div>
);

export default IndexPage;
