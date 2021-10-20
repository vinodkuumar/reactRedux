import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import {moviesList} from './actions';
import {bindActionCreators} from 'redux';

class App extends Component {

  componentDidMount() {
    // this.props.dispatch(actions.moviesList());
    this.props.moviesList();
  }
  
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.movies ? 
        this.props.movies.map((item) => (
        <div key={item.id}>
          {item.id}
        </div>)) : null} 
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({moviesList},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);