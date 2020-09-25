import { Link } from "react-router-dom";
import React from 'react';
import './Login.css';
import './Auth';
import HeaderSecondary from "../Header/HeaderSecondary";

const Login = (props) => {
  const { email, setEmail, password, setPassword, handleLogin, handleSignUp, hasAccount, setHasAccount, emailError, passwordError  } = props;
  return (
    <>
    <HeaderSecondary />
    <div style={{display: 'initial'}} className="header">
      <div style={{marginTop: '300px'}} className="loginForm">
        
        {
          hasAccount ? (
            <>
              <p style={{fontSize: '22px', fontWeight: 'bold', marginBottom: '20px'}}>Create an account</p>
              <input type="text" name="firstName" placeholder="First Name" />
              <input type="text" name="lastName" placeholder="Last Name" />
              <input type="text" name="username" placeholder="Username or Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <p className="emailErrorMsg">{emailError}</p>
              <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <p className="passwordErrorMsg">{passwordError}</p>
              <input type="password" name="password" placeholder="Confirm Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <input onClick={handleSignUp} type="submit" value="Create an account"/>
              <p className="accountText">Already have an account ? <span className="toggleText" onClick={() => setHasAccount(!hasAccount)}>Login</span> </p>
            </>
            
          ) : (
            <>
              <p style={{fontSize: '22px', fontWeight: 'bold', marginBottom: '20px'}}>Login</p>
              <input type="text" name="username" placeholder="Username or Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <p className="emailErrorMsg">{emailError}</p>
              <input type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <p className="passwordErrorMsg">{passwordError}</p>
              <div className="rememberForgetItem">
                <div className="checkboxItem">
                  <input type="checkbox" name="remember" id="remember"/>
                  <label htmlFor="remember">Remember Me</label>
                </div>
                <div className="forgetPassword">
                  <Link to="/"> Forget Password</Link>
                </div>
              </div>
              <input onClick={handleLogin} type="submit" value="Login"/>
              <p className="accountText">Don't have an account ? <span className="toggleText" onClick={() => setHasAccount(!hasAccount)}>Create an account</span> </p>
            </>
          )
        }
       
      </div>
      <div style={{width: '45%', margin: '30px auto', display: 'block', height: '20px', borderBottom: '1px solid black', textAlign: 'center'}}>
        <span style={{fontSize: '24px', backgroundColor: '#F3F5F6', padding: '0 10px'}}>
          Or
        </span>
      </div>
      
    </div>
    </>
  );
};

export default Login;