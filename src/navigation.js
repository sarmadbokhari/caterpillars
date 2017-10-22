'use strict';

const React = require('react');
const PropTypes = require('prop-types');
const caterpillars = [
  { name: 'dryandra', rating: 1 },
  { name: 'flambeau', rating: 2 },
  { name: 'saddleback', rating: 3 },
  { name: 'swallowtail', rating: 2 }
];

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortOptions: ['alphabeta', 'rating'],
      sortStrategy: 'alphabeta',
      caterpillars: caterpillars
    };
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
  active: PropTypes.oneOf(caterpillars.map(caterpillar => caterpillar.name))
};

module.exports = Navigation;
