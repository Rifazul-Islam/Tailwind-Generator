import React from "react";

const RightSidebar = () => {
  return (
    <div className="ml-[190px]">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className=" bg-primary border text-base-content min-h-full w-60 p-4">
            {/* Sidebar content here */}
            <li> Right Side Bar</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
