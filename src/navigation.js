'use strict';

const React = require('react');
const PropTypes = require('prop-types');

class Navigation extends React.Component {
  render() {
    return (
      <div className="w120-mm pr24-mm mr36-mm mb24 pb72-mm">
        <ul>
          <li>
            <a
              href="/flambeau/"
              className={`link ${this.props.active === 'flambeau' ? 'txt-bold' : ''}`}
            >
              Flambeau
            </a>
          </li>
          <li>
            <a
              href="/saddleback/"
              className={`link ${this.props.active === 'saddleback' ? 'txt-bold' : ''}`}
            >
              Saddleback
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

Navigation.propTypes = {
  active: PropTypes.oneOf(['saddleback', 'flambeau'])
};

module.exports = Navigation;
