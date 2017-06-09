const DEFAULT_STATE = {
  searchTerm: '',
  pokemonList: [{"id": 1},{"id": 2},{"id": 3},{"id": 4},{"id": 5},{"id": 6},{"id": 7},{"id": 8},{"id": 9},{"id": 10},{"id": 11},{"id": 12},{"id": 13},{"id": 14},{"id": 15},{"id": 16},{"id": 17},{"id": 18},{"id": 19},{"id": 20},{"id": 21},{"id": 22},{"id": 23},{"id": 24},{"id": 25},{"id": 26},{"id": 27},{"id": 28},{"id": 29},{"id": 30},{"id": 31},{"id": 32},{"id": 33},{"id": 34},{"id": 35},{"id": 36},{"id": 37},{"id": 38},{"id": 39},{"id": 40},{"id": 41},{"id": 42},{"id": 43},{"id": 44},{"id": 45},{"id": 46},{"id": 47},{"id": 48},{"id": 49},{"id": 50},{"id": 51},{"id": 52},{"id": 53},{"id": 54},{"id": 55},{"id": 56},{"id": 57},{"id": 58},{"id": 59},{"id": 60},{"id": 61},{"id": 62},{"id": 63},{"id": 64},{"id": 65},{"id": 66},{"id": 67},{"id": 68},{"id": 69},{"id": 70},{"id": 71},{"id": 72},{"id": 73},{"id": 74},{"id": 75},{"id": 76},{"id": 77},{"id": 78},{"id": 79},{"id": 80},{"id": 81},{"id": 82},{"id": 83},{"id": 84},{"id": 85},{"id": 86},{"id": 87},{"id": 88},{"id": 89},{"id": 90},{"id": 91},{"id": 92},{"id": 93},{"id": 94},{"id": 95},{"id": 96},{"id": 97},{"id": 98},{"id": 99},{"id": 100},{"id": 101},{"id": 102},{"id": 103},{"id": 104},{"id": 105},{"id": 106},{"id": 107},{"id": 108},{"id": 109},{"id": 110},{"id": 111},{"id": 112},{"id": 113},{"id": 114},{"id": 115},{"id": 116},{"id": 117},{"id": 118},{"id": 119},{"id": 120},{"id": 121},{"id": 122},{"id": 123},{"id": 124},{"id": 125},{"id": 126},{"id": 127},{"id": 128},{"id": 129},{"id": 130},{"id": 131},{"id": 132},{"id": 133},{"id": 134},{"id": 135},{"id": 136},{"id": 137},{"id": 138},{"id": 139},{"id": 140},{"id": 141},{"id": 142},{"id": 143},{"id": 144},{"id": 145},{"id": 146},{"id": 147},{"id": 148},{"id": 149},{"id": 150}],
  selectedPokemon: {}
};

const compareID = (a, b) => {
  return a.id - b.id;
}

const searchReducer = (state, action) => {
  return Object.assign({}, state, { searchTerm: action.searchTerm });
}

const pokemonReducer = (state, action) => {
  let newPokemonList = state.pokemonList.slice();
  newPokemonList.splice(newPokemonList.findIndex((pokemon)=>{pokemon.id == action.pokemon.id}), 1, action.pokemon);
  if (newPokemonList.length > 1) {
    newPokemonList.sort(compareID);
  }
  return Object.assign({}, state, { pokemonList: newPokemonList });
};

const setPokemonList = (state, action) => {
  let newPokemonList = state.pokemonList.slice();
  newPokemonList.push(action.pokemon);
  if (newPokemonList.length > 1) {
    newPokemonList.sort(compareID);
  }
  return Object.assign({}, state, { pokemonList: newPokemonList });
};

const selectPokemon = (state, action) => {
  return Object.assign({}, state, { selectedPokemon: action.selectedPokemon });
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return searchReducer(state, action);
    case 'SET_POKEMON_LIST':
      return setPokemonList(state, action);
    case 'UPDATE_POKEMON_LIST':
      return pokemonReducer(state, action);
    case 'SELECT_POKEMON':
      return selectPokemon(state, action);
    default:
      return state;
  }
};

export default rootReducer;