import React, { useCallback, useContext } from 'react'
import { Redirect, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthContext } from '../auth/Auth';
import app from '../firebase/config';

function Login({ history }) {

    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app.auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push('/');
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
            return <Redirect to='/'/>;
        }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <p>Email :</p>
                <input type="email" name="email" placeholder="enter your email" />
                <p>Password :</p>
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Log In</button>
            </form>
            <p>Do not have an account?{"\t\t"}<Link to="/signup">
                <button variant="outline-primary">Sign up!</button>
            </Link></p>
        </div>
    )
}

export default withRouter(Login);
