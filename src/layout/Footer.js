import React from 'react';

const Footer = () => {
  return (
    <footer className="p-8 bg-gray-200 space-y-10">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <span className="select-none leading-8 text-transparent bg-gradient-to-r from-blue-500 font-bold text-2xl okash-bg-color bg-clip-text">
            Okash
          </span>
          <div className="blue-hexagon"></div>
        </div>

        <p className="leading-5 text-sm text-gray-600 tracking-wide font-medium text-center md:w-2/4 lg:w-full">
          Okash is a private financial company offering you new ways to borrow
        </p>
      </div>

      <div className="space-y-10 md:flex md:space-y-0 justify-center md:space-x-20">
        <div className="flex flex-col items-center space-y-3">
          <span className="uppercase text-sm text-gray-500 font-semibold tracking tracking-widest">
            Company
          </span>
          <div className="flex flex-col items-center space-y-3">
            <a
              href="/"
              className="inline-flex text-sm font-medium text-gray-600 hover:underline focus:underline"
            >
              About Us
            </a>
            <a
              href="/"
              className="inline-flex text-sm font-medium text-gray-600 hover:underline focus:underline"
            >
              FAQ
            </a>
            <a
              href="/"
              className="inline-flex text-sm font-medium text-gray-600 hover:underline focus:underline"
            >
              Services
            </a>
            <a
              href="/"
              className="inline-flex text-sm font-medium text-gray-600 hover:underline focus:underline"
            >
              Log In
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-3">
          <span className="uppercase text-sm text-gray-500 font-semibold tracking tracking-widest">
            Links
          </span>
          <div className="flex flex-col items-center space-y-3">
            <a
              href="/"
              className="inline-flex text-sm font-medium text-gray-600 hover:underline focus:underline"
            >
              Terms of Services
            </a>
            <a
              href="/"
              className="inline-flex text-sm font-medium text-gray-600 hover:underline focus:underline"
            >
              Privacy Policy
            </a>
            <a
              href="/"
              className="inline-flex text-sm font-medium text-gray-600 hover:underline focus:underline"
            >
              Legal Notice
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-5">
        <div className="flex flex-col items-center space-y-3">
          <span className="uppercase text-sm text-gray-500 font-semibold tracking tracking-widest">
            Newsletter
          </span>
          <p className="leading-5 text-sm text-gray-600 tracking-wide font-semibold text-center">
            Sign up and receive the latest tips via email 💌
          </p>
        </div>

        <form className="flex flex-col w-72 space-y-4 md:w-2/4 xl:w-88">
          <input
            type="email"
            className="py-3 px-6 border border-transparent shadow rounded font-semibold focus:outline-none focus:border-blue-400 text-sm xl:text-base"
            placeholder="Your email"
          />
          <button
            type="submit"
            className="select-none uppercase py-3 text-xs border border-black shadow-lg font-bold text-black rounded tracking-widest focus:outline-none transition ease-in duration-200 hover:bg-gray-800 focus:bg-black hover:text-white focus:text-white"
            onClick={(e) => e.preventDefault()}
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center justify-center space-x-3">
          <a href="/">
            <img
              className="w-8 h-8"
              src="https://img.icons8.com/color/48/000000/facebook-new.png"
              alt="Facebook"
            />
          </a>
          <a href="/">
            <img
              className="w-8 h-8"
              src="https://img.icons8.com/color/48/000000/twitter-circled.png"
              alt="Twitter"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
