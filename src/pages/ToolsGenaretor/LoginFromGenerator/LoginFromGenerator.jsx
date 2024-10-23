import React, { useState } from "react";
import LeftSidebar from "../../Shared/LeftSidebar/LeftSidebar";
import RightSidebar from "../../Shared/RightSidebar/RightSidebar";

const LoginFromGenerator = () => {
  const [fontSized, setFontSized] = useState(4);
  const [cardbgColor, setCardbgColor] = useState("#ffffff");
  const [titleColor, setTitleColor] = useState("#557edd");
  const [labelColor, setLabelColor] = useState("#3F00E7");
  const [buttonTextColor, setButtonTextColor] = useState("#212702");
  const [buttonBgColor, setButtonBgColor] = useState("#3F00E7");
  const [textDesctiption, setTextDesctiption] = useState(
    "Sign in to your account"
  );
  const [titleText, setTitleText] = useState("Acme Corp");
  return (
    <div className="flex flex-col lg:flex-row mt-2">
      {/* Left Side  */}

      <div className="lg:w-56 px-20 lg:px-4 py-1 bg-white min-h-screen border shadow-xl">
        <h2 className="text-blue-500 mb-4 font-bold text-xl">SignIn-Setting</h2>
        {/* check Box Area rounded  */}
        <div className="form-control py-2">
          <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
            <input type="checkbox" checked className="checkbox " />
            <span className="label-text">Rounded Area</span>
          </label>
        </div>

        {/* check Box Area use image */}
        <div className="form-control py-2">
          <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
            <input type="checkbox" checked className="checkbox " />
            <span className="label-text">Shadow</span>
          </label>
        </div>

        {/* check Box Area  use Footer */}
        <div className="form-control py-2">
          <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
            <input type="checkbox" checked className="checkbox " />
            <span className="label-text">Description</span>
          </label>
        </div>

        {/* check Box Area center Text */}
        <div className="form-control py-2">
          <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
            <input type="checkbox" checked className="checkbox " />
            <span className="label-text">Logo</span>
          </label>
        </div>

        <div className="border my-8"></div>
        <h2 className="text-blue-500 mb-4 font-bold text-xl">Header-Setting</h2>

        {/*  Header Setting */}
        <div className="form-control py-2">
          <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
            <input type="checkbox" checked className="checkbox " />
            <span className="label-text">V Aligned Header</span>
          </label>
        </div>
        <div className="form-control py-2">
          <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
            <input type="checkbox" checked className="checkbox " />
            <span className="label-text">Bold </span>
          </label>
        </div>

        {/* Items Purpus Use  */}
        <div>
          <p className="font-bold text-lg flex items-center pb-1.5 gap-2  ">
            Font-Size:
            <span className="bg-slate-300 rounded-md px-2 ">{fontSized}</span>
          </p>
          <label className="block mb-2">
            <input
              type="range"
              min={0}
              max={100}
              value={fontSized}
              className="range"
              onChange={(e) => setFontSized(Number(e.target.value))}
              style={{ height: "20px" }}
            />
          </label>
        </div>

        {/* Header Setting End Point*/}

        {/* form Setting */}
        <div className="border my-8"></div>
        <h2 className="text-blue-500 mb-4 font-bold text-xl">Form-Setting</h2>

        {/* Label Purpus Use  */}
        <div>
          <p className="font-bold text-lg flex items-center pb-1.5 gap-2  ">
            Label Font Size:
            <span className="bg-slate-300 rounded-md px-2 ">{fontSized}</span>
          </p>
          <label className="block mb-2">
            <input
              type="range"
              min={0}
              max={100}
              value={fontSized}
              className="range"
              onChange={(e) => setFontSized(Number(e.target.value))}
              style={{ height: "20px" }}
            />
          </label>
        </div>

        <div className="form-control py-2">
          <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
            <input type="checkbox" checked className="checkbox " />
            <span className="label-text">Bold </span>
          </label>
        </div>
        {/* Label Purpus Use  */}
        <div>
          <p className="font-bold text-lg flex items-center pb-1.5 gap-2  ">
            Description Font Size:
            <span className="bg-slate-300 rounded-md px-2 ">{fontSized}</span>
          </p>
          <label className="block mb-2">
            <input
              type="range"
              min={0}
              max={100}
              value={fontSized}
              className="range"
              onChange={(e) => setFontSized(Number(e.target.value))}
              style={{ height: "20px" }}
            />
          </label>
        </div>

        <button className="btn text-white bg-[#4285F4] hover:bg-[#0a62f0] btn-sm w-full my-2 mt-8">
          View Code
        </button>
        <button className="btn text-white bg-[#4285F4] hover:bg-[#0a62f0] btn-sm w-full">
          Clear
        </button>
      </div>

      {/* Contents Or Center  */}
      <div className="flex-auto">
        <div className=" bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="flex items-center justify-center">
              <img
                className="h-12 w-auto"
                src="https://i.ibb.co.com/MggRsBQ/jobLogo.png"
                alt="Workflow"
              />
              <h2 className=" text-center text-3xl font-extrabold text-gray-900">
                {titleText}
              </h2>
            </div>
            <h2 className="mt-6 text-center text-2xl font-medium text-gray-900">
              {textDesctiption}
            </h2>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div
              style={{ backgroundColor: cardbgColor }}
              className="py-8 px-4 shadow-xl border sm:rounded-lg sm:px-10"
            >
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div>
                    <a
                      href="#"
                      className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      <span className="sr-only">Sign in with Facebook</span>
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      <span className="sr-only">Sign in with Twitter</span>
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      <span className="sr-only">Sign in with GitHub</span>
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Right Side  */}
        <div className="lg:w-60  px-20 lg:px-4 py-1 bg-white min-h-screen border shadow-xl ">
          <div>
            {/* Card background */}
            <p>
              <h2 className="text-lg font-bold mt-2 mb-1">Background</h2>
              <label className="flex items-center gap-2 cursor-pointer text-lg font-medium">
                <input
                  type="color"
                  id="favcolor"
                  name="favcolor"
                  value={cardbgColor}
                  onChange={(e) => setCardbgColor(e.target.value)}
                  className="appearance-none  w-8 h-8 rounded-full cursor-pointer "
                />
                <span className="label-text font-mono bg-base-200 px-3 py-1.5 rounded-lg font-bold ">
                  {cardbgColor}
                </span>
              </label>
            </p>
            {/* Card Title  */}
            <p className="py-2">
              <h2 className="text-md font-bold mt-2 mb-1">Title Color</h2>
              <label className="flex items-center border-none gap-2  text-lg font-medium">
                <input
                  type="color"
                  id="favcolor"
                  name="favcolor"
                  value={titleColor}
                  onChange={(e) => setTitleColor(e.target.value)}
                  className="w-8 h-8 rounded-full cursor-pointer "
                />
                <span className="label-text bg-base-200 px-3 py-1.5 rounded-lg font-mono font-bold">
                  {titleColor}
                </span>
              </label>
            </p>

            {/* Login Label */}
            <p>
              <h2 className="text-md font-bold mt-2 mb-0.5">Label Color</h2>
              <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
                <input
                  type="color"
                  id="favcolor"
                  name="favcolor"
                  value={labelColor}
                  onChange={(e) => setLabelColor(e.target.value)}
                  className="w-8 h-8 rounded-full cursor-pointer "
                />
                <span className="label-text bg-base-200 px-3 py-1.5 rounded-lg border-none font-mono font-bold">
                  {labelColor}
                </span>
              </label>
            </p>

            {/* Button Text color */}
            <p className="py-2">
              <h2 className="text-md font-bold mt-2 mb-1">Button Text Color</h2>
              <label className=" flex items-center gap-2 cursor-pointer text-lg font-medium">
                <input
                  type="color"
                  id="favcolor"
                  name="favcolor"
                  value={buttonTextColor}
                  onChange={(e) => setButtonTextColor(e.target.value)}
                  className="w-8 h-8 rounded-full cursor-pointer border-none"
                />
                <span className="label-text bg-base-200 px-3 py-1.5 rounded-lg font-mono font-bold">
                  {buttonTextColor}
                </span>
              </label>
            </p>

            {/* Button background color */}
            <p>
              <h2 className="text-md font-bold mt-2 mb-1">Button Bg Color</h2>
              <label className="flex items-center gap-2 cursor-pointer text-lg font-medium">
                <input
                  type="color"
                  id="favcolor"
                  name="favcolor"
                  value={buttonBgColor}
                  onChange={(e) => setButtonBgColor(e.target.value)}
                  className="w-8 h-8 rounded-full cursor-pointer "
                />
                <span className="label-text bg-base-200 px-3 py-1.5 rounded-lg border-none font-mono font-bold">
                  {buttonBgColor}
                </span>
              </label>
            </p>

            <div className="border my-4"></div>
            <p>
              <h3 className="font-bold text-md pb-0.5"> Title Text</h3>
              <input
                id="Ttd"
                name="text"
                type="text"
                autoComplete="text"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={titleText}
                onChange={(e) => setTitleText(e.target.value)}
              />
            </p>

            <p className="my-5">
              <h3 className="font-bold text-md  pb-0.5"> description Text</h3>
              <input
                id="Ttd"
                name="text"
                type="text"
                autoComplete="text"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={textDesctiption}
                onChange={(e) => setTextDesctiption(e.target.value)}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFromGenerator;
