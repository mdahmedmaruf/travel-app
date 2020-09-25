import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { TravelPlaceContext } from '../../App';
import fire from '../../firebase.config';
import Login from './Login';


const Auth = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const [loggedInUser, setLoggedInUser] = useContext(TravelPlaceContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const clearInputs = () => {
      setEmail('');
      setPassword('');
    };

    const clearErrors = () => {
      setEmailError('');
      setPasswordError('');
    };

    const handleLogin = () => {
      clearErrors();
      fire.auth().signInWithEmailAndPassword(email, password)
      .catch((error) => {
        switch(error.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(error.message);
            break;
          case 'auth/wrong-password':
            setPasswordError(error.message);
            break;
          default:
            console.log('Invalid username or email or password');
        }
      });
    };

    const handleSignUp = () => {
      clearErrors();
      fire.auth().createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        switch(error.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(error.message);
            break;
          case 'auth/weak-password':
            setPasswordError(error.message);
            break;
          default:
            console.log('use a valid email and strong password');
        }
      });
    };



    const handleLogOut = () => {
      fire.auth().signOut();
    };

    const authListener = () => {
      fire.auth().onAuthStateChanged(user => {
        if(user) {
          clearInputs();
          setUser(user);
          setLoggedInUser(user);
          history.replace(from);
        } else {
          setUser('');
        }
      });
    };

    useEffect(() => {
      authListener();
    }, []);


    return (
        <div>
          <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} handleSignUp={handleSignUp} hasAccount={hasAccount} setHasAccount={setHasAccount} emailError={emailError} passwordError={passwordError} />
        </div>
    );
};

export default Auth;