import { useState } from "react";
import RightSidebar from "../../Shared/RightSidebar/RightSidebar";

const CardGenerator = () => {
  const [cardBackground, setCardBackground] = useState("#a664e8");
  const [cardTitleColor, setCardTitleColor] = useState("#557edd");
  const [cardContentColor, setCardContentColor] = useState("#e89569");
  const [buttonTextColor, setButtonTextColor] = useState("#212702");
  const [buttonBgColor, setButtonBgColor] = useState("#3F00E7");
  const [width, setWidth] = useState("10");

  const generator = () => {
    return `
     <div className="card card-compact bg-base-100  shadow-xl  border">
          <figure className="bg-black">
            <img
              src="https://i.ibb.co.com/hs5bqcp/fruits-removebg-preview.png"
              alt=""
            />
          </figure>
          <div
            className="card-body "
            style={{ backgroundColor: cardContentColor }}
          >
            <h2 className="card-title "> Card Generator </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
     `;
  };

  return (
    <div className="grid grid-cols-1  lg:grid-cols-3 gap-5 bg-blue-50 ">
      <div>
        {/* Left Side  */}
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

              <li>
                <h2 className="text-xl font-bold text-[#4285F4]"> Settings </h2>
                <p className="text-lg font-medium mt-2"> width: w-{width}</p>
                <label className="block mb-2 ">
                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className="w-full cursor-pointer"
                  />
                </label>
                {/* check Box Area rounded  */}
                <div className="form-control py-2">
                  <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
                    <input type="checkbox" className="checkbox " />
                    <span className="label-text">Rounded Area</span>
                  </label>
                </div>

                {/* check Box Area use image */}
                <div className="form-control py-2">
                  <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
                    <input type="checkbox" checked className="checkbox " />
                    <span className="label-text ">Use Image</span>
                  </label>
                </div>

                {/* check Box Area  use Footer */}
                <div className="form-control py-2">
                  <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
                    <input type="checkbox" className="checkbox " />
                    <span className="label-text ">Use Footer</span>
                  </label>
                </div>

                {/* check Box Area center Text */}
                <div className="form-control py-2">
                  <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
                    <input type="checkbox" className="checkbox " />
                    <span className="label-text">Center Text</span>
                  </label>
                </div>
              </li>
              <li className="mb-10">
                <div className="border-[1px] my-2"></div>
                <h2 className="text-xl font-bold text-[#4285F4]">
                  Card Color Area:
                </h2>
                {/* Card background */}
                <p>
                  <h2 className="text-md font-bold mt-2 mb-1">
                    Card Background
                  </h2>
                  <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
                    <input
                      type="color"
                      id="favcolor"
                      name="favcolor"
                      value={cardBackground}
                      onChange={(e) => setCardBackground(e.target.value)}
                      className="w-8 h-8 rounded-full cursor-pointer border-none"
                    />
                    <span className="label-text bg-base-200 px-3 py-1.5 rounded-lg ">
                      {cardBackground}
                    </span>
                  </label>
                </p>
                {/* Card Title  */}
                <p>
                  <h2 className="text-md font-bold mt-2 mb-1">Card Title</h2>
                  <label className="flex items-center border-none gap-2  text-lg font-medium">
                    <input
                      type="color"
                      id="favcolor"
                      name="favcolor"
                      value={cardTitleColor}
                      onChange={(e) => setCardTitleColor(e.target.value)}
                      className="w-8 h-8 rounded-full cursor-pointer "
                    />
                    <span className="label-text bg-base-200 px-3 py-1.5 rounded-lg">
                      {cardTitleColor}
                    </span>
                  </label>
                </p>

                {/* Card Content  */}
                <p>
                  <h2 className="text-md font-bold mt-2 mb-1">Card Content</h2>
                  <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
                    <input
                      type="color"
                      id="favcolor"
                      name="favcolor"
                      value={cardContentColor}
                      onChange={(e) => setCardContentColor(e.target.value)}
                      className="w-8 h-8 rounded-full cursor-pointer "
                    />
                    <span className="label-text bg-base-200 px-3 py-1.5 rounded-lg border-none">
                      {cardContentColor}
                    </span>
                  </label>
                </p>

                {/* Button Text color */}
                <p>
                  <h2 className="text-md font-bold mt-2 mb-1">
                    Button Text Color
                  </h2>
                  <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
                    <input
                      type="color"
                      id="favcolor"
                      name="favcolor"
                      value={buttonTextColor}
                      onChange={(e) => setButtonTextColor(e.target.value)}
                      className="w-8 h-8 rounded-full cursor-pointer border-none"
                    />
                    <span className="label-text bg-base-200 px-3 py-1.5 rounded-lg ">
                      {buttonTextColor}
                    </span>
                  </label>
                </p>

                {/* Button background color */}
                <p>
                  <h2 className="text-md font-bold mt-2 mb-1">
                    Button Background Color
                  </h2>
                  <label className="flex items-center gap-2 cursor-pointer text-lg font-medium">
                    <input
                      type="color"
                      id="favcolor"
                      name="favcolor"
                      value={buttonBgColor}
                      onChange={(e) => setButtonBgColor(e.target.value)}
                      className="w-8 h-8 rounded-full cursor-pointer "
                    />
                    <span className="label-text bg-base-200 px-3 py-1.5 rounded-lg border-none">
                      {buttonBgColor}
                    </span>
                  </label>
                </p>

                <button className="btn text-white bg-[#4285F4] hover:bg-[#0a62f0] btn-sm w-full my-2 mt-8">
                  View Code
                </button>
                <button className="btn text-white bg-[#4285F4] hover:bg-[#0a62f0] btn-sm w-full">
                  Clear
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-28 ">
        {/* 01 card */}
        <div className="card card-compact bg-base-100  shadow-xl  border">
          <figure
            className="bg-black"
            style={{ backgroundColor: cardBackground }}
          >
            <img
              src="https://i.ibb.co.com/hs5bqcp/fruits-removebg-preview.png"
              alt=""
            />
          </figure>
          <div className={`card-body bg-[${cardTitleColor}]`}>
            <h2 className={`card-title text-[${cardTitleColor}]`}>
              Card Generator
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
};

export default CardGenerator;
