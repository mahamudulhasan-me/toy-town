import React, { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialSignin from "./SocialSignin";

const Register = ({ signIn, setSignIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="text-center  mb-10 mt-20 bg-white rounded-3xl">
      <h2 className="mt-8 mb-10 text-3xl text-pri">
        Sign <span className="text-sec">Up</span>
      </h2>
      <form className="space-y-5 ">
        <div className="grid grid-cols-2 gap-5 px-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="bg-[#F8F8F8]  py-3 rounded-t-md focus:border-sec duration-200 border-b-4 rounded-b-xl outline-none px-4"
          />
          <input
            type="url"
            name="photo"
            placeholder="Photo URL"
            className="bg-[#F8F8F8]  py-3 rounded-t-md focus:border-sec duration-200 border-b-4 rounded-b-xl outline-none px-4"
          />
          <input
            type="text"
            placeholder="Email"
            className="bg-[#F8F8F8] py-3 rounded-t-md focus:border-sec duration-200 border-b-4 rounded-b-xl outline-none px-4"
          />
          <div className="relative">
            <input
              type={`${showPassword ? "text" : "password"}`}
              name="password"
              placeholder="Enter Password"
              className=" bg-[#F8F8F8]  py-3 rounded-t-md focus:border-sec duration-200 border-b-4 rounded-b-xl outline-none px-4"
            />
            {showPassword ? (
              <FaEye
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-4 text-lg text-gray-500 right-4"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-4 text-lg text-gray-500 right-4"
              />
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 ml-5 text-gray-500">
          <input type="checkbox" />
          <p>
            I agree with{" "}
            <Link className="font-semibold text-blue-600 underline">
              privacy and policy
            </Link>
          </p>
        </div>
        <AwesomeButton type="primary">
          <div className="w-24  ">Sign Up</div>
        </AwesomeButton>
      </form>
      <SocialSignin />
      <p className="text-gray-500 mb-3">
        Already have an account?{" "}
        <Link
          onClick={() => setSignIn(!signIn)}
          className="text-blue-600 hover:underline duration-150 font-semibold"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default Register;
