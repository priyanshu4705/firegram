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
            <div className="title">
                <h1>Firegram</h1>
            </div>
            <h1>SIGN UP</h1>
            <form className="box" onSubmit={handleSignUp}>
                <input type="email" name="email" placeholder="enter your email" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account?{"\t\t"}<Link to="/login">
                <button className="change-option" variant="outline-primary">Log In!</button>
            </Link></p>
        </div>
    );
};

export default withRouter(SignUp);