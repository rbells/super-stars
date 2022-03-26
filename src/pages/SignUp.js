import React from "react";
import ReactDOM from "react-dom"
import '../App.css';


export function SignUp() {
    return(
    <div>
        <h1>
            SignUp
        </h1>
        <Authorize />
    </div>
    )
}

class Authorize extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: 'geaux',
            authorized: false
        };
        this.authorize = this.authorize.bind(this);
    }

    authorize(e) {
        const password = e.target.querySelector(
            'input[type="password"]').value;
        const auth = password == this.state.password;
        this.setState({
            authorized: auth
        });
    }

    render() {
        const login = (
        <form action="#" onSubmit={this.authorize}>
            <input type="password" placeholder="submit"></input>
            <input type="submit"></input>
        </form>
        );

        const loginText = (
            <ul>
                <li>
                    You have successfully logged in
                </li>
                <li>
                    Your username here
                </li>
            </ul>
        )
        
        return (
            <div id="authorization">
                <h1>
                    { this.state.authorized ? 'loginText' : 'Enter your password'}
                </h1>
                { this.state.authorized ? loginText : login }
            </div>
        );
    }
}

export default SignUp;