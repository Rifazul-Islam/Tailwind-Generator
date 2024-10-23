// import { useState } from "react";

// const store = () => {
//   const [cardBackground, setCardBackground] = useState("#a664e8");
//   const [cardTitleColor, setCardTitleColor] = useState("#557edd");
//   const [cardContentColor, setCardContentColor] = useState("#e89569");
//   const [buttonTextColor, setButtonTextColor] = useState("#212702");
//   const [buttonBgColor, setButtonBgColor] = useState("#3F00E7");
//   const [rangeValue, setRangeValue] = useState();
//   return (
//     <div className="drawer lg:drawer-open">
//       <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//       <div className="drawer-content flex flex-col items-center justify-center">
//         {/* Page content here */}
//         <label
//           htmlFor="my-drawer-2"
//           className="btn btn-primary drawer-button lg:hidden"
//         >
//           Open drawer
//         </label>
//       </div>
//       <div className="drawer-side">
//         <label
//           htmlFor="my-drawer-2"
//           aria-label="close sidebar"
//           className="drawer-overlay"
//         ></label>
//         <ul className=" bg-primary border text-base-content min-h-full w-60 p-4">
//           {/* Sidebar content here */}

//           <li>
//             <h2 className="text-xl font-bold text-[#4285F4]"> Settings </h2>
//             <p className="text-lg font-medium mt-2"> width: w-{rangeValue}</p>
//             <label className="block mb-2 ">
//               <input
//                 type="range"
//                 min={0}
//                 max="100"
//                 value={rangeValue}
//                 className="range"
//                 onChange={(e) => setRangeValue(e.target.value)}
//                 style={{ height: "20px" }}
//               />
//             </label>
//             {/* check Box Area rounded  */}
//             <div className="form-control py-2">
//               <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
//                 <input type="checkbox" className="checkbox " />
//                 <span className="label-text">Rounded Area</span>
//               </label>
//             </div>

//             {/* check Box Area use image */}
//             <div className="form-control py-2">
//               <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
//                 <input type="checkbox" checked className="checkbox " />
//                 <span className="label-text ">Use Image</span>
//               </label>
//             </div>

//             {/* check Box Area  use Footer */}
//             <div className="form-control py-2">
//               <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
//                 <input type="checkbox" className="checkbox " />
//                 <span className="label-text ">Use Footer</span>
//               </label>
//             </div>

//             {/* check Box Area center Text */}
//             <div className="form-control py-2">
//               <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
//                 <input type="checkbox" className="checkbox " />
//                 <span className="label-text">Center Text</span>
//               </label>
//             </div>
//           </li>
//           <li className="mb-10">
//             <div className="border-[1px] my-2"></div>
//             <h2 className="text-xl font-bold text-[#4285F4]">
//               Card Color Area:
//             </h2>
//             {/* Card background */}
//             <p>
//               <h2 className="text-md font-bold mt-2 mb-1">Card Background</h2>
//               <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
//                 <input
//                   type="color"
//                   id="favcolor"
//                   name="favcolor"
//                   value={cardBackground}
//                   onChange={(e) => setCardBackground(e.target.value)}
//                   className="w-8 h-8 rounded-full cursor-pointer border-none"
//                 />
//                 <span className="label-text bg-base-200 px-3 py-1.5 rounded-lg ">
//                   {cardBackground}
//                 </span>
//               </label>
//             </p>
//             {/* Card Title  */}
//             <p>
//               <h2 className="text-md font-bold mt-2 mb-1">Card Title</h2>
//               <label className="flex items-center border-none gap-2  text-lg font-medium">
//                 <input
//                   type="color"
//                   id="favcolor"
//                   name="favcolor"
//                   value={cardTitleColor}
//                   onChange={(e) => setCardTitleColor(e.target.value)}
//                   className="w-8 h-8 rounded-full cursor-pointer "
//                 />
//                 <span className="label-text bg-base-200 px-3 py-1.5 rounded-lg">
//                   {cardTitleColor}
//                 </span>
//               </label>
//             </p>

//             {/* Card Content  */}
//             <p>
//               <h2 className="text-md font-bold mt-2 mb-1">Card Content</h2>
//               <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
//                 <input
//                   type="color"
//                   id="favcolor"
//                   name="favcolor"
//                   value={cardContentColor}
//                   onChange={(e) => setCardContentColor(e.target.value)}
//                   className="w-8 h-8 rounded-full cursor-pointer "
//                 />
//                 <span className="label-text bg-base-200 px-3 py-1.5 rounded-lg border-none">
//                   {cardContentColor}
//                 </span>
//               </label>
//             </p>

//             {/* Button Text color */}
//             <p>
//               <h2 className="text-md font-bold mt-2 mb-1">Button Text Color</h2>
//               <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
//                 <input
//                   type="color"
//                   id="favcolor"
//                   name="favcolor"
//                   value={buttonTextColor}
//                   onChange={(e) => setButtonTextColor(e.target.value)}
//                   className="w-8 h-8 rounded-full cursor-pointer border-none"
//                 />
//                 <span className="label-text bg-base-200 px-3 py-1.5 rounded-lg ">
//                   {buttonTextColor}
//                 </span>
//               </label>
//             </p>

//             {/* Button background color */}
//             <p>
//               <h2 className="text-md font-bold mt-2 mb-1">
//                 Button Background Color
//               </h2>
//               <label className="flex items-center gap-2 cursor-pointer text-lg font-medium">
//                 <input
//                   type="color"
//                   id="favcolor"
//                   name="favcolor"
//                   value={buttonBgColor}
//                   onChange={(e) => setButtonBgColor(e.target.value)}
//                   className="w-8 h-8 rounded-full cursor-pointer "
//                 />
//                 <span className="label-text bg-base-200 px-3 py-1.5 rounded-lg border-none">
//                   {buttonBgColor}
//                 </span>
//               </label>
//             </p>

