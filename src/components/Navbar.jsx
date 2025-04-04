import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-green-600 border-b-2 border-black shadow-xl px-4 py-2 rounded-lg"
              : "hover:bg-green-600 px-4 py-2 rounded-lg"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "bg-green-600 border-b-2 border-black shadow-xl px-4 py-2 rounded-lg"
              : "hover:bg-green-600 px-4 py-2 rounded-lg"
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/reports"
          className={({ isActive }) =>
            isActive
              ? "bg-green-600 border-b-2 border-black shadow-xl px-4 py-2 rounded-lg"
              : "hover:bg-green-600 px-4 py-2 rounded-lg"
          }
        >
          Reports
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/hr"
          className={({ isActive }) =>
            isActive
              ? "bg-green-600 border-b-2 border-black shadow-xl px-4 py-2 rounded-lg"
              : "hover:bg-green-600 px-4 py-2 rounded-lg"
          }
        >
          HR
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/sheets"
          className={({ isActive }) =>
            isActive
              ? "bg-green-600 border-b-2 border-black shadow-xl px-4 py-2 rounded-lg"
              : "hover:bg-green-600 px-4 py-2 rounded-lg"
          }
        >
          Sheets
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            isActive
              ? "bg-green-600 border-b-2 border-black shadow-xl px-4 py-2 rounded-lg"
              : "hover:bg-green-600 px-4 py-2 rounded-lg"
          }
        >
          Admin
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "bg-green-600 border-b-2 border-black shadow-xl px-4 py-2 rounded-lg"
              : "hover:bg-green-600 px-4 py-2 rounded-lg"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            isActive
              ? "bg-green-600 border-b-2 border-black shadow-xl px-4 py-2 rounded-lg"
              : "hover:bg-green-600 px-4 py-2 rounded-lg"
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#338f2b] lg:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="space-y-1 p-3 menu-sm dropdown-content bg-[#338f2b] rounded-box z-[1] mt-3 text-black font-medium w-52 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <h2 className="text-3xl text-black font-semibold">MISX</h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" space-x-1 menu-horizontal text-black font-medium px-1">
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-2 items-center">
          <Link to="/login">
            <button className=" btn btn-neutral btn-outline">Login</button>
          </Link>

          <Link to="/register">
            <button className=" btn btn-neutral">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
