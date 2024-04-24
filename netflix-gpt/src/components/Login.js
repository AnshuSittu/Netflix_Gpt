import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

  //Sign In & Sing Up Form
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="Bg-img"
        />
      </div>
      <form autocomplete="off" className="p-12 rounded-lg text-white bg-black absolute w-3/12 mt-36 mx-auto right-0 left-0 bg-opacity-85">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        { !isSignInForm && <input
          type="text"
          placeholder="Enter Your Full Name"
          className="p-4 rounded-lg my-4 w-full bg-gray-600"
          autoComplete="off"
        />}
        <input
          type="text"
          placeholder="Email Addesess"
          className="p-4 rounded-lg my-4 w-full bg-gray-600"
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 rounded-lg w-full bg-gray-600"
          autoComplete="off"
        />
        <button className="p-4 my-6 rounded-lg bg-red-700 w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New To Netflix? Sign Up Now"
            : "Already Registed Sign In Now.."}
        </p>
      </form>
    </div>
  );
};

export default Login;
