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
        let { pokemon, selectPokemon } = this.props;
        let { id, name, types, stats } = pokemon;
        let color = '';
        console.log(this.props.pokemon);
        return (
            <div onClick={()=>{selectPokemon({})}} className="details">
                <div className="container">
                    <header>
                        <h1>{name.toUpperCase()}</h1>
                        <h2>
                            {types.map((typeObj) => {
                                return (<span key={name+typeObj.type.name} className={`nature ${typeObj.type.name}`}>{typeObj.type.name.toUpperCase()}</span>)
                            })}
                        </h2>
                    </header>
                    <br/>
                    <div className='main'>
                        {stats.map((statsObj) =>{
                            color = (statsObj.base_stat < 50 ) ? 'danger': ((statsObj.base_stat < 100) ? 'warning' : 'success');
                            return (
                                <div key={statsObj.stat.name} className="row">
                                    <div className="col-xs-3 col-xs-offset-1 text-right">
                                        <h3>{statsObj.stat.name.toUpperCase()}:</h3>
                                    </div>
                                    <div className="col-xs-4">
                                        <div className="progress">
                                            <div className={`progress-bar progress-bar-${color}`} role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: (statsObj.base_stat/2.55)+'%'}}>
                                                <span className="sr-only">40% Complete (success)</span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="col-xs-1"><span>{statsObj.base_stat}pts</span></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;
