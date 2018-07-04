import React from 'react';

export default class Pokemons extends React.Component {

    render() {
        return (
            <div>
                <h2>{this.props.item.pokemonName}</h2>
                <img src={this.props.item.pokemonImg} alt="pokemonAlt"/>
                <p>{this.props.item.pokemonInfo}</p>
            </div>

        );
    };

};