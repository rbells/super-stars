import React from "react";
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
        const auth = password === this.state.password;
        this.setState({
            authorized: auth
        });
    }

    render() {
        const login = (
        <div>
            
            <form action="#">
                <label for="username">Username</label>
                <br></br>
                <input type="username" placeholder="Username" id="username"></input>
                <input type="submit"></input>
            </form>
        
            <form action="#" onSubmit={this.authorize}>
                <label for="password">Enter your password</label>
                <br></br>
                <input type="password" placeholder="Password" id="password"></input>
                <input type="submit"></input>
            </form>
        </div>
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
                    { this.state.authorized ? 'loginText' : ''}
                </h1>
                { this.state.authorized ? loginText : login }
            </div>
        );
    }
}

export default SignUp;