import React from 'react';
//import Link from 'gatsby-link';
const background = require('../assets/img/reflection-2339624_1280.jpg');

const IndexPage = () => (
  <div>

    <div className="hero is-light is-large">
      <div className="hero-body" style={{background: `url(${background}) no-repeat center bottom`, backgroundSize: 'cover'}}>
        <div className="container">
          <h1 className="title">
            Title
          </h1>
        </div>
      </div>
    </div>

  </div>
);

export default IndexPage;
