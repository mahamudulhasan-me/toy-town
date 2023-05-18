import React, { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import login from "../../assets/images/login.svg";
import Register from "./Register";
import SocialSignin from "./SocialSignin";
const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-[calc(100vh-4rem)] grid grid-cols-2 px-[10%]  bg-gray-100">
      <div>
        <img src={login} alt="" />
      </div>
      {isSignIn ? (
        <div className="text-center  mb-10 mt-20 bg-white rounded-3xl w-4/5">
          <h2 className="mt-8 mb-10 text-3xl text-pri">
            Sign <span className="text-sec">In</span>
          </h2>
          <form className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Enter Username"
              className="bg-[#F8F8F8] w-4/5 mx-auto py-3 rounded-t-md focus:border-sec duration-200 border-b-4 rounded-b-xl outline-none px-4"
            />
            <div className="relative">
              <input
                type={`${showPassword ? "text" : "password"}`}
                name="password"
                placeholder="Enter Password"
                className=" bg-[#F8F8F8] w-4/5 mx-auto py-3 rounded-t-md focus:border-sec duration-200 border-b-4 rounded-b-xl outline-none px-4"
              />
              {showPassword ? (
                <FaEye
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-4 text-lg text-gray-500 right-14"
                />
              ) : (
                <FaEyeSlash
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-4 text-lg text-gray-500 right-14"
                />
              )}
            </div>

            <div className="flex w-4/5 justify-between mx-auto items-center">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>
              <p className="cursor-pointer text-blue-600 hover:underline duration-100">
                Forget password?
              </p>
            </div>
            <AwesomeButton type="primary">
              <div className="w-20">Sign In</div>
            </AwesomeButton>
          </form>
          <SocialSignin />
          <p className="text-gray-500 mb-3">
            Not a member?{" "}
            <Link
              onClick={() => setIsSignIn(!isSignIn)}
              className="text-blue-600 hover:underline duration-150 font-semibold"
            >
              Sign up
            </Link>
          </p>
        </div>
      ) : (
        <Register signIn={isSignIn} setSignIn={setIsSignIn} />
      )}
    </div>
  );
};

export default SignIn;
