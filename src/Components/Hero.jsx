import React from "react";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-image-1.png";

const MyComponent = () => {
  return (
    <section className="text-gray-600 body-font h-screen bg-gradient-to-r from-gray-800 via-cyan-500 to-blue-400 flex items-center">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg md:w-1/2 w-5/6 mt-10 mb-10 md:mb-5">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={heroImage}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800">
            Unleash Your Gaming Power!
          </h1>
          <p className="mb-8 leading-relaxed text-gray-800">
            Immerse yourself in the world of unparalleled gaming experiences. At our gaming computer shop, we bring you the latest in technology, performance, and style. From lightning-fast processors to high-end graphics cards, our machines are crafted to elevate your gaming to new heights.
          </p>
          <div className="flex w-full md:justify-start justify-center items-end">
            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
              <label
                htmlFor="hero-field"
                className="leading-7 text-sm text-gray-700"
              >
                Find Your Perfect Gaming Rig
              </label>
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <Link
              to="/gaming-products"
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Explore Now
            </Link>
          </div>
          <p className="text-sm mt-2 text-gray-700 mb-8 w-full">
            Elevate your gaming setup to legendary status. Join the gaming revolution!
          </p>
          <p className="text-sm text-gray-700 w-full mb-2">
            Download our App.
          </p>
          <div className="flex lg:flex-row md:flex-col">
            <button className="bg-gray-100 inline-flex py-2 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
              <FaGooglePlay className="w-6 h-6" />
              <span className="ml-4 flex items-start flex-col leading-none">
                <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
                <span className="title-font font-medium">Google Play</span>
              </span>
            </button>
            <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
              <FaAppStore className="w-6 h-6" />
              <span className="ml-4 flex items-start flex-col leading-none">
                <span className="text-xs text-gray-600 mb-1">
                  Download on the
                </span>
                <span className="title-font font-medium">App Store</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyComponent;
