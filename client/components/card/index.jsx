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
        let { id, name, types } = this.props.pokemon;
        console.log(JSON.stringify(types))
        return (
            <div className={`col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0 col-md-4`}>
                <div className="panel panel-primary">
                    <div className={`panel-heading ${types[0].type.name}`}>
                        <h2>#{id} {name.toUpperCase()}</h2>
                    </div>
                    <div className={`panel-body ${!!(types[1])? types[1].type.name : ''}`}>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={`${name}`} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
