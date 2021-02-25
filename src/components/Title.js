import React, { useContext } from 'react'
import { AuthContext } from '../auth/Auth';
import app from '../firebase/config';

function Title() {

    const { currentUser } = useContext(AuthContext);

    return (
        <div className="title">
            <h1>Firegram <span style={{float: 'right'}}>{currentUser.email}</span></h1>
            <button className="change-option" style={{ float: 'right' }} onClick={() => app.auth().signOut()}>Sign out</button>
            <h2>Upload your picture</h2>
        </div>
    )
}

export default Title
