import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './nav.scss';
import logo from './logo.png';

import store from '../../../redux/store';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  updateSearchTerm(e) {
    store.dispatch({
      type: 'SET_SEARCH_TERM',
      searchTerm: e.target.value
    });
  }

  render() {
    const { searchTerm } = this.props.searchTerm;

    return (
      <nav className='navbar navbar-inverse'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <Link className='navbar-brand' to='/'>
              <img className='logo' src={logo} alt='Pokeball logo' />
            </Link>
          </div>

          <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="#">Home</a>
              </li>
            </ul>
            <form className='navbar-form navbar-left pull-right'>
              <div className='form-group'>
                <input onChange={this.updateSearchTerm.bind(this)} value={searchTerm} type='text' className='form-control' placeholder='Search' />
              </div>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = store => {
  return {
    searchTerm: store.searchTerm
  };
};

export default connect(mapStateToProps)(Nav);