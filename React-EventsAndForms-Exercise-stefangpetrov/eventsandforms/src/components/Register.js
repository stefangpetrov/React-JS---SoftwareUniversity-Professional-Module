import React from 'react';

export default class RegisterForm extends React.Component {

    constructor(props){
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

        this.setState({form:Object.assign(this.state.form, newObj)});
    };

    handleSubmit = (e) => {

        e.preventDefault();
        fetch(
            'http://localhost:5000/auth/signup',
            {
                method:'POST',
                body:JSON.stringify(this.state.form),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(data => data.json())
        .then(response => console.log(response));

    };

    render() {
        return (
            <form>
                <h1>RegisterForm</h1>
                <div className="form-group">
                    <label htmlFor="input-email">Email address</label>
                    <input type="email" data-name="email" onChange={this.handleChange} className="form-control" id="input-email" aria-describedby="emailHelp"
                           placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="input-password">Password</label>
                    <input type="password" data-name="password" onChange={this.handleChange} className="form-control" id="input-password" placeholder="Password"/>
                </div>
                <div className="form-group">
                    <label htmlFor="input-username">Username</label>
                    <input type="text" data-name="name" onChange={this.handleChange} className="form-control" id="input-username" placeholder="Username"/>
                </div>
                <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
            </form>
        );
    };

};