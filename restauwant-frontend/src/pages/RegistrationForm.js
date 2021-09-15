import React from "react";

export function RegistrationForm() {
  return (
    <form className="add-profile-form">
      <h1>Register here!</h1>
      <input
        type="text"
        name="userName"
        placeholder="Please enter your full name"
        //   defaultValue={player.name}
        //   onChange={onAddNewUser}
        className="login-field"
      />
      <br />
      <input
        type="text"
        name="phoneNumber"
        placeholder="Please enter your phone number"
        //   defaultValue={player.image}
        //   onChange={onAddNewUser}
        className="login-field"
      />
      <br />
      <input
        type="text"
        name="email"
        placeholder="Please enter your email"
        //   defaultValue={player.image}
        //   onChange={onAddNewUser}
        className="login-field"
      />
      <br />
      <input
        type="text"
        name="description"
        placeholder="Write a little about yourself!"
        //   defaultValue={player.image}
        //   onChange={onAddNewUser}
        className="login-field"
      />
      <br />
      <input
        type="text"
        name="profilePic"
        placeholder="Give us a photo of yourself!"
        //   defaultValue={player.image}
        //   onChange={onAddNewUser}
        className="login-field"
      />
      <br />
      <input
        type="text"
        name="linkedIn"
        placeholder="Please enter your linkedIn address"
        //   defaultValue={player.image}
        //   onChange={onAddNewUser}
        className="login-field"
      />
      <br />
      <input
        type="submit"
        name="submit"
        //   value={loginButton}
        className="submit"
        id="login-button"
      />
    </form>
  );
}
