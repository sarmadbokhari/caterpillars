'use strict';

const React = require('react');
const Navigation = require('./navigation');

class Home extends React.Component {
  render() {
    return (
      <div className="p24 p72-mm wmax960 mx-auto">
        <div className="mb36 pb6 border-b border--gray-light">
          <h1 className="txt-l txt-uppercase txt-bold txt-fancy">
            <a href="/" className="link link--gray">
              Caterpillar Critique
            </a>
          </h1>
        </div>

        <div className="flex-parent-mm">
          <div className="flex-child-mm flex-child--no-shrink-mm">
            <Navigation />
          </div>

          <div className="flex-child-mm flex-child--grow-mm">
            <p className="mb12">
              This website is dedicated to the critical assessment of Nature's caterpillars.
            </p>
            <p className="mb12">
              I will post a new critique every week, until I run out of caterpillars or willpower. Please enjoy!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Home;
