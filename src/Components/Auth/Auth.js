import React, { Component } from 'react';
import {getSession, registerUser, loginUser} from '../../Ducks/Reducers/UserReducer';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Auth extends Component {
    
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleRegister = e => {
        // e.preventDefault();
        const { username, password} = this.state;
        const { registerUser } = this.props;
        registerUser({username, password})
        this.props.getSession();    
    };

    handleLogin = e => {
        // e.preventDefault();
        const { username, password } = this.state;
        const { loginUser } = this.props;
        loginUser({username, password});
    };

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        if(this.props.user_id){
            return <Redirect to='/dashboard'/>
        }
        return (
            <div>
                <label>Username:</label>
                <input 
                name="username"
                type="text"
                placeholder="Username"
                onChange={this.handleInput}
                />

                <label>Password:</label>
                <input 
                name="password"
                type="password"
                placeholder="Password"
                onChange={this.handleInput}
                />

                <button onClick={this.handleLogin}>Login</button>
                <button onClick={this.handleRegister}>Register</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.userReducer.user_id
    };
};

export default connect(mapStateToProps,
    {
        getSession, 
        registerUser, 
        loginUser
    }
)(Auth);