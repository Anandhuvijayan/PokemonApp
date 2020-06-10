import React, { Component } from "react";

import PokemonCard from "./PokemonCard";

import $ from "jquery";

export default class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: "",
      items: "",
    };
    this.performSearch("");
  }

  performSearch(searchTerm) {
    console.log("Perform search using moviedb");

    let selectedUrl;
    if (searchTerm) {
      selectedUrl = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;
    } else {
      selectedUrl = `https://pokeapi.co/api/v2/pokemon/?limit=150&offset=0`;
    }
    $.ajax({
      url: selectedUrl,
      success: (searchResults) => {
        console.log("Fetched data successfully");
        // console.log(searchResults);
        const results = searchResults.results;

        this.setState({ pokemon: results, items: results });
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      },
    });
  }

  searchChangeHandler = (event) => {
    let changedPokemonData = this.state.pokemon;
    const searchTerm = event.target.value.toLowerCase();
    console.log(searchTerm);
    changedPokemonData = changedPokemonData.filter((item) => {
      return item.name.indexOf(searchTerm) !== -1;
    });
    console.log(changedPokemonData);
    return this.setState({
      items: changedPokemonData,
    });
  };

  render() {
    console.log(this.state.pokemon);
    // let filterpokemon = this.state.pokemon;

    return (
      <div>
        <input
          label="Search Country"
          icon="search"
          placeholder="Search"
          // value={this.state.pokemon}
          onChange={this.searchChangeHandler.bind(this)}
        />
        {/* {this.state.pokemon} */}
        <div>
          {this.state.items ? (
            <div className="row">
              {this.state.items.map((pokemon) => (
                <PokemonCard
                  key={pokemon.name}
                  name={pokemon.name}
                  url={pokemon.url}
                />
              ))}
            </div>
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      </div>
    );
  }
}