//             <button className="btn text-white bg-[#4285F4] hover:bg-[#0a62f0] btn-sm w-full my-2 mt-8">
//               View Code
//             </button>
//             <button className="btn text-white bg-[#4285F4] hover:bg-[#0a62f0] btn-sm w-full">
//               Clear
//             </button>
//           </li>
//         </ul>
//       </div>

//     </div>
//   );
// };

// export default store;

{
  /* Grid porpuse use  */
}
// import React, { useState } from "react";

// function CardGenerator() {
//   const [bgColor, setBgColor] = useState("bg-white");
//   const [padding, setPadding] = useState("p-4");
//   const [rounded, setRounded] = useState("rounded-md");
//   const [shadow, setShadow] = useState("shadow-lg");
//   const [modalOpen, setModalOpen] = useState(false);
//   const [copySuccess, setCopySuccess] = useState("");

//   const tailwindClasses = `${bgColor} ${padding} ${rounded} ${shadow}`;

//   // Generate the JSX string for the entire card
//   const generateCode = () => `
//     <div className="${tailwindClasses} max-w-sm overflow-hidden">
//       <img
//         src="https://via.placeholder.com/300"
//         alt="Card Image"
//         className="w-full ${rounded}"
//       />
//       <div className="p-4">
//         <h3 className="text-lg font-bold mb-2">Card Title</h3>
//         <p className="text-gray-700 mb-4">
//           This is a description of the card. You can customize the card's appearance using the options above.
//         </p>
//         <button className="bg-blue-500 text-white px-4 py-2 rounded">
//           Learn More
//         </button>
//       </div>
//     </div>
//   `;

//   // Copy to clipboard function
//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(generateCode()).then(() => {
//       setCopySuccess("Code copied to clipboard!");
//       //   setTimeout(() => setCopySuccess(""), 2000); // Clear success message after 2 seconds
//     });
//   };

//   // Open and close modal functions
//   const openModal = () => setModalOpen(true);
//   const closeModal = () => setModalOpen(false);

//   return (
//     <div className="container mx-auto p-6 flex flex-row gap-4">
//       {/* <h1 className="text-2xl font-bold mb-4">Tailwind Card Generator</h1> */}

//       {/* Customization Form */}
//       <div className="mb-6">
//         <label className="block mb-2">Background Color:</label>
//         <select
//           value={bgColor}
//           onChange={(e) => setBgColor(e.target.value)}
//           className="border p-2 mb-4 w-full"
//         >
//           <option value="bg-white">White</option>
//           <option value="bg-gray-100">Gray</option>
//           <option value="bg-blue-100">Blue</option>
//           <option value="bg-green-100">Green</option>
//         </select>

//         <label className="block mb-2">Padding:</label>
//         <select
//           value={padding}
//           onChange={(e) => setPadding(e.target.value)}
//           className="border p-2 mb-4 w-full"
//         >
//           <option value="p-2">Small</option>
//           <option value="p-4">Medium</option>
//           <option value="p-8">Large</option>
//         </select>

//         <label className="block mb-2">Rounded Corners:</label>
//         <select
//           value={rounded}
//           onChange={(e) => setRounded(e.target.value)}
//           className="border p-2 mb-4 w-full"
//         >
//           <option value="rounded-none">None</option>
//           <option value="rounded-md">Medium</option>
//           <option value="rounded-lg">Large</option>
//         </select>

//         <label className="block mb-2">Shadow:</label>
//         <select
//           value={shadow}
//           onChange={(e) => setShadow(e.target.value)}
//           className="border p-2 w-full"
//         >
//           <option value="shadow-none">None</option>
//           <option value="shadow-sm">Small</option>
//           <option value="shadow-md">Medium</option>
//           <option value="shadow-lg">Large</option>
//         </select>

//         {/* Show Code Button */}
//         <button
//           onClick={openModal}
//           className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
//         >
//           Show Code
//         </button>

//         {/* Modal */}
//         {modalOpen && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//             <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
//               <h2 className="text-xl font-semibold mb-2">Generated Code:</h2>
//               <pre className="bg-gray-100 p-4 rounded overflow-auto whitespace-pre-wrap">
//                 {generateCode()}
//               </pre>
//               <div className="mt-4">
//                 <button
//                   onClick={copyToClipboard}
//                   className="bg-green-500 text-white px-4 py-2 rounded mr-2"
//                 >
//                   Copy Code
//                 </button>
//                 <button
//                   onClick={closeModal}
//                   className="bg-red-500 text-white px-4 py-2 rounded"
//                 >
//                   Cancel
//                 </button>
//                 {copySuccess && (
//                   <p className="text-green-500 mt-2">{copySuccess}</p>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Preview Section */}
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold mb-2">Card Preview:</h2>
//         <div className={`max-w-sm ${tailwindClasses} overflow-hidden`}>
//           <img
//             src="https://i.ibb.co.com/hs5bqcp/fruits-removebg-preview.png"
//             alt="Card Image"
//             className={`w-full ${rounded}`}
//           />
//           <div className="p-4">
//             <h3 className="text-lg font-bold mb-2">Card Title</h3>
//             <p className="text-gray-700 mb-4">
//               This is a description of the card. You can customize the card's
//               appearance using the options above.
//             </p>
//             <button className="bg-blue-500 text-white px-4 py-2 rounded">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CardGenerator;
