import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LeftSidebar.css";
const LeftSidebar = () => {
  const [hexColor, setHexColor] = useState("#a664e8");
  const [cardTitleColor, setCardTitleColor] = useState("#557edd");
  const [cardContentColor, setCardContentColor] = useState("#e89569");
  const [buttonTextColor, setButtonTextColor] = useState("#212702");
  const [buttonBgColor, setButtonBgColor] = useState("#3F00E7");
  const [width, setWidth] = useState("10");
  const [showCode, setShowCode] = useState(true);
  //   console.log(hexColor);

  //   Copy Code

  //   const [cardText, setCardText] = useState("Hello, World!");
  //   const [padding, setPadding] = useState(10);
  //   const [borderRadius, setBorderRadius] = useState(8);
  //   const [bgColor, setBgColor] = useState("#ffffff");
  //   const [textColor, setTextColor] = useState("#000000");
  //   const [image, setImage] = useState(null);

  //   const [copySuccess, setCopySuccess] = useState("");
  //   const handleImageUpload = (e) => {
  //     const file = e.target.files[0];
  //     if (file) {
  //       const reader = new FileReader();
  //       reader.onloadend = () => setImage(reader.result);
  //       reader.readAsDataURL(file);
  //     }
  //   };

  //   const generateCode = () => {
  //     return `
  //   <div class="relative flex items-center justify-center w-96 min-h-[200px]
  //     p-${padding || 0} rounded-${borderRadius || 0} bg-[${bgColor || 0}] text-[${
  //       textColor || 0
  //     }] overflow-hidden">
  //     ${
  //       image
  //         ? `<img src="${image || 0}" alt="Card Background"
  //     class="absolute inset-0 w-full h-full object-cover opacity-40" />`
  //         : ""
  //     }
  //     <span class="z-10 text-xl font-bold">${cardText || 0}</span>
  //   </div>`;
  //   };

  //   const copyToClipboard = () => {
  //     navigator.clipboard.writeText(generateCode()).then(() => {
  //       setCopySuccess("Code copied to clipboard!");
  //       setTimeout(() => setCopySuccess(""), 2000); // Clear success message after 2 seconds
  //     });
  //   };

  return (
    <div>
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
                <h2 className="text-md font-bold mt-2 mb-1">Card Background</h2>
                <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
                  <input
                    type="color"
                    id="favcolor"
                    name="favcolor"
                    value={hexColor}
                    onChange={(e) => setHexColor(e.target.value)}
                    className="w-8 h-8 rounded-full cursor-pointer border-none"
                  />
                  <span className="label-text bg-base-200 px-3 py-1.5 rounded-lg ">
                    {hexColor}
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
            {/* Export Code Modal */}
            {/* {showCode && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                  <h2 className="text-xl font-bold mb-4">
                    Generated Tailwind CSS Code
                  </h2>
                  <textarea
                    readOnly
                    value={generateCode()}
                    className="w-full h-40 p-2 border rounded"
                  />
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={copyToClipboard}
                      className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                      Copy Code
                    </button>
                    <button
                      onClick={() => setShowCode(false)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Close
                    </button>
                  </div>
                  {copySuccess && (
                    <p className="text-green-600 mt-2">{copySuccess}</p>
                  )}
                </div>
              </div>
            )} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
