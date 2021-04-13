import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import { signInWithGoogle } from "../../firebase/firebase-utils";

import "./sign-in.styles.scss";

const SignIn = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [field, setField] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setField({ ...field, [name]: value });
  };

  return (
    <div className="sign-in" onSubmit={handleSubmit}>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          placeholder="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          handleChange={handleChange}
          placeholder="Password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
