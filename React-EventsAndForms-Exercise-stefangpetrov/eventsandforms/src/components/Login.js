import React from 'react';

export default class LoginForm extends React.Component {

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
            'http://localhost:5000/auth/login',
            {
                method:'POST',
                body:JSON.stringify(this.state.form),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(data => data.json())
            .then(response => {
                if(response.success && response.token){
                    localStorage.setItem('token', response.token);
                    this.props.setLoggedIn();
                }
            })
            .catch(err => console.log(err));

    };

    render() {
        return (
            <form>
                <h1>LoginForm</h1>
                <div className="form-group">
                    <label htmlFor="input-email">Email address</label>
                    <input type="email" data-name="email" onChange={this.handleChange} className="form-control" id="input-email" aria-describedby="emailHelp"
                           placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="input-password">Password</label>
                    <input type="password" data-name="password" onChange={this.handleChange} className="form-control" id="input-password" placeholder="Password"/>
                </div>
                <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
            </form>
        );
    };

};