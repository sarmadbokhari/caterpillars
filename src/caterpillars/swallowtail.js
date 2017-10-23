'use strict';

const React = require('react');
const Navigation = require('../navigation');
const Rating = require('../rating');

class Swallowtail extends React.Component {
  render() {
    return (
      <div>
        <h2 className="mb36">
          <div className="txt-h2 txt-bold inline-block-mm">
            Swallowtail
          </div>
          <div className="ml24-mm inline-block-mm txt-em txt-bold txt-m color-gray ">
            Papilionidae
          </div>
        </h2>

        <div className="wmax480">
          <img src="/assets/swallowtail.jpg" alt="The Swallowtail caterpillar" />
        </div>

        <div className="my24">
          <Rating score={2} />
        </div>

        <p className="mb12">
          This caterpillar looks like a pine forest recently charred in a wildfire.
        </p>
        <p className="mb12">
          I admire the Swallowtail, but prefer to do so from afar. If I were a bird, I would not try to eat this caterpillar.
        </p>
        <p className="mb12">
          The Swallowtail appeals to something vague but powerful within me —&nbsp;I'm not sure what.
        </p>

        <div className="txt-em txt-s color-gray">
          Reviewed 5/8/2017
        </div>

        <a
          href="https://en.wikipedia.org/wiki/Swallowtail_butterfly"
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
    );
  }
}

module.exports = Swallowtail;
