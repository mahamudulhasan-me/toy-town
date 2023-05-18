import React from "react";
import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-router-dom";
import login from "../../assets/images/login.svg";
const SignIn = () => {
  return (
    <div className="h-[calc(100vh-4rem)] grid grid-cols-2 px-[10%]  bg-gray-100">
      <div>
        <img src={login} alt="" />
      </div>
      <div className="text-center  mb-10 mt-20 bg-white rounded-3xl w-4/5">
        <h2 className="mt-8 mb-10 text-2xl text-pri">
          Sign <span className="text-sec">In</span>
        </h2>
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Enter Username"
            className="bg-[#F8F8F8] w-4/5 mx-auto py-3 rounded-t-md focus:border-sec duration-200 border-b-4 rounded-b-xl outline-none px-4"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="bg-[#F8F8F8] w-4/5 mx-auto py-3 rounded-t-md focus:border-sec duration-200 border-b-4 rounded-b-xl outline-none px-4"
          />

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
        <div className="w-4/5 mx-auto mt-8">
          <div className="flex justify-between items-center">
            <div className="w-full h-0.5 bg-gray-300"></div>
            <p className="w-full uppercase font-semibold text-gray-500 text-sm">
              Or Login With
            </p>
            <div className="w-full h-0.5 bg-gray-300"></div>
          </div>
          <div>
            <div className="w-9 h-9 border-2 border-gray-400 rounded-full">
              <Link>G</Link>
            </div>
          </div>
        </div>
        <p className="text-gray-500">
          Not a member?{" "}
          <Link className="text-blue-600 hover:underline duration-150 font-semibold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
