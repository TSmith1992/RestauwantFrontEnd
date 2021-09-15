import React from "react";

export function LoginForm() {
  return (
    <form>
      <h1>Login</h1>
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
        type="submit"
        name="submit"
        //   value={loginButton}
        className="submit"
        id="login-button"
      />
    </form>
  );
}
