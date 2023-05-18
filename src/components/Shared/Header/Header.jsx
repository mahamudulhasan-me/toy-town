import React from "react";
import Headroom from "react-headroom";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/Logo.png";
const Header = () => {
  const navOption = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/blog"}>Blog</Link>
      </li>
      <li>
        <Link to={"/allToys"}>All Toys</Link>
      </li>
      <li>
        <Link to={"/myToys"}>My Toys</Link>
      </li>
      <li>
        <Link to={"/addAToys"}>Add A Toy</Link>
      </li>
    </>
  );
  return (
    <Headroom>
      <div className="px-[10%] navbar bg-pri text-white font-poppins font-semibold z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
            >
              {navOption}
            </ul>
          </div>
          <Link>
            <img src={logo} alt="toy town" className="w-4/5" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1 nav relative">{navOption}</ul>
        </div>
        <div className="navbar-end">
          <Link to={"/signin"}>Sign In</Link>
        </div>
      </div>
    </Headroom>
  );
};

export default Header;
