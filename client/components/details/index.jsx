import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, shape, string, number, object } from 'prop-types';
import axios from 'axios';

import './details.scss';

class Details extends Component {
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
        let { id, name, types, stats } = this.props.pokemon;
        console.log(this.props.pokemon);
        return (
            <div className="details">
                <div className="container">
                    <header>
                        Header
                        {types.map((type)=>{
                            <span>{type.name.toUpperCase()}</span>
                        })}
                    </header>
                    <main>
                        <div className="row">
                            <div className="col-xs-12">
                                {}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

export default Details;
