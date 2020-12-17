import React, { useCallback } from 'react'
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import app from '../firebase/config';

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <p>Email :</p>
                <input type="email" name="email" placeholder="enter your email" />
                <p>Password :</p>
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account?{"\t\t"}<Link to="/login">
                <button variant="outline-primary">Log In</button>
            </Link></p>
        </div>
    );
};

export default withRouter(SignUp);