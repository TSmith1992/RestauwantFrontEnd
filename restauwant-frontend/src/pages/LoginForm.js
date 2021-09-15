import React from "react";

export function LoginForm({onUserLogin, handleLoginSubmit}) {
  return (
    <form onSubmit={handleLoginSubmit}>
      <h1>Login</h1>
      <input
        type="text"
        name="full_name"
        placeholder="Please enter your full name"
        onChange={onUserLogin}
        className="login-field"
      />
      <br />
      <input
        type="text"
        name="phone_number"
        placeholder="Please enter your phone number"
        onChange={onUserLogin}
        className="login-field"
      />
      <br />
      <input
        type="submit"
        name="submit"
        className="submit"
        id="login-button"
      />
    </form>
  );
}
