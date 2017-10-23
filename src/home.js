'use strict';

const React = require('react');
const Navigation = require('./navigation');
const Dryandra = require('./caterpillars/dryandra');
const Flambeau = require('./caterpillars/flambeau');
const Saddleback = require('./caterpillars/saddleback');
const Swallowtail = require('./caterpillars/swallowtail');
const caterpillars = [
  { name: 'dryandra', rating: 1 },
  { name: 'flambeau', rating: 2 },
  { name: 'saddleback', rating: 3 },
  { name: 'swallowtail', rating: 2 }
]

function showHome() {
  return (
    <div>
      <p className="mb12">
        This website is dedicated to the critical assessment of Nature's caterpillars.
      </p>
      <p className="mb12">
        I will post a new critique every week, until I run out of caterpillars or willpower. Please enjoy!
      </p>
    </div>
  )
}

function showCaterpillar(caterpillar) {
  switch(caterpillar) {
    case 'Dryandra':
      return <Dryandra />;
    case 'Flambeau':
      return <Flambeau />;
    case 'Saddleback':
      return <Saddleback />;
    case 'Swallowtail':
      return <Swallowtail />;
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortOptions: ['alphabeta', 'rating'],
      sortStrategy: 'alphabeta',
      // Future refactor: get caterpillars[] from global state
      caterpillars,
      active: ''
    };

    this.sortBy = this.sortBy.bind(this);
    this.filterBy = this.filterBy.bind(this);
    this.view = this.view.bind(this);
  }

  sortBy(e) {
    let newStrategy = e.target.innerText
    
    this.setState(prevState => ({
      sortStrategy: newStrategy
    }));

    let copy = this.state.caterpillars.slice();

    switch(newStrategy) {
      case 'alphabeta':
        // A-Z
        copy.sort((a,b) => a.name > b.name ? 1 : -1)
        break;
      case 'rating':
        // highest top, decreasing order
        copy.sort((a,b) => b.rating - a.rating)
        break;
    }

    this.setState({ caterpillars: copy })
  }

  filterBy(e) {
    let query = e.target.value;
    // if there's no query or it's deleted, revert back to global caterpillars
    if (!query) {
      this.setState({
        caterpillars,
        sortStrategy: 'alphabeta'
      })

      return;
    }

    let newList = this.state.caterpillars.filter((caterpillar) => {
      return caterpillar.name.toLowerCase().includes(query.toLowerCase());
    })
    
    // update state caterpillars with filtered list
    this.setState({
      caterpillars: newList
    })
  }

  view(e) {
    var caterpillar = e.target.innerText;

    this.setState({
      active: caterpillar
    })
  }

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
            <Navigation caterpillars={this.state.caterpillars} 
                        sortOptions={this.state.sortOptions}
                        sortStrategy={this.state.sortStrategy}
                        active={this.state.active}
                        view={this.view}
                        sortBy={this.sortBy}
                        filterBy={this.filterBy} />
          </div>

          <div className="flex-child-mm flex-child--grow-mm">
            {!this.state.active ? showHome() : showCaterpillar(this.state.active) }
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Home;
