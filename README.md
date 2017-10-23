# caterpillars

## Process
- Add caterpillars[] to Navigation that is utilized by PropTypes and within the Navigation component
- Add sortOptions `['alphabeta', 'rating']` and sortStrategy `'alphabeta'` to Component state
- Add sortBy and filterBy methods and bind to class
- Remove hard coded caterpillar template and .map() over caterpillars[] to build navItems and sortOptions[] to build sorting options template

## Enhancements
- The biggest problem with with adding caterpillars[] to Navigation is losing state when you nav to a caterpillar page. Because Navigation is rendered anew in *each* caterpillar template, simply navigating will reset any sortBy and filterBy state changes
- The best enhancement for this would be to store caterpillars in a global state container (Redux, MobX, etc)
- Another enhancement could be to extrapolate ALL state out of Navigation and any caterpillar views and make these stateless functional components. Thereafter, you would simply have Home store caterpillars[], sortBy, filterBy, and an active view and pass these down into Navigation. A preliminary example of this is done in the refactor branch: https://github.com/sarmadbokhari/caterpillars/tree/refactor
