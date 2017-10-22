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

    this.sortBy = this.sortBy.bind(this);
    this.filterBy = this.filterBy.bind(this);
  }

  sortBy(e) {
    let newStrategy = e.target.innerText
    
    this.setState(prevState => ({
      sortStrategy: newStrategy
    }));

    switch(newStrategy) {
      case 'alphabeta':
        this.state.caterpillars.sort((a,b) => a.name > b.name ? 1 : -1)
        break;
      case 'rating':
        this.state.caterpillars.sort((a,b) => b.rating - a.rating)
        break;
    }
  }

  filterBy(e) {
    let query = e.target.value;
    if (!query) {
      this.setState({
        caterpillars
      })
      return;
    }

    console.log(query);

    let newList = this.state.caterpillars.filter((caterpillar) => {
      return caterpillar.name.toLowerCase().includes(query);
    })

    this.setState({
      caterpillars: newList
    })
  }

  render() {
    // Inline Styling
    const Styles = {
      sort: {
        marginTop: '10px'
      },
      caterpillar: {
        textTransform: 'capitalize'
      }
    }

    // Navigation
    const navItems = this.state.caterpillars.map((caterpillar, i) => {
      return (
        <li key={i}>
          <a 
            href={`/${caterpillar.name}/`}
            className={`link ${this.props.active === caterpillar.name ? 'txt-bold' : ''}`}
            style={Styles.caterpillar}
            >
            {caterpillar.name}
          </a>
        </li>
      )
    });

    const sortOptions = this.state.sortOptions.map((option, i) => {
      return ( 
        <li key={i}>
          <a className={`link ${this.state.sortStrategy === option ? 'txt-bold' : ''}`} onClick={(e) => this.sortBy(e)}>
            {option}
          </a>
        </li>
      )
    });

    return (
      <div className="w120-mm pr24-mm mr36-mm mb24 pb72-mm">
        <ul>
          {this.state.caterpillars.length ? navItems : <em>no results</em>}
        </ul>
        <ul style={Styles.sort}>
          Sort by
          {sortOptions}
        </ul>
        <ul style={Styles.sort}>
          Filter by
          <input type="search" placeholder="search" onChange={this.filterBy} />
        </ul>
      </div>
    );
  }
}

Navigation.propTypes = {
  active: PropTypes.oneOf(caterpillars.map(caterpillar => caterpillar.name))
};

module.exports = Navigation;
