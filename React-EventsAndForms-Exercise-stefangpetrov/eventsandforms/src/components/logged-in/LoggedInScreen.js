import React from 'react';
import AddPokemonForm from './AddPokemonForm';
import Pokemons from './Pokemons';

export default class LoggedInForm extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            pokeArray: []
        }
    }

    updateRoster = (newRoster) => {
        this.setState({pokeArray: newRoster})
    };

    componentDidMount(){
        fetch('http://localhost:5000/pokedex/pokedex')
            .then(rawData => rawData.json())
            .then(response => this.setState({pokeArray: response.pokemonColection}))
    }

    render() {
        return (
            <div>
                <AddPokemonForm updateRoster={this.updateRoster}/>
                {this.state.pokeArray.map((pokemon, index) => <Pokemons key={index} item={pokemon}/>)}
            </div>
        );
    };

};