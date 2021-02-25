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
        return <Redirect to='/' />;
    }

    return (
        <div>
            <div className="title">
                <h1>Firegram</h1>
            </div>

            <h1>LOG IN</h1>
            <form className="box" onSubmit={handleLogin}>
                <input type="email" name="email" placeholder="enter your email" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Log In</button>
            </form>
            <p>Do not have an account?{"\t\t"}<Link to="/signup">
                <button className="change-option" variant="outline-primary">Sign up!</button>
            </Link></p>
        </div>
    )
}

export default withRouter(Login);
