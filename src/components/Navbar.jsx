import { BiLogoLinkedin, BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import { PiMapPinAreaFill } from "react-icons/pi";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Logo from "/public/images/logo.webp";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="absolute z-20 w-[100%]">
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

      <div className="navbar bg-transparent text-white lg:mt-7 py-6 md:py-0">
        <div className="w-[40%]">
          <div className="dropdown">
            <div tabIndex={0}  onClick={() => setIsOpen(!isOpen)} role="button" className="btn btn-ghost lg:hidden">
              {/* <svg
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
              </svg> */}
                 {isOpen ? <Menu size={28} /> : <Menu size={28} />}
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content bgC text-black z-10 mt-3 w-96 p-6 shadow space-y-10 transition-all ${isOpen ? "block" : "hidden"
               }`}
            >
              <li>
                <Link
                  to="/"
                  className="text-xl border-b-2 md:border-b-2 pb-4 md:pb-0"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-xl border-b-2 md:border-b-2 pb-4 md:pb-0"
                >
                  About
                </Link>
              </li>
              <li>
                <details>
                  <summary className="text-xl border-b-2 md:border-b-2 pb-4 md:pb-0">
                    Services
                  </summary>
                  <ul className=" lg:bg-white text-black lg:border-b-2 rounded-sm w-40">
                    <li className="hover:bg-[#00c6c0] text-xl border-b-2 md:border-b-2 pt-4 pb-2 md:pb-0">
                      <Link to="/">Ecommerce</Link>
                    </li>
                    <li className="hover:bg-[#00c6c0] text-xl border-b-2 md:border-b-2 pt-4 pb-2 md:pb-0">
                      <Link to="/">Restaurant</Link>
                    </li>
                    <li className="hover:bg-[#00c6c0] text-xl border-b-2 md:border-b-2 pt-4 pb-2 md:pb-0">
                      <Link to="/">Desktop Terminal</Link>
                    </li>
                    <li className="hover:bg-[#00c6c0] text-xl border-b-2 md:border-b-2 pt-4 pb-2 md:pb-0">
                      <Link to="/">Pay at the table</Link>
                    </li>
                    <li className="hover:bg-[#00c6c0] text-xl border-b-2 md:border-b-2 pt-4 pb-2 md:pb-0">
                      <Link to="/">Wireless Terminal</Link>
                    </li>
                    <li className="hover:bg-[#00c6c0] text-xl border-b-2 md:border-b-2 pt-4 pb-2 md:pb-0">
                      <Link to="/">Mobile Payment</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link
                  to="/features"
                  className="text-xl border-b-2 md:border-b-2 pb-4 md:pb-0"
                >
                  Features
                </Link>
              </li>
              <li>
                <details>
                  <summary className="text-xl border-b-2 md:border-b-2 pb-4 md:pb-0">
                    Partnership
                  </summary>
                  <ul className="lg:bg-white text-black lg:border-b-2 rounded-sm w-52">
                    <li className="hover:bg-[#00c6c0] text-xl border-b-2 md:border-b-2 pt-4 pb-2 md:pb-0">
                      <Link to="/referral">Referral Program</Link>
                    </li>
                    <li className="hover:bg-[#00c6c0] text-xl border-b-2 md:border-b-2 pt-4 pb-2 md:pb-0">
                      <Link to="/">ISO Reseller Program</Link>
                    </li>
                    <li className="hover:bg-[#00c6c0] text-xl border-b-2 md:border-b-2 pt-4 pb-2 md:pb-0">
                      <Link to="/">Agent Revenue Share</Link>
                    </li>
                    <li className="hover:bg-[#00c6c0] text-xl border-b-2 md:border-b-2 pt-4 pb-2 md:pb-0">
                      <Link to="/">Submit Referral</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-xl border-b-2 md:border-b-2 pb-4 md:pb-0"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="border border-[#00c6c0] text-[#00c6c0] py-3 px-10 rounded-full w-40"
                >
                  Get started
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="w-[60] gap-8 pe-6">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal items-center text-2xl gap-8 font-medium">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <details>
                  <summary>Services</summary>
                  <ul className="bg-white text-black border-b-2 rounded-sm w-40">
                    <li className="hover:bg-[#00c6c0] text-sm">
                      <Link to="/">Ecommerce</Link>
                    </li>
                    <li className="hover:bg-[#00c6c0] text-sm">
                      <Link to="/">Restaurant</Link>
                    </li>
                    <li className="hover:bg-[#00c6c0] text-sm">
                      <Link to="/">Desktop Terminal</Link>
                    </li>
                    <li className="hover:bg-[#00c6c0] text-sm">
                      <Link to="/">Pay at the table</Link>
                    </li>
                    <li className="hover:bg-[#00c6c0] text-sm">
                      <Link to="/">Wireless Terminal</Link>
                    </li>
                    <li className="hover:bg-[#00c6c0] text-sm">
                      <Link to="/">Mobile Payment</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to="/features">Features</Link>
              </li>
              <li>
                <details>
                  <summary>Partnership</summary>
                  <ul className="bg-white text-black border-b-2 rounded-sm w-52">
                    <li className="hover:bg-[#00c6c0] text-sm">
                      <Link to="/referral">Referral Program</Link>
                    </li>
                    <li className="hover:bg-[#00c6c0] text-sm">
                      <Link to="/">ISO Reseller Program</Link>
                    </li>
                    <li className="hover:bg-[#00c6c0] text-sm">
                      <Link to="/">Agent Revenue Share</Link>
                    </li>
                    <li className="hover:bg-[#00c6c0] text-sm">
                      <Link to="/">Submit Referral</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="border border-[#00c6c0] text-[#00c6c0] py-3 px-10 rounded-full"
                >
                  Get started
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;






{/* <button
                    className="border border-[#00c6c0] text-[#00c6c0] py-3 px-10 rounded-full"
                    onClick={() =>
                      document.getElementById("my_modal_4").showModal()
                    }
                  >
                    Get started
                  </button>
                  <dialog id="my_modal_4" className="modal max-w-5xl mx-auto w-11/12">
                    <div
                      style={{
                        backgroundImage: "url(/images/bg-popup.webp)",
                      }}
                      className=" w-full h-full max-w-5xl absolute top-[80]"
                    >
                      <div>
                        <div></div>
                      </div>

                      <div className="modal-action">
                        <form method="dialog">

                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog> */}