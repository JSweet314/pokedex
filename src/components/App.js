import React, {Component} from 'react';
import PokeList from './PokeList.js';
import DetailView from './DetailView.js';
import Pokemon from '../Pokemon.js'
import './styles/App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      pokemon: {}
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  handleOnClick (id) {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `http://pokeapi.co/api/v2/pokemon/${id}`;
    fetch(proxyurl + url)
    .then(res => res.json())
    .then(data => {
      const pokemon = new Pokemon(data);
      this.setState({ pokemon })
    })
  }
  render () {
    return (
      <div className="App">
        <PokeList handleOnClick={this.handleOnClick}/>
        <DetailView pokemon={this.state.pokemon} />
      </div>
    );
  }
}
export default App;