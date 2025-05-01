import { BiPhoneCall } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-[#5da869]">
      <div className="max-w-7xl mx-auto pt-20 lg:pt-44 relative">
        <img
          className="absolute top-4 md:w-72 lg:w-96 md:right-0 lg:right-64 md:-top-4"
          src="/images/foot-bg1.webp"
          alt=""
        />
        <div className=" grid grid-cols-1 lg:grid-cols-2 items-center gap-10 mb-14 px-4 lg:px-10">
          <div className=" relative mb-16 md:mb-0">
            <h1 className="text-2xl md:text-3xl lg:text-4xl leading-tight text-white font-bold mb-6">
              Ready To Clutch The Growth Curve For The Success Of Your{" "}
              <span className="text-white">Business?</span>
            </h1>
            <div className="md:flex items-center">
              <p className="text-xl text-white md:w-8/12 mb-20 md:mb-0">
                Maximize the potential of your business with our growth-driven
                solutions. Let’s together achieve your goals in an innovative
                and thriving dynamics.
              </p>
              <button className="btn1">Get Started</button>
            </div>
            <img
              className="absolute left-80 bottom-28 hidden lg:flex"
              src="/images/arr1.webp"
              alt=""
            />
          </div>
          <div className="lg:flex gap-10">
            <div className="">
              <BiPhoneCall className="text-white mb-2" size={28} />
              <p className="text-white mb-3">Call Us</p>
              <h4 className="text-white text-3xl">833-604-8051</h4>
            </div>
            <div className="mt-6 md:mt-0">
              <IoLocationOutline className="text-white mb-2" size={28} />
              <p className="text-white mb-3">Address</p>
              <h4 className="text-white text-2xl w-80">
                15500 Voss Rd Suite 200 1171 Sugar Land, TX 77498-4601 United
                States
              </h4>
            </div>
          </div>
        </div>
        <img
          className="absolute right-0 top-[350px] hidden lg:flex"
          src="/images/foot-bg2.webp"
          alt=""
        />
        <div className="flex items-center md:max-w-screen-xl px-4 md:px-0 lg:ms-10 mb-2">
          <div className="w-36 bg-white h-[10px]"></div>
          <div className="w-full lg:me-32 bg-white h-[1px]"></div>
        </div>
        <footer className="footer sm:footer-horizontal text-lg text-white p-10">
          <nav>
            <h6 className="font-medium text-3xl mb-2">Quick Links</h6>
            <a href="/" className="hover:text-[#0e0e0e] transition-all">
              Home
            </a>
            <a href="/about" className="hover:text-[#0e0e0e] transition-all">
              About
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
        </footer>
        <footer className="footer sm:footer-horizontal text-neutral-content items-center p-4 mt-5">
          <aside className="grid-flow-col items-center">
            <div className="flex items-center gap-3">
              <img src="/images/logo3.png" alt="logo" />
              <h1 className="text-4xl font-medium text-white">Vendrax</h1>
            </div>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <p className="text-base text-white">
              Copyright © {new Date().getFullYear()} Vendrax. All right reserved
            </p>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
