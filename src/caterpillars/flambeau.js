'use strict';

const React = require('react');
const Navigation = require('../navigation');
const Rating = require('../rating');

class Flambeau extends React.Component {
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
            <Navigation active="flambeau" />
          </div>

          <div className="flex-child-mm flex-child--grow-mm">
            <h2 className="mb36">
              <div className="txt-h2 txt-bold inline-block-mm">
                Flambeau
              </div>
              <div className="ml24-mm inline-block-mm txt-em txt-bold txt-m color-gray ">
                dryas iulia
              </div>
            </h2>

            <div className="wmax480">
              <img src="/assets/flambeau.jpg" alt="The Flambeau caterpillar" />
            </div>

            <div className="my24">
              <Rating score={2} />
            </div>

            <p className="mb12">
              This caterpillar looks like a pine forest recently charred in a wildfire.
            </p>
            <p className="mb12">
              I admire the Flambeau, but prefer to do so from afar. If I were a bird, I would not try to eat this caterpillar.
            </p>
            <p className="mb12">
              The Flambeau appeals to something vague but powerful within me —&nbsp;I'm not sure what.
            </p>

            <div className="txt-em txt-s color-gray">
              Reviewed 5/8/2017
            </div>

            <a
              href="https://en.wikipedia.org/wiki/Dryas_iulia"
              className="link flex-parent flex-parent--center-cross mt24"
            >
              <div className="flex-child">
                <svg className="icon mr6" role="presentation">
                  <use xlinkHref="#icon-book" />
                </svg>
              </div>
              <div className="flex-child">
                Learn more on Wikipedia
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Flambeau;
