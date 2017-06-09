const DEFAULT_STATE = {
  searchTerm: '',
  pokemonList: []
};

const compareID = (a, b) => {
  return a.id - b.id;
}

const searchReducer = (state, action) => {
  return Object.assign({}, state, { searchTerm: action.searchTerm });
}

const pokemonReducer = (state, action) => {
  let newPokemonList = state.pokemonList.slice();
  newPokemonList.push(action.pokemon);
  if (newPokemonList.length > 1) {
    newPokemonList.sort(compareID);
  }
  return Object.assign({}, state, { pokemonList: newPokemonList });
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return searchReducer(state, action);
    case 'UPDATE_POKEMON_LIST':
      return pokemonReducer(state, action);
    default:
      return state;
  }
};

export default rootReducer;