import React from 'react';

export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            form: {}
        };
    }

    handleChange = (event) => {
        const name = event.target.dataset.name;
        const value = event.target.value;
        const newObj = {};
        newObj[name] = value;

        this.setState({form: Object.assign(this.state.form, newObj)});
    };

    handleSubmit = (e) => {

        e.preventDefault();
        fetch(
            'http://localhost:5000/pokedex/create',
            {
                method: 'POST',
                body: JSON.stringify(this.state.form),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(data => data.json())
            .then(response => {
                this.props.updateRoster(response);
            })
            .catch(err => console.log(err));

    };

    render() {
        return (
            <form>
                <h1>Create Pokemon</h1>
                <div className="form-group">
                    <label htmlFor="input-pokename">Pokemon Name</label>
                    <input type="text" data-name="pokemonName" onChange={this.handleChange} className="form-control"
                           id="input-pokename" aria-describedby="emailHelp"
                           placeholder="Enter Pokemon Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="input-pokeImg">Pokemon Image</label>
                    <input type="text" data-name="pokemonImg" onChange={this.handleChange} className="form-control"
                           id="input-pokeImg" placeholder="Pokemon Image"/>
                </div>
                <div className="form-group">
                    <label htmlFor="input-pokeInfo">Pokemon Info</label>
                    <input type="text" data-name="pokemonInfo" onChange={this.handleChange} className="form-control"
                           id="input-pokeInfo" placeholder="Pokemon Info"/>
                </div>
                <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
            </form>
        );
    };

};