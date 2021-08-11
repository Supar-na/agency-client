import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import './LogIn.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';


const LogIn = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser);
                console.log(signedInUser)
                storeAuthToken();
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage, errorCode)

            });
    }

    const storeAuthToken = () =>{
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
            sessionStorage.setItem('token', idToken);
           history.replace(from);

          }).catch(function(error) {
            console.log(error)
          });
    }


    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    return (
        <div className="login" style={{ overflow: 'hidden' }}>

            <Navbar name={loggedInUser.name}></Navbar>

            <div className="row d-flex justify-content-center">
                <div className="col-md-6 p-4 ">
                    <h3 className="text-brand text-center">Create a Account</h3>
                    <div className="form-group">
                        <label htmlFor="">User Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="email" className="form-control" autoComplete="off" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" className="form-control" autoComplete="off" />
                    </div>
                    <div className="form-group">
                        <button className="form-control btn-brand">Create Account</button>
                    </div>

                    <div className="form-group text-center">
                        <label htmlFor="">Already have an account? <a href="/login">Log In</a></label>
                    </div>

                    <button onClick={handleSignIn} className="sign">Sign In With Google  <FontAwesomeIcon icon={faGoogle} /></button>
                </div>


            </div>

        </div>
    );
};

export default LogIn;