'use strict';

const React = require('react');
const PropTypes = require('prop-types');

// Add globally for now, future refactor: move caterpillars[] to Redux
const caterpillars = [
  'dryandra',
  'flambeau',
  'saddleback',
  'swallowtail',
];

class Navigation extends React.Component {
  render() {
    // Inline Styling (temporarily)
    const Styles = {
      sort: {
        marginTop: '10px'
      },
      caterpillar: {
        textTransform: 'capitalize'
      }
    }

    // Navigation
    const navItems = this.props.caterpillars.map((caterpillar, i) => {
      return (
        <li key={i}>
          <a
            href={caterpillar.name}
            onClick={this.props.view}
            className={`link ${this.props.active.toLowerCase() === caterpillar.name ? 'txt-bold' : ''}`}
            style={Styles.caterpillar}
            >
            {caterpillar.name}
          </a>
        </li>
      )
    });

    const sortOptions = this.props.sortOptions.map((option, i) => {
      return ( 
        <li key={i}>
          <a className={`link ${this.props.sortStrategy === option ? 'txt-bold' : ''}`} onClick={this.props.sortBy}>
            {option}
          </a>
        </li>
      )
    });

    return (
      <div className="w120-mm pr24-mm mr36-mm mb24 pb72-mm">
        <ul>
          {this.props.caterpillars.length ? navItems : <em>no results</em>}
        </ul>
        <ul style={Styles.sort}>
          Sort by
          {sortOptions}
        </ul>
        <ul style={Styles.sort}>
          Filter by
          <input type="search" placeholder="search" onChange={this.props.filterBy} />
        </ul>
      </div>
    );
  }
}

module.exports = Navigation;
