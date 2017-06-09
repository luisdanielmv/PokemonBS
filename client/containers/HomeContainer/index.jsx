import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, object, string } from 'prop-types';
import axios from 'axios';

import store from '../../redux/store';
import { Home } from '../../components/';

class HomeContainer extends Component {
    constructor ( props ) {
        super( props )
        this.getPokemon = this.getPokemon.bind(this);
        this.selectPokemon = this.selectPokemon.bind(this);
    }

    static propTypes = {
        pokemonList: arrayOf(object),
        searchTerm: string
    }

    getPokemon (pid) {
        let self = this;
        let maxId = 20;
        
        axios
        .get(`http://pokeapi.co/api/v2/pokemon/${pid}`)
        .then(response => {
            let newPokemon = Object.assign({}, {
                id: response.data.id, 
                name: response.data.name, 
                types: response.data.types, 
                stats: response.data.stats, 
            });

            store.dispatch({
                type: 'UPDATE_POKEMON_LIST',
                pokemon: newPokemon
            });

            
            if (newPokemon.id + 1 <= maxId) {
                self.getPokemon(newPokemon.id + 1);
            }
        })
        .catch(err => console.log(err));
    }

    selectPokemon(pokemon) {
        console.log('select');
        store.dispatch({
            type: 'SELECT_POKEMON',
            selectedPokemon: pokemon
        });
    }

    componentWillMount () {
        this.getPokemon(1);
    }

    render () {
        let { pokemonList } = this.props;
        return (
            !!pokemonList ? 
            <Home 
                pokemonList = { this.props.pokemonList }
                searchTerm = { this.props.searchTerm }
                selectPokemon = { this.selectPokemon }
            /> : 
            <h1>Loading...</h1>
        );
    }
}

const mapStateToProps = store => {
  return {
    pokemonList: store.pokemonList,
    searchTerm: store.searchTerm
  };
};

export default connect(mapStateToProps)(HomeContainer);