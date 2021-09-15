import React, {useState} from 'react'
import { LoginForm } from './LoginForm';
import {RegistrationForm } from './RegistrationForm';

export function LoginTree(){
  //state and function to toggle between Login and Registration forms.
  const [showLogin, setShowLogin] =useState(false)
  function loginSwitch(){
    setShowLogin(!showLogin)
  }
    // onSubmit={handleSubmit} to place in form opening fragment
  return(
      <div>
        <button onClick={loginSwitch}>{showLogin? "Login Below" : "Register Below" }</button>
        {!showLogin? <RegistrationForm/>:<LoginForm/>}   
      </div>
    );
}