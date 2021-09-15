import React, {useState} from 'react'
import { LoginForm } from './LoginForm';
import {RegistrationForm } from './RegistrationForm';

export function LoginTree({onAddNewUser, handleSubmit, onUserLogin, handleLoginSubmit}){
  //state and function to toggle between Login and Registration forms.
  const [showLogin, setShowLogin] =useState(false)
  function loginSwitch(){
    setShowLogin(!showLogin)
  }
  return(
      <div>
        <button onClick={loginSwitch}>{showLogin? "Login Below" : "Register Below" }</button>
        {!showLogin? <RegistrationForm onAddNewUser={onAddNewUser} handleSubmit={handleSubmit}/>:<LoginForm onUserLogin={onUserLogin} handleLoginSubmit={handleLoginSubmit}/>}   
      </div>
    );
}