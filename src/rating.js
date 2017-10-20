'use strict';

const React = require('react');
const PropTypes = require('prop-types');

class Rating extends React.Component {
  render() {
    const stars = [];
    for (let i = 1; i < 4; i++) {
      const starColor = i <= this.props.score ? 'yellow' : 'gray-light';
      stars.push(
        <div className="flex-child" key={i}>
          <svg className={`icon icon--l mr6 color-${starColor}`} role="presentation">
            <use xlinkHref="#icon-star" />
          </svg>
        </div>
      );
    }

    return (
      <div className="flex-parent">
        {stars}
      </div>
    );
  }
}

Rating.propTypes = {
  score: PropTypes.oneOf([1, 2, 3]).isRequired
};

module.exports = Rating;
