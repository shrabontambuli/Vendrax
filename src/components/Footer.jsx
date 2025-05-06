import { BiPhoneCall } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#5da869]">
      <div className="max-w-7xl mx-auto pt-20">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-14 px-4">
          <div>
            <h1 className="text-xl md:text-3xl leading-tight text-white font-bold mb-6">
              Ready To Clutch The Growth Curve For The Success Of Your{" "}
              <span className="text2">Business?</span>
            </h1>
            <div className="md:flex items-center">
              <p className="text-lg text-white md:mb-0">
                Maximize the potential of your business with our growth-driven
                solutions. Let’s together achieve your goals in an innovative
                and thriving dynamics.
              </p>
            </div>
          </div>
          <div>
            <div className="md:flex items-center gap-20">
              <div className="flex md:justify-center">
                <div>
                  <p className="text-white mb-3">Call Us</p>
                  <div className="flex items-center gap-4">
                    <BiPhoneCall className="text-white" size={28} />
                    <h4 className="text-white text-2xl">(855) 262-0796</h4>
                  </div>
                </div>
              </div>
              <div className="flex md:justify-center mt-6">
                <div>
                  <p className="text-white mb-3">Address</p>
                  <div className="flex items-center gap-4">
                    <IoLocationOutline className="text-white" size={28} />
                    <h4 className="text-white text-xl w-64">9431 Haven Avenue Suite 100 Rancho Cucamonga CA 91730</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-48 mt-6">
              <Link to="/contact">
                <button className="btn1">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center max-w-7xl mx-auto px-4 md:px-0 mb-2">
          <div className="w-36 bg-white h-[10px]"></div>
          <div className="w-[100%]  bg-white h-[1px]"></div>
        </div>
        {/* <footer className="footer sm:footer-horizontal items-center text-lg text-white p-10">
          <nav>
            <h6 className="font-medium text-3xl mb-2">Quick Links</h6>
            <a href="/" className="hover:text-[#0e0e0e] transition-all">
              Home
            </a>
            <a href="/about" className="hover:text-[#0e0e0e] transition-all">
              About
            </a>
            <a href="/Services" className="hover:text-[#0e0e0e] transition-all">
              Services
            </a>
            <a href="/features" className="hover:text-[#0e0e0e] transition-all">
              Features
            </a>
            <a href="/referral" className="hover:text-[#0e0e0e] transition-all">
              Referral Program
            </a>
            <a href="/reseller" className="hover:text-[#0e0e0e] transition-all">
              ISO Reseller Program
            </a>
            <a href="/agent" className="hover:text-[#0e0e0e] transition-all">
              Agent Revenue Share
            </a>
            <a href="/partnership" className="hover:text-[#0e0e0e] transition-all">
            Partnership 
            </a>
            <a href="/contact" className="hover:text-[#0e0e0e] transition-all">
              Contact Us
            </a>
          </nav>
          <nav>
            <h6 className="font-medium text-3xl mb-2">Services</h6>
            <a
              href="/ecommerce"
              className="hover:text-[#0e0e0e] transition-all"
            >
              Ecommerce
            </a>
            <a
              href="/restaurant"
              className="hover:text-[#0e0e0e] transition-all"
            >
              Restaurant
            </a>
            <a href="/Pay" className="hover:text-[#0e0e0e] transition-all">
              Pay at the table
            </a>
            <a
              href="/mobile-payment"
              className="hover:text-[#0e0e0e] transition-all"
            >
              Mobile Payment
            </a>
          </nav>
          <nav>
            <h6 className="font-medium text-3xl"></h6>
            <a
              href="/pos-service"
              className="hover:text-[#0e0e0e] lg:mt-10 transition-all"
            >
              POS service
            </a>
            <a
              href="/desktop-terminal"
              className="hover:text-[#0e0e0e] transition-all"
            >
              Desktop Terminal
            </a>
            <a href="/wireless" className="hover:text-[#0e0e0e] transition-all">
              Wireless Terminal
            </a>
          </nav>
          <nav>
            <h6 className="font-medium text-3xl mb-2">Social</h6>
            <a href="/" className="hover:text-[#0e0e0e] transition-all">
              Facebook
            </a>
            <a href="/" className="hover:text-[#0e0e0e] transition-all">
              Twitter
            </a>
            <a href="/" className="hover:text-[#0e0e0e] transition-all">
              Instagram
            </a>
            <a href="/" className="hover:text-[#0e0e0e] transition-all">
              LinkedIn
            </a>
            <a href="/" className="hover:text-[#0e0e0e] transition-all">
              Pinterest
            </a>
          </nav>
          <div>
            <aside className="grid-flow-col items-center">
              <div className="flex items-center gap-3">
                <img src="/images/logo3.png" alt="logo" />
                <h1 className="text-4xl font-medium text-white">Fundrax</h1>
              </div>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
              <p className="text-base text-white">
                Copyright © {new Date().getFullYear()} Fundrax. All right
                reserved
              </p>
            </nav>
          </div>
        </footer> */}
        <footer className=" max-w-7xl mx-auto sm:footer-horizontal text-neutral-content items-center p-4 mt-5">
          <div className="flex justify-between gap-4 items-center">
            <div className="w-24 bg-white p-2 rounded-lg">
              <img className="rounded-xl" src="/images/LOGO.png" alt="logo" />
            </div>
            <p className="text-base text-white">
              Copyright © {new Date().getFullYear()} Fundrax. All right reserved
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
