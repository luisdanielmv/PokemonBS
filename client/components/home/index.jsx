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
        let {pokemonList, searchTerm, selectPokemon, selectedPokemon, loading } = this.props;
        return (            
            <div className="row relativize">
                {!!selectedPokemon.id && <Details pokemon={selectedPokemon} selectPokemon = {selectPokemon}/>}
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
                {loading && !searchTerm &&
                    <div className={`col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0 col-md-4`}>
                        <div className="panel panel-primary panel-loading">
                            <div className={`panel-body`}>
                                <img className={`loading-img`} src="http://ispokemongodownornot.com/pikachu.gif" alt="Loading"/>
                            </div>
                        </div>
                    </div>
                    }
            </div>
        );
    }
}

export default Home;