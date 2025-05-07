import { BiLogoLinkedin, BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import { PiMapPinAreaFill } from "react-icons/pi";
import { RiInstagramFill } from "react-icons/ri";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "/images/LOGO.png";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const closeAllDetails = () => {
    document
      .querySelectorAll("details[open]")
      .forEach((d) => d.removeAttribute("open"));
  };

  return (
    <div className="fixed z-50 w-[100%]">
      {/* top nav  */}

      <div className="bgs2">
        <div className="hidden lg:flex items-center text-black py-1 px-3 max-w-7xl mx-auto">
          <div className="w-[50%] flex justify-start items-center gap-2">
            <PiMapPinAreaFill size={25} />
            <p className="font-medium text-sm">
              9431 Haven Avenue Suite 100 Rancho Cucamonga CA 91730
            </p>
          </div>
          <div className="w-[50%] flex justify-end items-center gap-2">
            <BiSolidPhoneCall size={24} />
            <p> (855) 262-0796</p>
          </div>
        </div>
      </div>

      {/* main nav  */}

      <div className="bgs3">
        <div className="flex justify-between items-center text2 py-2 max-w-7xl mx-auto relative">
          <div>
            <div className="dropdown lg:hidden absolute right-0 top-7">
              <div
                tabIndex={0}
                // onClick={() => setIsOpen(!isOpen)}
                // onClick={() => setIsOpen((o) => !o)}
                onMouseEnter={() => setIsOpen((o) => !o)}
                role="button"
                className=" lg:hidden absolute right-2"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </div>
              <ul
                tabIndex={0}
                className={`menu menu-sm overflow-y-auto left-0 bgC text2 z-20 mt-10 w-96 h-screen rounded-lg p-6 pt-16 shadow space-y-10 transition-all ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg1 text1 text-xl border-b-2 py-2"
                          : "hover:bg-[#228800] hover:text-white text-xl border-b-2 md:border-b-2 py-2"
                      }`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg1 text1 text-xl border-b-2 py-2"
                          : "hover:bg-[#228800] hover:text-white text-xl border-b-2 md:border-b-2 py-2"
                      }`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <details>
                    <summary className="text-xl border-b-2 md:border-b-2 pb-4 md:pb-0">
                      Products
                    </summary>
                    <ul className=" lg:bg-white text-black lg:border-b-2 rounded-sm w-40">
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            `${
                              isActive
                                ? "bg1 text1 text-xl border-b-2 md:border-b-2 py-2 w-64 mt-2"
                                : "text2 text-xl border-b-2 md:border-b-2 py-2 w-64 mt-2"
                            }`
                          }
                          to="/clover-flex"
                        >
                          Clover Flex 3G & 4G
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            `${
                              isActive
                                ? "bg1 text1 text-xl border-b-2 md:border-b-2 py-2 w-64 mt-2"
                                : "text2 text-xl border-b-2 md:border-b-2 py-2 w-64 mt-2"
                            }`
                          }
                          to="/clover-duo"
                        >
                          Clover Duo Station
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            `${
                              isActive
                                ? "bg1 text1 text-xl border-b-2 md:border-b-2 py-2 w-64 mt-2"
                                : "text2 text-xl border-b-2 md:border-b-2 py-2 w-64 mt-2"
                            }`
                          }
                          to="/androidv"
                        >
                          A920 Android SmartPOS
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            `${
                              isActive
                                ? "bg1 text1 text-xl border-b-2 md:border-b-2 py-2 w-64 mt-2"
                                : "text2 text-xl border-b-2 md:border-b-2 py-2 w-64 mt-2"
                            }`
                          }
                          to="/desktop"
                        >
                          A80 Android Desktop
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            `${
                              isActive
                                ? "bg1 text1 text-xl border-b-2 md:border-b-2 py-2 w-64 mt-2"
                                : "text2 text-xl border-b-2 md:border-b-2 py-2 w-64 mt-2"
                            }`
                          }
                          to="/counter"
                        >
                          Desk/5000 Countertop Terminal
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            `${
                              isActive
                                ? "bg1 text1 text-xl border-b-2 md:border-b-2 py-2 w-64 mt-2"
                                : "text2 text-xl border-b-2 md:border-b-2 py-2 w-64 mt-2"
                            }`
                          }
                          to="/wireless"
                        >
                          Move/5000 Wireless Terminal
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            `${
                              isActive
                                ? "bg1 text1 text-xl border-b-2 md:border-b-2 py-2 w-64 mt-2"
                                : "text2 text-xl border-b-2 md:border-b-2 py-2 w-64 mt-2"
                            }`
                          }
                          to="/smart"
                        >
                          Newland N910 Smart Terminal
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={({ isActive }) =>
                            `${
                              isActive
                                ? "bg1 text1 text-xl border-b-2 md:border-b-2 py-2 w-64 mt-2"
                                : "text2 text-xl border-b-2 md:border-b-2 py-2 w-64 mt-2"
                            }`
                          }
                          to="/poynt"
                        >
                          Poynt C Smart Terminal
                        </NavLink>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg1 text1 text-xl border-b-2 py-2"
                          : "hover:bg-[#228800] hover:text-white text-xl border-b-2 md:border-b-2 py-2"
                      }`
                    }
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/features"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg1 text1 text-xl border-b-2 py-2"
                          : "hover:bg-[#228800] hover:text-white text-xl border-b-2 md:border-b-2 py-2"
                      }`
                    }
                  >
                    Features
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/partnership"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg1 text1 text-xl border-b-2 py-2"
                          : "hover:bg-[#228800] hover:text-white text-xl border-b-2 md:border-b-2 py-2"
                      }`
                    }
                  >
                    Partnership
                  </NavLink>
                </li>
                {/* <li>
                <details>
                  <summary className="text-xl border-b-2 md:border-b-2 pb-4 md:pb-0">
                    Partnership
                  </summary>
                  <ul className="lg:bg-white text-black lg:border-b-2 rounded-sm w-52">
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          `${
                            isActive
                              ? "bg1 text1 text-xl border-b-2 md:border-b-2 py-2 w-64 mt-2"
                              : "text2 text-xl border-b-2 md:border-b-2 py-2 w-64 mt-2"
                          }`
                        }
                        to="/referral"
                      >
                        Referral Program
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          `${
                            isActive
                              ? "bg1 text1 text-xl border-b-2 md:border-b-2 py-2 w-64 mt-2"
                              : "text2 text-xl border-b-2 md:border-b-2 py-2 w-64 mt-2"
                          }`
                        }
                        to="/reseller"
                      >
                        ISO Reseller Program
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          `${
                            isActive
                              ? "bg1 text1 text-xl border-b-2 md:border-b-2 py-2 w-64 mt-2"
                              : "text2 text-xl border-b-2 md:border-b-2 py-2 w-64 mt-2"
                          }`
                        }
                        to="/agent"
                      >
                        Agent Revenue Share
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          `${
                            isActive
                              ? "bg1 text1 text-xl border-b-2 md:border-b-2 py-2 w-64 mt-2"
                              : "text2 text-xl border-b-2 md:border-b-2 py-2 w-64 mt-2"
                          }`
                        }
                        to="/submit-referral"
                      >
                        Submit Referral
                      </NavLink>
                    </li>
                  </ul>
                </details>
              </li> */}
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg1 text1 text-xl border-b-2 py-2"
                          : "hover:bg-[#228800] hover:text-white text-xl border-b-2 md:border-b-2 py-2"
                      }`
                    }
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <Link to="/contact" className="btn1 uppercase w-48">
                    Get started
                  </Link>
                </li>
              </ul>
            </div>
            <Link to="/">
              <div className="w-28 p-2">
                <img src={Logo} alt="logo" />
              </div>
            </Link>
          </div>
          <div className=" ">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal items-center gap-2 text-xl  font-medium">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-none text2 border-b-2 border-[#228800]"
                          : ""
                      }`
                    }
                    to="/"
                    onClick={closeAllDetails}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-none text2 border-b-2 border-[#228800]"
                          : ""
                      }`
                    }
                    to="/about"
                    onClick={closeAllDetails}
                  >
                    About
                  </NavLink>
                </li>
                <li className="relative group">
                  <span className="cursor-pointer flex items-center">
                    Products
                    <svg
                      className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                  <ul
                    className="bg-white text-black border-b-2 space-y-1  w-72 absolute top-full left-0 p-4 
                    shadow-lg rounded
                    opacity-0 scale-95
                    pointer-events-none
                    transition
                    group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto"
                  >
                    <li className="hover:bg-[#228800] hover:text-white  text-sm">
                      <NavLink
                        className={({ isActive }) =>
                          `${
                            isActive
                              ? "bg1 text1"
                              : "hover:bg-[#228800] hover:text-white"
                          }`
                        }
                        to="/clover-flex"
                        onClick={closeAllDetails}
                      >
                        Clover Flex 3G & 4G
                      </NavLink>
                    </li>
                    <li className="hover:bg-[#228800] hover:text-white  text-sm">
                      <NavLink
                        className={({ isActive }) =>
                          `${
                            isActive
                              ? "bg1 text1"
                              : "hover:bg-[#228800] hover:text-white"
                          }`
                        }
                        to="/clover-duo"
                        onClick={closeAllDetails}
                      >
                        Clover Duo Station
                      </NavLink>
                    </li>
                    <li className="hover:bg-[#228800] hover:text-white  text-sm">
                      <NavLink
                        className={({ isActive }) =>
                          `${
                            isActive
                              ? "bg1 text1"
                              : "hover:bg-[#228800] hover:text-white"
                          }`
                        }
                        to="/android"
                        onClick={closeAllDetails}
                      >
                        A920 Android SmartPOS
                      </NavLink>
                    </li>
                    <li className="hover:bg-[#228800] hover:text-white  text-sm">
                      <NavLink
                        className={({ isActive }) =>
                          `${
                            isActive
                              ? "bg1 text1"
                              : "hover:bg-[#228800] hover:text-white"
                          }`
                        }
                        to="/desktop"
                        onClick={closeAllDetails}
                      >
                        A80 Android Desktop
                      </NavLink>
                    </li>
                    <li className="hover:bg-[#228800] hover:text-white  text-sm">
                      <NavLink
                        className={({ isActive }) =>
                          `${
                            isActive
                              ? "bg1 text1"
                              : "hover:bg-[#228800] hover:text-white"
                          }`
                        }
                        to="/counter"
                        onClick={closeAllDetails}
                      >
                        Desk/5000 Countertop Terminal
                      </NavLink>
                    </li>
                    <li className="hover:bg-[#228800] hover:text-white  text-sm">
                      <NavLink
                        className={({ isActive }) =>
                          `${
                            isActive
                              ? "bg1 text1"
                              : "hover:bg-[#228800] hover:text-white"
                          }`
                        }
                        to="/wireless"
                        onClick={closeAllDetails}
                      >
                        Move/5000 Wireless Terminal
                      </NavLink>
                    </li>
                    <li className="hover:bg-[#228800] hover:text-white  text-sm">
                      <NavLink
                        className={({ isActive }) =>
                          `${
                            isActive
                              ? "bg1 text1"
                              : "hover:bg-[#228800] hover:text-white"
                          }`
                        }
                        to="/smart"
                        onClick={closeAllDetails}
                      >
                        Newland N910 Smart Terminal
                      </NavLink>
                    </li>
                    <li className="hover:bg-[#228800] hover:text-white  text-sm">
                      <NavLink
                        className={({ isActive }) =>
                          `${
                            isActive
                              ? "bg1 text1"
                              : "hover:bg-[#228800] hover:text-white"
                          }`
                        }
                        to="/poynt"
                        onClick={closeAllDetails}
                      >
                        Poynt C Smart Terminal
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-none text2 border-b-2 border-[#228800]"
                          : ""
                      }`
                    }
                    to="/services"
                    onClick={closeAllDetails}
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-none text2 border-b-2 border-[#228800]"
                          : ""
                      }`
                    }
                    to="/features"
                    onClick={closeAllDetails}
                  >
                    Features
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-none text2 border-b-2 border-[#228800]"
                          : ""
                      }`
                    }
                    to="/partnership"
                    onClick={closeAllDetails}
                  >
                    Partnership
                  </NavLink>
                </li>
                {/* <li>
                <details>
                  <summary>Partnership</summary>
                  <ul className="bg-white text-black border-b-2  rounded-sm space-y-1 w-52">
                    <li className="hover:bg-[#228800] hover:text-white text-sm">
                      <NavLink
                        className={({ isActive }) =>
                          `${
                            isActive
                              ? "bg1 text-white rounded-none"
                              : "hover:bg-[#228800] hover:text-white"
                          }`
                        }
                        to="/referral"
                        onClick={closeAllDetails}
                      >
                        Referral Program
                      </NavLink>
                    </li>
                    <li className="hover:bg-[#228800] hover:text-white  text-sm">
                      <NavLink
                        className={({ isActive }) =>
                          `${
                            isActive
                              ? "bg1 text-white rounded-none"
                              : "hover:bg-[#228800] hover:text-white"
                          }`
                        }
                        to="/reseller"
                        onClick={closeAllDetails}
                      >
                        ISO Reseller Program
                      </NavLink>
                    </li>
                    <li className="hover:bg-[#228800] hover:text-white  text-sm">
                      <NavLink
                        className={({ isActive }) =>
                          `${
                            isActive
                              ? "bg1 text-white rounded-none"
                              : "hover:bg-[#228800] hover:text-white"
                          }`
                        }
                        to="/agent"
                        onClick={closeAllDetails}
                      >
                        Agent Revenue Share
                      </NavLink>
                    </li>
                    <li className="hover:bg-[#228800] hover:text-white  text-sm">
                      <NavLink
                        className={({ isActive }) =>
                          `${
                            isActive
                              ? "bg1 text-white rounded-none"
                              : "hover:bg-[#228800] hover:text-white"
                          }`
                        }
                        to="/submit-referral"
                        onClick={closeAllDetails}
                      >
                        Submit Referral
                      </NavLink>
                    </li>
                  </ul>
                </details>
              </li> */}
                <li>
                  <NavLink
                    to="/contact"
                    onClick={closeAllDetails}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-none text2 border-b-2 border-[#228800]"
                          : ""
                      }`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <Link to="/contact" className="btn1 uppercase">
                    Get started
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
