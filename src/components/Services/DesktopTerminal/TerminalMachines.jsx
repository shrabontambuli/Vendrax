import React from "react";
import { Link } from "react-router-dom";

const TerminalMachines = () => {
  return (
    <div className="md:h-full">
      <div className="max-w-screen-2xl mx-auto lg:px-10">
        <div className="pt-20 lg:pt-48 md:flex items-center gap-4 relative">
          <div className="space-y-10 p-4 w-11/12">
            <span className="inline-block w-44 py-1 bg-red-100 text-red-600 rounded-full font-semibold text-lg text-center tracking-widest">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900">
              Point-Of-Sale Terminal Machines
            </h2>
          </div>
          <div className="p-2">
            <p className="text-gray-600 text-xl lg:w-10/12">
              Desktop POS terminals allow businesses, particularly small
              businesses to boost sales, manage inventory, and track customer
              information. Vendrax offers variations in desktop terminal
              machines which eliminates human error, ensuring accuracy.
            </p>
          </div>
          <img
            className="absolute hidden lg:flex -right-10 top-40"
            src="/images/bg7.webp"
            alt="icon"
          />
        </div>
        <div className="bg-[#edf3fe] lg:bg-white border-4 border-[#010c2f] rounded-3xl md:p-4 mt-20">
          <div className="md:flex gap-10">
            <div>
              <div className="lg:px-20 py-4">
                <h4 className="text-[#00a7a2] text-xl lg:text-4xl font-bold mt-6 md:mt-0 w-96">
                  Features
                </h4>
                <div className="w-16 h-1 bg-[#105964] my-4"></div>
              </div>
              <div
                className="lg:w-[856px] lg:h-[710px] rounded-2xl p-4 lg:p-16"
                style={{
                  backgroundImage: "url(/images/desk-bg1.webp)",
                }}
              >
                <div>
                  <div className="mt-4 space-y-2 pb-20 md:pb-36">
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Highest Security
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      User-friendly and intuitive interface
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Seamless NFC payment
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      An OS with secure payment and creative freedom
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Thermal Printer
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      All Payment options
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Network Connectivity options
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Open ecosystem of HTML5 business apps
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Color display
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Ethernet
                    </p>
                  </div>
                  <div className="lg:flex items-center gap-4">
                    <Link to="/">
                      <button className="flex items-center justify-center gap-3 bg-[#00c6c0] text-white font-semibold px-6 py-[14px] rounded-full hover:bg-[#e53e29] transition-all w-80 text-lg uppercase">
                        <img src="/images/brochure.webp" alt="" />
                        DOWNLOAD BROCHURE
                      </button>
                    </Link>
                    <Link to="/">
                      <button className="flex items-center justify-center bg-[#e53e29] text-white font-semibold px-6 py-4 rounded-full hover:bg-[#00c6c0] transition-all w-64 text-lg relative uppercase mt-8 lg:mt-0">
                        Get Started
                        <img
                          className="absolute -right-3"
                          src="/images/red-btn.webp"
                          alt=""
                        />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:p-0">
              <div className="py-4">
                <h4 className="text-[#00a7a2] text-xl lg:text-4xl font-bold mt-6 md:mt-0 w-96">
                  Desk 5000
                </h4>
                <div className="w-16 h-1 bg-[#105964] my-4"></div>
              </div>
              <div>
                <img src="/images/desk-img1.webp" alt="img" />
                <div className="py-4 mt-4">
                  <h4 className="text-[#00a7a2] text-xl lg:text-4xl font-bold mt-6 md:mt-0 w-96">
                    Payments
                  </h4>
                  <div className="w-16 h-1 bg-[#105964] my-4"></div>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="flex items-center gap-4 text-black text-xl">
                    <img src="/images/tick6.webp" alt="icon" />
                    Swipe cards (magstripe)
                  </p>
                  <p className="flex items-center gap-4 text-black text-xl">
                    <img src="/images/tick6.webp" alt="icon" />
                    Gift cards
                  </p>
                  <p className="flex items-center gap-4 text-black text-xl">
                    <img src="/images/tick6.webp" alt="icon" />
                    Chip cards (EMV)
                  </p>
                  <p className="flex items-center gap-4 text-black text-xl">
                    <img src="/images/tick6.webp" alt="icon" />
                    PIN debit
                  </p>
                  <p className="flex items-center gap-4 text-black text-xl">
                    <img src="/images/tick6.webp" alt="icon" />
                    Contactless (NFC)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#edf3fe] lg:bg-white border-4 border-[#010c2f] rounded-3xl md:p-4 mt-20">
          <div className="md:flex gap-10">
            <div>
              <div className="lg:px-20 py-4">
                <h4 className="text-[#00a7a2] text-xl lg:text-4xl font-bold mt-6 md:mt-0 w-96">
                  Features
                </h4>
                <div className="w-16 h-1 bg-[#105964] my-4"></div>
              </div>
              <div
                className="lg:w-[856px] lg:h-[710px] rounded-2xl p-4 lg:p-16"
                style={{
                  backgroundImage: "url(/images/desk-bg2.webp)",
                }}
              >
                <div>
                  <div className="mt-4 space-y-2 pb-20 md:pb-36">
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Highest Security
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      User-friendly and intuitive interface
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Seamless NFC payment
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      An OS with secure payment and creative freedom
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Thermal Printer
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      All Payment options
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Network Connectivity options
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Open ecosystem of HTML5 business apps
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Color display
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Ethernet
                    </p>
                  </div>
                  <div className="lg:flex items-center gap-4">
                    <Link to="/">
                      <button className="flex items-center justify-center gap-3 bg-[#00c6c0] text-white font-semibold px-6 py-[14px] rounded-full hover:bg-[#e53e29] transition-all w-80 text-lg uppercase">
                        <img src="/images/brochure.webp" alt="" />
                        DOWNLOAD BROCHURE
                      </button>
                    </Link>
                    <Link to="/">
                      <button className="flex items-center justify-center bg-[#e53e29] text-white font-semibold px-6 py-4 rounded-full hover:bg-[#00c6c0] transition-all w-64 text-lg relative uppercase mt-8 lg:mt-0">
                        Get Started
                        <img
                          className="absolute -right-3"
                          src="/images/red-btn.webp"
                          alt=""
                        />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:p-0">
              <div className="py-4">
                <h4 className="text-[#00a7a2] text-xl lg:text-4xl font-bold mt-6 md:mt-0 w-96">
                  DEJAVOO Z8 TRI COMM
                </h4>
                <div className="w-16 h-1 bg-[#105964] my-4"></div>
              </div>
              <div>
                <img src="/images/desk-img2.webp" alt="img" />
                <div className="py-4 mt-4">
                  <h4 className="text-[#00a7a2] text-xl lg:text-4xl font-bold mt-6 md:mt-0 w-96">
                    Payments
                  </h4>
                  <div className="w-16 h-1 bg-[#105964] my-4"></div>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="flex items-center gap-4 text-black text-xl">
                    <img src="/images/tick6.webp" alt="icon" />
                    Swipe cards (magstripe)
                  </p>
                  <p className="flex items-center gap-4 text-black text-xl">
                    <img src="/images/tick6.webp" alt="icon" />
                    Gift cards
                  </p>
                  <p className="flex items-center gap-4 text-black text-xl">
                    <img src="/images/tick6.webp" alt="icon" />
                    Chip cards (EMV)
                  </p>
                  <p className="flex items-center gap-4 text-black text-xl">
                    <img src="/images/tick6.webp" alt="icon" />
                    PIN debit
                  </p>
                  <p className="flex items-center gap-4 text-black text-xl">
                    <img src="/images/tick6.webp" alt="icon" />
                    Contactless (NFC)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#edf3fe] lg:bg-white border-4 border-[#010c2f] rounded-3xl md:p-4 mt-20">
          <div className="md:flex gap-10">
            <div>
              <div className="lg:px-20 py-4">
                <h4 className="text-[#00a7a2] text-xl lg:text-4xl font-bold mt-6 md:mt-0 w-96">
                  Features
                </h4>
                <div className="w-16 h-1 bg-[#105964] my-4"></div>
              </div>
              <div
                className="lg:w-[856px] lg:h-[860px] rounded-2xl p-4 lg:px-16"
                style={{
                  backgroundImage: "url(/images/desk-bg3.webp)",
                  backgroundRepeat:'no-repeat',
                  backgroundSize:'cover'
                }}
              >
                <div>
                  <div className="mt-4 pb-4 space-y-2">
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Online ordering: Take orders and payments online for
                      quick, contactless delivery
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Floor Plans: Build dynamic floor plans that match your
                      layout
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Pre-auth: Pre-authorize bar tabs
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Bundled Apps: Bar Tab Auths, Tips, Shifts, Discounts,
                      Happy Hour
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Orders: Set up order types and categories; move or
                      transfer orders; fire orders directly to kitchen or prep
                      stations; add items to partially paid orders
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Discounts: Apply discounts at the order level
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Taxes & Service Charges: Set up and automatically apply taxes at the item level;
                      apply service charges to large parties
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Payments: Split checks in any proportion
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Reporting: Run reports per revenue center (patio vs bar)
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Employee Management: Set up employee logins and access permissions
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Security: $100,000 liability protection against data breaches
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Support: 24x7 support
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      User friendly interface
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Fast processing speed
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Anywhere anytime access
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Inventory at your fingertips
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Robust reports
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Building your tribe
                    </p>
                  </div>
                  <div className="lg:flex items-center gap-4">
                    <Link to="/">
                      <button className="flex items-center justify-center gap-3 bg-[#00c6c0] text-white font-semibold px-6 py-[14px] rounded-full hover:bg-[#e53e29] transition-all w-80 text-lg uppercase">
                        <img src="/images/brochure.webp" alt="" />
                        DOWNLOAD BROCHURE
                      </button>
                    </Link>
                    <Link to="/">
                      <button className="flex items-center justify-center bg-[#e53e29] text-white font-semibold px-6 py-4 rounded-full hover:bg-[#00c6c0] transition-all w-64 text-lg relative uppercase mt-8 lg:mt-0">
                        Get Started
                        <img
                          className="absolute -right-3"
                          src="/images/red-btn.webp"
                          alt=""
                        />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:p-0 pb-4">
              <div className="py-4">
                <h4 className="text-[#00a7a2] text-xl lg:text-4xl font-bold mt-6 md:mt-0 w-96">
                Clover Mini
                </h4>
                <div className="w-16 h-1 bg-[#105964] my-4"></div>
              </div>
              <div>
                <img src="/images/desk-img2.webp" alt="img" />
                <div className="py-4 mt-4">
                  <h4 className="text-[#00a7a2] text-xl lg:text-4xl font-bold mt-6 md:mt-0 w-96">
                    Payments
                  </h4>
                  <div className="w-16 h-1 bg-[#105964] my-4"></div>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="flex items-center gap-4 text-black text-xl">
                    <img src="/images/tick6.webp" alt="icon" />
                    Swipe cards (magstripe)
                  </p>
                  <p className="flex items-center gap-4 text-black text-xl">
                    <img src="/images/tick6.webp" alt="icon" />
                    Gift cards
                  </p>
                  <p className="flex items-center gap-4 text-black text-xl">
                    <img src="/images/tick6.webp" alt="icon" />
                    Chip cards (EMV)
                  </p>
                  <p className="flex items-center gap-4 text-black text-xl">
                    <img src="/images/tick6.webp" alt="icon" />
                    PIN debit
                  </p>
                  <p className="flex items-center gap-4 text-black text-xl">
                    <img src="/images/tick6.webp" alt="icon" />
                    Contactless (NFC)
                  </p>
                  <p className="flex items-center gap-4 text-black text-xl">
                    <img src="/images/tick6.webp" alt="icon" />
                    Cash
                  </p>
                  <p className="flex items-center gap-4 text-black text-xl">
                    <img src="/images/tick6.webp" alt="icon" />
                    Checks
                  </p>
                  <p className="flex items-center gap-4 text-black text-xl">
                    <img src="/images/tick6.webp" alt="icon" />
                    Pre Auth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalMachines;
