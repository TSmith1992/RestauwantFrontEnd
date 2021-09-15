import React from "react";

export function RegistrationForm({onAddNewUser, handleSubmit}) {
  return (
    <form className="add-profile-form" onSubmit={handleSubmit}>
      <h1>Register here!</h1>
      <input
        type="text"
        name="full_name"
        placeholder="Please enter your full name"
        onChange={onAddNewUser}
        className="login-field"
      />
      <br />
      <input
        type="text"
        name="phone_number"
        placeholder="Please enter your phone number"
        onChange={onAddNewUser}
        className="login-field"
      />
      <br />
      <input
        type="text"
        name="email"
        placeholder="Please enter your email"
        onChange={onAddNewUser}
        className="login-field"
      />
      <br />
      <input
        type="text"
        name="description"
        placeholder="Write a little about yourself!"
        onChange={onAddNewUser}
        className="login-field"
      />
      <br />
      <input
        type="text"
        name="profile_pic"
        placeholder="Give us a photo of yourself!"
        onChange={onAddNewUser}
        className="login-field"
      />
      <br />
      <input
        type="text"
        name="linkedin_link"
        placeholder="Please enter your linkedIn address"
        onChange={onAddNewUser}
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
