import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { arrayOf, shape, string, number, object} from 'prop-types';
import axios from 'axios';

import Card from '../card';
import Details from '../details';

class Home extends Component {
    constructor ( props ) {
        super( props )
    }

    static propTypes = {
        pokemonList: arrayOf(shape({
            id: number,
            name: string,
            types: arrayOf(object),
            stats: arrayOf(object)
        })),
        selectedPokemon: object
    }

    render () {
        let {pokemonList, searchTerm, selectPokemon, selectedPokemon} = this.props;
        return (
            !!selectedPokemon ? 
            <div className="row">
                <Details pokemon={selectedPokemon}/>
            </div> :               
            <div className="row">
                { !!pokemonList && pokemonList.map((pokemon) => {
                    return (
                        !!pokemon.name && (pokemon.name + (!!pokemon.types[0] ? pokemon.types[0].type.name : '') + (!!pokemon.types[1] ? pokemon.types[1].type.name : '')).includes(searchTerm) &&
                        <Card 
                            key = { pokemon.id }
                            pokemon = {pokemon}
                            selectPokemon = {selectPokemon}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Home;