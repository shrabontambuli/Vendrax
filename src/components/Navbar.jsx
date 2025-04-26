import { BiLogoLinkedin, BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import { PiMapPinAreaFill } from "react-icons/pi";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Logo from "/public/images/logo.webp";
import { useState } from "react";

const Navbar = () => {
  return (
    <div className="absolute z-10 w-[100%]">
      {/* top nav  */}

      <div className="bg-white hidden lg:flex items-center text-black py-1 px-3">
        <div className="w-[50%] flex justify-start items-center gap-2">
          <PiMapPinAreaFill size={25} />
          <p className="font-medium text-sm">
            15500 Voss Rd Suite 200 1171 Sugar Land, TX 77498-4601 United States
          </p>
        </div>
        <div className="flex items-center gap-6">
          <Link to="#">
            <FaFacebookF size={20} />
          </Link>
          <Link to="#">
            <FaTwitter size={20} />
          </Link>
          <Link to="#">
            <RiInstagramFill size={20} />
          </Link>
          <Link to="#">
            <BiLogoLinkedin size={20} />
          </Link>
          <Link to="#">
            <FaPinterestP size={20} />
          </Link>
        </div>
        <div className="w-[50%] flex justify-end items-center gap-2">
          <BiSolidPhoneCall size={24} />
          <p>833-604-8051</p>
        </div>
      </div>

      {/* main nav  */}

      <div className="navbar bg-transparent text-white lg:mt-7">
        <div className="w-[40%]">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white text-black z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <details>
                  <summary>Services</summary>
                  <ul className="bg-white text-black border-b-2 rounded-sm w-40">
                    <li className="hover:bg-[#00c6c0] text-sm">
                      <a>Ecommerce</a>
                    </li>
                    <li className="hover:bg-[#00c6c0] text-sm">
                      <a>Restaurant</a>
                    </li>
                    <li className="hover:bg-[#00c6c0] text-sm">
                      <a>Desktop Terminal</a>
                    </li>
                    <li className="hover:bg-[#00c6c0] text-sm">
                      <a>Pay at the table</a>
                    </li>
                    <li className="hover:bg-[#00c6c0] text-sm">
                      <a>Wireless Terminal</a>
                    </li>
                    <li className="hover:bg-[#00c6c0] text-sm">
                      <a>Mobile Payment</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <details>
                  <summary>Partnership</summary>
                  <ul className="bg-white text-black border-b-2 rounded-sm w-52">
                    <li className="hover:bg-[#00c6c0] text-sm">
                      <a>Referral Program</a>
                    </li>
                    <li className="hover:bg-[#00c6c0] text-sm">
                      <a>ISO Reseller Program</a>
                    </li>
                    <li className="hover:bg-[#00c6c0] text-sm">
                      <a>Agent Revenue Share</a>
                    </li>
                    <li className="hover:bg-[#00c6c0] text-sm">
                      <a>Submit Referral</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <div className="w-[60] gap-8 pe-6">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal items-center text-2xl gap-8 font-medium">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <details>
                  <summary>Services</summary>
                  <ul className="bg-white text-black border-b-2 rounded-sm w-40">
                    <li className="hover:bg-[#00c6c0] text-sm">
                      <a>Ecommerce</a>
                    </li>
                    <li className="hover:bg-[#00c6c0] text-sm">
                      <a>Restaurant</a>
                    </li>
                    <li className="hover:bg-[#00c6c0] text-sm">
                      <a>Desktop Terminal</a>
                    </li>
                    <li className="hover:bg-[#00c6c0] text-sm">
                      <a>Pay at the table</a>
                    </li>
                    <li className="hover:bg-[#00c6c0] text-sm">
                      <a>Wireless Terminal</a>
                    </li>
                    <li className="hover:bg-[#00c6c0] text-sm">
                      <a>Mobile Payment</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <details>
                  <summary>Partnership</summary>
                  <ul className="bg-white text-black border-b-2 rounded-sm w-52">
                    <li className="hover:bg-[#00c6c0] text-sm">
                      <a>Referral Program</a>
                    </li>
                    <li className="hover:bg-[#00c6c0] text-sm">
                      <a>ISO Reseller Program</a>
                    </li>
                    <li className="hover:bg-[#00c6c0] text-sm">
                      <a>Agent Revenue Share</a>
                    </li>
                    <li className="hover:bg-[#00c6c0] text-sm">
                      <a>Submit Referral</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a className="border border-[#00c6c0] text-[#00c6c0] py-3 px-10 rounded-full">
                  Get started
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
