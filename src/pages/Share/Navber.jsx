import { NavLink } from "react-router-dom";

const Navber = () => {
  const menuItems = (
    <>
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/tools"> Tools </NavLink>
      <NavLink to="/blog">Blog </NavLink>
    </>
  );

  return (
    <div className="navbar bg-primary shadow-md px-4">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {menuItems}
          </ul>
        </div>
        <NavLink className=" text-[22px] font-bold hidden lg:flex gap-2">
          <span className="text-[#4285F4]">TailwindCss</span>
          <span className="text-[#6f9ce6]"> Genaretor</span>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3 text-[18px] font-bold">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#4285F4] hover:bg-[#0c59d5] text-white lg:flex hidden">
          Get Started
        </a>
        <NavLink className=" text-[22px] font-bold flex lg:hidden">
          <span className="text-[#6f9ce6]"> Genaretor</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navber;
