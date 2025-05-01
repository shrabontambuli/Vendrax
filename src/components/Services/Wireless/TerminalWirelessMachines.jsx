import React from "react";
import { Link } from "react-router-dom";

const TerminalWirelessMachines = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-2 lg:px-0 my-24">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 relative">
          <div className="space-y-10 p-4 w-11/12">
            <span className="inline-block w-44 py-1 bgs text2 rounded-full font-semibold text-lg text-center tracking-widest">
              Our Services
            </span>
            <h2 className="text-2xl lg:text-5xl font-bold text2">
              Point-Of-Sale Terminal Machines
            </h2>
          </div>
          <div>
            <p className="text-gray-600 text-xl lg:w-10/12">
              Our wireless POS terminals allow businesses, particularly small
              businesses to boost sales, manage inventory, and track customer
              information. Vendrax offers variations in desktop terminal
              machines which eliminates human error, ensuring accuracy.
            </p>
          </div>
          <img
            className="absolute hidden lg:flex -right-0 top-40"
            src="/images/bg7.webp"
            alt="icon"
          />
        </div>

        <div className="bgs lg:bg-white border-4 border-[#010c2f] rounded-3xl px-2 md:p-4 pb-4 mt-20">
          <div className="md:flex gap-10">
            <div>
              <div className="lg:px-20 py-4">
                <h4 className="text2 text-xl lg:text-4xl font-bold mt-6 md:mt-0 w-96">
                  Features
                </h4>
                <div className="w-16 h-1 bg1 my-4"></div>
              </div>
              <div
                className="lg:w-[856px] lg:h-[860px] rounded-2xl p-4 lg:px-16"
                style={{
                  backgroundImage: "url(/images/wire-bg1.webp)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div>
                  <div className="mt-4 pb-4 space-y-2">
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Highest Security
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      High-resolution 5” touch screen
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      All-day battery
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Wi-Fi and LTE connectivity available
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Fingerprint login (up to 50 unique fingerprints)
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Receipt printer built-in
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Camera/barcode scanner built-in
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Fully PCI PTS compliant
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Sales-ready
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Stock-smart
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Customers to loyal fans
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Track your numbers
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Flex your business muscle
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Always on
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      In the cloud
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      First 30 days of monthly fee waived
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Free shipping on all orders
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Expert specialists to help you set up your system
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      24/7 toll-free ongoing support
                    </p>
                  </div>
                  <div className="lg:flex items-center gap-4">
                    <Link to="/">
                      <button className="flex items-center justify-center gap-5 btn1">
                        <img src="/images/brochure.webp" alt="" />
                        DOWNLOAD BROCHURE
                      </button>
                    </Link>
                    <Link to="/">
                      <button className="flex items-center justify-center btn1 mt-8 lg:mt-0">
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:p-0 pb-4">
              <div className="py-4">
                <h4 className="text2 text-xl lg:text-4xl font-bold mt-6 md:mt-0 w-96">
                  Clover Flex
                </h4>
                <div className="w-16 h-1 bg1 my-4"></div>
              </div>
              <div>
                <img className="object-cover w-80" src="/images/wire-img1.webp" alt="img" />
                <div className="py-4 mt-4">
                  <h4 className="text2 text-xl lg:text-4xl font-bold mt-6 md:mt-0 w-96">
                    Payments
                  </h4>
                  <div className="w-16 h-1 bg1 my-4"></div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bgs lg:bg-white border-4 border-[#010c2f] rounded-3xl px-2 md:p-4 pb-4 mt-20">
          <div className="md:flex gap-10">
            <div>
              <div className="lg:px-20 py-4">
                <h4 className="text2 text-xl lg:text-4xl font-bold mt-6 md:mt-0 w-96">
                  Features
                </h4>
                <div className="w-16 h-1 bg1 my-4"></div>
              </div>
              <div
                className="lg:w-[856px] lg:h-[860px] rounded-2xl p-4 lg:px-16"
                style={{
                  backgroundImage: "url(/images/wire-bg2.webp)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
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
                      Taxes & Service Charges: Set up and automatically apply
                      taxes at the item level; apply service charges to large
                      parties
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
                      Employee Management: Set up employee logins and access
                      permissions
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Security: $100,000 liability protection against data
                      breaches
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
                      <button className="flex items-center justify-center gap-5 btn1">
                        <img src="/images/brochure.webp" alt="" />
                        DOWNLOAD BROCHURE
                      </button>
                    </Link>
                    <Link to="/">
                      <button className="flex items-center justify-center btn1 mt-8 lg:mt-0">
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:p-0 pb-4">
              <div className="py-4">
                <h4 className="text2 text-xl lg:text-4xl font-bold mt-6 md:mt-0 w-96">
                  Clover Mini
                </h4>
                <div className="w-16 h-1 bg1 my-4"></div>
              </div>
              <div>
                <img className="object-cover w-80" src="/images/wire-img2.webp" alt="img" />
                <div className="py-4 mt-4">
                  <h4 className="text2 text-xl lg:text-4xl font-bold mt-6 md:mt-0 w-96">
                    Payments
                  </h4>
                  <div className="w-16 h-1 bg1 my-4"></div>
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
        <div className="bgs lg:bg-white border-4 border-[#010c2f] rounded-3xl px-2v md:p-4 pb-4 mt-20">
          <div className="md:flex gap-10">
            <div>
              <div className="lg:px-20 py-4">
                <h4 className="text2 text-xl lg:text-4xl font-bold mt-6 md:mt-0 w-96">
                  Features
                </h4>
                <div className="w-16 h-1 bg1 my-4"></div>
              </div>
              <div className="lg:w-[856px] lg:h-[710px] rounded-2xl p-4 lg:p-16 bg-[#fef4f4]">
                <div>
                  <div className="mt-4 space-y-6 pb-20 md:pb-36">
                    <h3 className="text-2xl text-black font-bold">
                      *BOTH 3G AND WIFI DEVICES AVAILABLE*
                    </h3>
                    <p className="text-black text-xl">
                      The Poynt payment terminal is a fast, powerful, and secure
                      all-in-one payment solution that streamlines operations –
                      saving you money, but more importantly time. The Poynt
                      Smart Terminal is a credit card processing terminal that
                      displays a sleek and modern design which is perfect for
                      table-side, in-aisle, or on-the-go payments, allowing both
                      you and your customer a great view of every transaction.
                      Wireless POS is now better than ever, with improved
                      battery life and print quality which includes an app
                      marketplace allowing you to manage all of your accounting
                      and inventory with a click of a button. Take the Poynt
                      Smart Terminal 3G beyond the boundaries of your internet
                      and meet the needs of your business.
                    </p>
                  </div>
                  <div className="lg:flex items-center gap-4">
                    <Link to="/">
                      <button className="flex items-center justify-center gap-5 btn1">
                        <img src="/images/brochure.webp" alt="" />
                        DOWNLOAD BROCHURE
                      </button>
                    </Link>
                    <Link to="/">
                      <button className="flex items-center justify-center btn1 mt-8 lg:mt-0">
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:p-0">
              <div className="py-4">
                <h4 className="text2 text-xl lg:text-4xl font-bold mt-6 md:mt-0 w-96">
                  Poynt Smart Terminal 3G
                </h4>
                <div className="w-16 h-1 bg1 my-4"></div>
              </div>
              <div>
                <img className="object-cover w-80" src="/images/wire-img3.webp" alt="img" />
                <img className="object-cover w-80 mx-auto" src="/images/wire-bg3.webp" alt="img" />
              </div>
            </div>
          </div>
        </div>
        <div className="bgs lg:bg-white border-4 border-[#010c2f] rounded-3xl px-2 md:p-4 pb-4 mt-20">
          <div className="md:flex gap-10">
            <div>
              <div className="lg:px-20 py-4">
                <h4 className="text2 text-xl lg:text-4xl font-bold mt-6 md:mt-0 w-96">
                  Features
                </h4>
                <div className="w-16 h-1 bg1 my-4"></div>
              </div>
              <div
                className="lg:w-[856px] lg:h-[710px] rounded-2xl p-4 lg:p-16"
                style={{
                  backgroundImage: "url(/images/wire-bg4.webp)",
                }}
              >
                <div>
                  <div className="mt-4 space-y-2 pb-10">
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Use your own WiFi wireless network
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Connects easily, terminal finds available networks
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Multiple options keep you connected
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      EMV and NFC contactless built-in
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      3.5’’ Color LCD with touchscreen for signature on display
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      192 MB of Memory (128 MB RAM / 64 MB DDR RAM)
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Model: The Vega 3000 is PCI PTS v5.x Certified
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      EMV 4.x L1 and L2 certified
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Apple Pay, Samsung Pay, Visa payWave, MasterCard PayPass
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Monthly SIM card plan options for 4G models
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      4G/3G Models use multiple data networks for unbeatable
                      coverage map
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Self-discovering WiFi networks – set up with the touch of
                      an icon for all WiFi enabled Models
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      32bits 400MHz high speed microprocessor
                    </p>
                  </div>
                  <div className="lg:flex items-center gap-4">
                    <Link to="/">
                      <button className="flex items-center justify-center gap-5 btn1">
                        <img src="/images/brochure.webp" alt="" />
                        DOWNLOAD BROCHURE
                      </button>
                    </Link>
                    <Link to="/">
                      <button className="flex items-center justify-center btn1 mt-8 lg:mt-0">
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:p-0">
              <div className="py-4">
                <h4 className="text2 text-xl lg:text-4xl font-bold mt-6 md:mt-0 w-96">
                Dejavoo Z9
                </h4>
                <div className="w-16 h-1 bg1 my-4"></div>
              </div>
              <div>
                <img className="object-cover w-80" src="/images/desk-img1.webp" alt="img" />
                <div className="py-4 mt-4">
                  <h4 className="text2 text-xl lg:text-4xl font-bold mt-6 md:mt-0 w-96">
                    Payments
                  </h4>
                  <div className="w-16 h-1 bg1 my-4"></div>
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
        <div className="bgs lg:bg-white border-4 border-[#010c2f] rounded-3xl px-2 md:p-4 pb-4 mt-20">
          <div className="md:flex gap-10">
            <div>
              <div className="lg:px-20 py-4">
                <h4 className="text2 text-xl lg:text-4xl font-bold mt-6 md:mt-0 w-96">
                  Features
                </h4>
                <div className="w-16 h-1 bg1 my-4"></div>
              </div>
              <div
                className="lg:w-[856px] lg:h-[710px] rounded-2xl p-4 lg:p-16"
                style={{
                  backgroundImage: "url(/images/wire-bg5.webp)",
                }}
              >
                <div>
                  <div className="mt-4 space-y-2 pb-10 lg:pb-60">
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Fast introduction with Telium TETRA OS
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Compatible with Ingenico’s suite of services
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Maximized network availability
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Highest security
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Alternative payment methods
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      3G / 4G , Wi-Fi
                    </p>
                    <p className="flex items-center gap-4 text-black text-xl">
                      <img src="/images/tick6.webp" alt="icon" />
                      Optimal user-experience
                    </p>
                  </div>
                  <div className="lg:flex items-center gap-4">
                    <Link to="/">
                      <button className="flex items-center justify-center gap-5 btn1">
                        <img src="/images/brochure.webp" alt="" />
                        DOWNLOAD BROCHURE
                      </button>
                    </Link>
                    <Link to="/">
                      <button className="flex items-center justify-center btn1 mt-8 lg:mt-0">
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:p-0">
              <div className="py-4">
                <h4 className="text2 text-xl lg:text-4xl font-bold mt-6 md:mt-0 w-96">
                Move 5000
                </h4>
                <div className="w-16 h-1 bg1 my-4"></div>
              </div>
              <div>
                <img className="object-cover w-80" src="/images/wire-img5.webp" alt="img" />
                <div className="py-4 mt-4">
                  <h4 className="text2 text-xl lg:text-4xl font-bold mt-6 md:mt-0 w-96">
                    Payments
                  </h4>
                  <div className="w-16 h-1 bg1 my-4"></div>
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
      </div>
    </div>
  );
};

export default TerminalWirelessMachines;
