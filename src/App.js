import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter, Route } from 'react-router-dom';
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1> Pokedex </h1>
        <Route path="/pokemons/:id" render={(props) => (<PokemonDetails {...props} />)} /> 
        <Route exact path="/">
          <Pokedex pokemons={pokemons} />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;