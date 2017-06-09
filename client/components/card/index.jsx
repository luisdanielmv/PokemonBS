import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, shape, string, number, object } from 'prop-types';
import axios from 'axios';

import './card.scss';

class Card extends Component {
    constructor(props) {
        super(props)
    }

    static propTypes = {
        pokemon: shape({
            id: number,
            name: string,
            types: arrayOf(object),
            stats: arrayOf(object)
        })
    }

    render() {
        let { selectPokemon, pokemon } = this.props;
        let { id, name, types } = pokemon;
        
        return (
            <div className={`col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0 col-md-4`}>
                <div onClick={() => {selectPokemon(pokemon)}} className="panel panel-primary">
                    <div className={`panel-heading ${types[0].type.name}`}>
                        <div className="flexrow end">
                            <div className='pokenumber'>
                                <h3>#{id}</h3>
                            </div>
                        </div>
                        <div className="flexrow center">
                            <figure>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={`${name}`} />
                            </figure>
                        </div>
                    </div>
                    <div className={`panel-body ${!!(types[1])? types[1].type.name : ''}`}>
                        <div className="flexrow center">
                            <h2>{name.toUpperCase()}</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
