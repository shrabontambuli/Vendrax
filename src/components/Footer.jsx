const Footer = () => {
  return (
    <div className="relative"
      style={{
        backgroundImage: "url(/images/bg-foot.webp)",
      }}
    >
        <img className="absolute top-4 -right-5 md:right-2 lg:right-64 md:-top-4" src="/images/foot-bg1.webp" alt="" />

      <div className="md:max-w-screen-2xl mx-auto pt-20 lg:pt-44">
        <div className="md:flex items-center gap-10 mb-14 px-4 lg:px-10">
          <div className="lg:w-[790px] relative mb-16 md:mb-0">
            <h1 className="text-2xl lg:text-[43px] leading-tight text-white font-bold mb-6">
              Ready To Clutch The Growth Curve For The Success Of Your{" "}
              <span className="text-[#e53e29]">Business?</span>
            </h1>
            <div className="md:flex items-center">
              <p className="text-xl md:w-9/12 mb-20 md:mb-0">
                Maximize the potential of your business with our growth-driven
                solutions. Let’s together achieve your goals in an innovative
                and thriving dynamics.
              </p>
              <button className="flex items-center justify-center bg-[#e53e29] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#00c6c0] transition-all w-64 text-lg relative uppercase">
                Get Started
                <img
                  className="absolute -right-5"
                  src="/images/red-btn.webp"
                  alt=""
                />
              </button>
            </div>
            <img
              className="absolute right-32 bottom-20 md:right-10 md:bottom-32 lg:right-32 lg:bottom-20"
              src="/images/arr1.webp"
              alt=""
            />
          </div>
          <div className="lg:flex gap-10">
            <div className="">
              <img className="mb-2" src="/images/phone2.webp" alt="icon" />
              <p>Call Us</p>
              <h4 className="text-[#54c0c4] text-3xl">833-604-8051</h4>
            </div>
            <div className="mt-6 md:mt-0">
              <img className="mb-2" src="/images/map2.webp" alt="icon" />
              <p>Address</p>
              <h4 className="text-[#54c0c4] text-2xl w-80">
                15500 Voss Rd Suite 200 1171 Sugar Land, TX 77498-4601 United
                States
              </h4>
            </div>
          </div>
        </div>
        <img
          className="absolute right-0 bottom-72 md:right-20 md:top-80 lg:right-0 lg:top-[350px]"
          src="/images/foot-bg2.webp"
          alt=""
        />
        <div className="flex items-center md:max-w-screen-xl px-4 md:px-0 lg:ms-10 mb-2">
          <div className="w-36 bg-[#00A7A2] h-[10px]"></div>
          <div className="w-full lg:me-32 bg-[#00A7A2] h-[1px]"></div>
        </div>
        <footer className="footer sm:footer-horizontal text-lg text-white p-10">
          <nav>
            <h6 className="font-medium text-3xl mb-2">Quick Links</h6>
            <a href="/" className="hover:text-[#ee5028] transition-all">
              Home
            </a>
            <a href="/" className="hover:text-[#ee5028] transition-all">
              About
            </a>
            <a href="/" className="hover:text-[#ee5028] transition-all">
              Features
            </a>
            <a href="/" className="hover:text-[#ee5028] transition-all">
              Referral Program
            </a>
            <a href="/" className="hover:text-[#ee5028] transition-all">
              ISO Reseller Program
            </a>
            <a href="/" className="hover:text-[#ee5028] transition-all">
              Agent Revenue Share
            </a>
            <a href="/" className="hover:text-[#ee5028] transition-all">
              Contact Us
            </a>
          </nav>
          <nav>
            <h6 className="font-medium text-3xl mb-2">Services</h6>
            <a href="/" className="hover:text-[#ee5028] transition-all">
              Ecommerce
            </a>
            <a href="/" className="hover:text-[#ee5028] transition-all">
              Restaurant
            </a>
            <a href="/" className="hover:text-[#ee5028] transition-all">
              Pay at the table
            </a>
            <a href="/" className="hover:text-[#ee5028] transition-all">
              Mobile Payment
            </a>
          </nav>
          <nav>
            <h6 className="font-medium text-3xl"></h6>
            <a
              href="/"
              className="hover:text-[#ee5028] lg:mt-10 transition-all"
            >
              POS service
            </a>
            <a href="/" className="hover:text-[#ee5028] transition-all">
              Desktop Terminal
            </a>
            <a href="/" className="hover:text-[#ee5028] transition-all">
              Wireless Terminal
            </a>
          </nav>
          <nav>
            <h6 className="font-medium text-3xl mb-2">Social</h6>
            <a href="/" className="hover:text-[#ee5028] transition-all">
              Facebook
            </a>
            <a href="/" className="hover:text-[#ee5028] transition-all">
              Twitter
            </a>
            <a href="/" className="hover:text-[#ee5028] transition-all">
              Instagram
            </a>
            <a href="/" className="hover:text-[#ee5028] transition-all">
              LinkedIn
            </a>
            <a href="/" className="hover:text-[#ee5028] transition-all">
              Pinterest
            </a>
          </nav>
        </footer>
        <footer className="footer sm:footer-horizontal text-neutral-content items-center p-4 mt-5">
          <aside className="grid-flow-col items-center">
            <img src="/images/logo.webp" alt="logo" />
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
