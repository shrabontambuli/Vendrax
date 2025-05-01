import { BiLogoLinkedin, BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import { PiMapPinAreaFill } from "react-icons/pi";
import { RiInstagramFill } from "react-icons/ri";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "/public/images/logo3.png";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar2 = () => {
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
    <div className="absolute z-20 w-[100%]">
      {/* top nav  */}

      <div className="bgs2">
        <div className="hidden lg:flex items-center text-black py-1 px-3 max-w-screen-xl mx-auto">
          <div className="w-[50%] flex justify-start items-center gap-2">
            <PiMapPinAreaFill size={25} />
            <p className="font-medium text-sm">
              15500 Voss Rd Suite 200 1171 Sugar Land, TX 77498-4601 United
              States
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
      </div>

      {/* main nav  */}

      <div className="flex justify-between items-center text2 py-6 md:py-8 max-w-screen-xl mx-auto relative">
             <div>
               <div className="dropdown lg:hidden absolute right-2">
                 <div
                   tabIndex={0}
                   // onClick={() => setIsOpen(!isOpen)}
                   onClick={() => setIsOpen((o) => !o)}
                   role="button"
                   className="btn btn-ghost lg:hidden absolute right-2"
                 >
                   {isOpen ? <X size={28}  /> : <Menu size={28} />}
                 </div>
                 <ul
                   tabIndex={0}
                   className={`menu menu-sm left-0 bgC text2 z-10 mt-10 w-96  h-screen md:h-full rounded-lg p-6 pt-20 shadow space-y-10 transition-all ${
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
                         Services
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
                             to="/ecommerce"
                           >
                             Ecommerce
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
                             to="/pos-service"
                           >
                             POS service
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
                             to="/restaurant"
                           >
                             Restaurant
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
                             to="/desktop-terminal"
                           >
                             Desktop Terminal
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
                             to="/Pay"
                           >
                             Pay at the table
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
                             Wireless Terminal
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
                             to="/mobile-payment"
                           >
                             Mobile Payment
                           </NavLink>
                         </li>
                       </ul>
                     </details>
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
                   </li>
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
                     <Link to="/" className="btn1 uppercase w-48">
                       Get started
                     </Link>
                   </li>
                 </ul>
               </div>
               <Link to="/" className="btn btn-ghost text-xl">
                 <div className="flex items-center gap-2">
                   <img src={Logo} alt="logo" />
                   <h1 className="text-4xl">Vendrax</h1>
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
                   <li>
                     <details>
                       <summary>Services</summary>
                       <ul className="bg-white text-black border-b-2 space-y-1 rounded-sm w-40">
                         <li className="hover:bg-[#228800] hover:text-white  text-sm">
                           <NavLink
                             className={({ isActive }) =>
                               `${
                                 isActive
                                   ? "bg1 text-white rounded-none"
                                   : "hover:bg-[#228800] hover:text-white"
                               }`
                             }
                             to="/ecommerce"
                             onClick={closeAllDetails}
                           >
                             Ecommerce
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
                             to="/pos-service"
                             onClick={closeAllDetails}
                           >
                             POS service
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
                             to="/restaurant"
                             onClick={closeAllDetails}
                           >
                             Restaurant
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
                             to="/desktop-terminal"
                             onClick={closeAllDetails}
                           >
                             Desktop Terminal
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
                             to="/pay"
                             onClick={closeAllDetails}
                           >
                             Pay at the table
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
                             to="/wireless"
                             onClick={closeAllDetails}
                           >
                             Wireless Terminal
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
                             to="/mobile-payment"
                             onClick={closeAllDetails}
                           >
                             Mobile Payment
                           </NavLink>
                         </li>
                       </ul>
                     </details>
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
                   </li>
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
                     <Link to="/" className="btn1 uppercase">
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

export default Navbar2;
