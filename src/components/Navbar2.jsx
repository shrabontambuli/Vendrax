import { BiLogoLinkedin, BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import { PiMapPinAreaFill } from "react-icons/pi";
import { RiInstagramFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import Logo from "/public/images/logo2.webp";
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
  
        <div className="navbar justify-between bg-transparent text-black lg:mt-7 py-6 md:py-0">
          <div>
            <div className="dropdown">
              <div
                tabIndex={0}
                // onClick={() => setIsOpen(!isOpen)}
                onClick={() => setIsOpen((o) => !o)}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </div>
              <ul
                tabIndex={0}
                className={`menu menu-sm dropdown-content bgC text-black z-10 mt-3 w-96 p-6 shadow space-y-10 transition-all ${
                  isOpen ? "block" : "hidden"
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
                        <Link to="/ecommerce">Ecommerce</Link>
                      </li>
                      <li className="hover:bg-[#00c6c0] text-xl border-b-2 md:border-b-2 pt-4 pb-2 md:pb-0">
                        <Link to="/pos-service">POS service</Link>
                      </li>
                      <li className="hover:bg-[#00c6c0] text-xl border-b-2 md:border-b-2 pt-4 pb-2 md:pb-0">
                        <Link to="/restaurant">Restaurant</Link>
                      </li>
                      <li className="hover:bg-[#00c6c0] text-xl border-b-2 md:border-b-2 pt-4 pb-2 md:pb-0">
                        <Link to="/desktop-terminal">Desktop Terminal</Link>
                      </li>
                      <li className="hover:bg-[#00c6c0] text-xl border-b-2 md:border-b-2 pt-4 pb-2 md:pb-0">
                        <Link to="/Pay">Pay at the table</Link>
                      </li>
                      <li className="hover:bg-[#00c6c0] text-xl border-b-2 md:border-b-2 pt-4 pb-2 md:pb-0">
                        <Link to="/wireless">Wireless Terminal</Link>
                      </li>
                      <li className="hover:bg-[#00c6c0] text-xl border-b-2 md:border-b-2 pt-4 pb-2 md:pb-0">
                        <Link to="/mobile-payment">Mobile Payment</Link>
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
                        <Link to="/reseller">ISO Reseller Program</Link>
                      </li>
                      <li className="hover:bg-[#00c6c0] text-xl border-b-2 md:border-b-2 pt-4 pb-2 md:pb-0">
                        <Link to="/agent">Agent Revenue Share</Link>
                      </li>
                      <li className="hover:bg-[#00c6c0] text-xl border-b-2 md:border-b-2 pt-4 pb-2 md:pb-0">
                        <Link to="/submit-referral">Submit Referral</Link>
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
          <div className=" ">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal items-center gap-2 text-2xl  font-medium">
                <li>
                  <Link to="/" onClick={closeAllDetails}>Home</Link>
                </li>
                <li>
                  <Link to="/about" onClick={closeAllDetails}>About</Link>
                </li>
                <li>
                  <details>
                    <summary>Services</summary>
                    <ul className="bg-white text-black border-b-2 rounded-sm w-40">
                      <li className="hover:bg-[#00c6c0] text-sm">
                        <Link to="/ecommerce" onClick={closeAllDetails}>Ecommerce</Link>
                      </li>
                      <li className="hover:bg-[#00c6c0] text-sm">
                        <Link to="/pos-service" onClick={closeAllDetails}>POS service</Link>
                      </li>
                      <li className="hover:bg-[#00c6c0] text-sm">
                        <Link to="/restaurant" onClick={closeAllDetails}>Restaurant</Link>
                      </li>
                      <li className="hover:bg-[#00c6c0] text-sm">
                        <Link to="/desktop-terminal" onClick={closeAllDetails}>Desktop Terminal</Link>
                      </li>
                      <li className="hover:bg-[#00c6c0] text-sm">
                        <Link to="/pay" onClick={closeAllDetails}>Pay at the table</Link>
                      </li>
                      <li className="hover:bg-[#00c6c0] text-sm">
                        <Link to="/wireless" onClick={closeAllDetails}>Wireless Terminal</Link>
                      </li>
                      <li className="hover:bg-[#00c6c0] text-sm">
                        <Link to="/mobile-payment" onClick={closeAllDetails}>Mobile Payment</Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <Link to="/features" onClick={closeAllDetails}>Features</Link>
                </li>
                <li>
                  <details>
                    <summary>Partnership</summary>
                    <ul className="bg-white text-black border-b-2 rounded-sm w-52">
                      <li className="hover:bg-[#00c6c0] text-sm">
                        <Link to="/referral" onClick={closeAllDetails}>Referral Program</Link>
                      </li>
                      <li className="hover:bg-[#00c6c0] text-sm">
                        <Link to="/reseller" onClick={closeAllDetails}>ISO Reseller Program</Link>
                      </li>
                      <li className="hover:bg-[#00c6c0] text-sm">
                        <Link to="/agent" onClick={closeAllDetails}>Agent Revenue Share</Link>
                      </li>
                      <li className="hover:bg-[#00c6c0] text-sm">
                        <Link to="/submit-referral" onClick={closeAllDetails}>Submit Referral</Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <Link to="/contact" onClick={closeAllDetails}>Contact</Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="border border-[#ed2325] bg-[#ed2325] text-white py-3 px-10 rounded-full"
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

export default Navbar2;
