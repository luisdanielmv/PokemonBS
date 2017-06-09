import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, shape, string, number, object} from 'prop-types';
import axios from 'axios';

import Card from '../card'

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
        }))
    }

    render () {
        let {pokemonList, searchTerm} = this.props;
        console.log(JSON.stringify('Home: ' + pokemonList));
        return (
            <div className="row">
                {console.log(pokemonList)}
                { !!pokemonList && pokemonList.map((pokemon) => {
                    return (
                        pokemon.name.includes(searchTerm) &&
                        <Card 
                            key = { pokemon.id }
                            pokemon = {pokemon}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Home;