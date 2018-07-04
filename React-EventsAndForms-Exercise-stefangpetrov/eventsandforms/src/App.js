import React from 'react';
import './App.css';
import RegisterForm from './components/Register';
import LoginForm from './components/Login';
import LoggedInScreen from './components/logged-in/LoggedInScreen';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {

    constructor(props) {
        super(props);

        let route = '';
        if (localStorage.getItem('token')) {
            route = 'loggedIn'
        }
        this.state = {
            route: route
        };
    }

    showAppropriateComponent = () => {
        if (this.state.route === 'login') {
            return <LoginForm setLoggedIn={this.setLoggedIn}/>
        }
        else if (this.state.route === 'loggedIn') {
            return <LoggedInScreen/>
        }
        return <RegisterForm/>
    };

    setLoggedIn = () => {
        this.setState({route: 'loggedIn'})
    };


    switchLoginRegister = () => {
        if (this.state.route === 'login') {
            this.setState({route: ''});
        }
        else {
            this.setState({route: 'login'})
        }
    };


    render() {
        return (
            <div className="App">
                <button onClick={this.switchLoginRegister} className="btn btn-link">Change Form</button>
                {this.showAppropriateComponent()}
            </div>
        );
    };
}

export default App;
