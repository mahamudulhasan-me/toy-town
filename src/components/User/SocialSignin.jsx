import React from "react";
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const SocialSignin = () => {
  return (
    <div className="w-4/5 mx-auto mt-8 text-gray-500">
      <div className="flex justify-center items-center">
        <div className="w-full h-0.5 bg-gray-300"></div>
        <p className="w-full uppercase font-semibold text-gray-500 text-sm">
          Or Login With
        </p>
        <div className="w-full h-0.5 bg-gray-300"></div>
      </div>
      <div className="flex gap-2 my-5 justify-center items-center">
        <Link>
          <div className="social-btn hover:text-[#4285F4] hover:border-[#4285F4]">
            <FaGoogle />
          </div>
        </Link>
        <Link>
          <div className="social-btn hover:text-[#3B5998] hover:border-[#3B5998]">
            <FaFacebookF />
          </div>
        </Link>
        <Link>
          <div className="social-btn hover:text-[#1DA1F2] hover:border-[#1DA1F2]">
            <FaTwitter />
          </div>
        </Link>
        <Link>
          <div className="social-btn hover:text-[#0A66C2] hover:border-[#0A66C2]">
            <FaLinkedinIn />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SocialSignin;
