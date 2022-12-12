import { Transition } from '@tailwindui/react';
import React, { useContext } from 'react';
import { NavContext } from '../utils/NavContext';
import Burger from './Burger';

import { ReactComponent as CloseIcon } from 'heroicons/solid/x.svg';

const Nav = () => {
  const { isNavMenuOpen, handleNavMenuToggle } = useContext(NavContext);

  return (
    <>
      <nav className="flex justify-between items-center">
        <a href="/" className="inline-flex items-center space-x-2 md:pt-1.5">
          <span className="select-none text-transparent text-lg font-bold bg-gradient-to-r from-blue-500 okash-bg-color bg-clip-text xl:text-xl">
            Okash
          </span>
          <div className="blue-hexagon"></div>
        </a>

        {/* XL view */}
        <div className="hidden xl:flex items-center space-x-8 xl:pt-0.5">
          <ul className="flex space-x-12">
            <li>
              <a
                href="/"
                className="text-sm font-semibold tracking-wide text-gray-600 transition ease-in duration-200 hover:text-gray-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm font-semibold tracking-wide text-gray-600 transition ease-in duration-200 hover:text-gray-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm font-semibold tracking-wide text-gray-600 transition ease-in duration-200 hover:text-gray-500"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm font-semibold tracking-wide text-gray-600 transition ease-in duration-200 hover:text-gray-500"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm font-semibold tracking-wide text-gray-600 transition ease-in duration-200 hover:text-gray-500"
              >
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* XL view for auth links */}
        <div className="hidden xl:flex items-center space-x-8 xl:pt-0.5">
          <ul className="flex space-x-8">
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 tracking-wide font-semibold transition ease-in duration-200 hover:text-gray-500"
              >
                Log In
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-indigo-500 tracking-wide font-semibold transition ease-in duration-200 hover:text-indigo-400"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>

        {/* MD to LG views */}
        <div className="hidden md:flex items-center space-x-8 xl:hidden">
          <ul className="hidden space-x-8 lg:flex lg:space-x-10">
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 tracking-wide font-semibold transition ease-in duration-200 hover:text-gray-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 tracking-wide font-semibold transition ease-in duration-200 hover:text-gray-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 tracking-wide font-semibold transition ease-in duration-200 hover:text-gray-500"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 tracking-wide font-semibold transition ease-in duration-200 hover:text-gray-500"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 tracking-wide font-semibold transition ease-in duration-200 hover:text-gray-500"
              >
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* MD to LG views for auth links */}
        <div className="hidden md:flex items-center space-x-8 xl:hidden">
          <ul className="flex space-x-8">
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 tracking-wide font-semibold transition ease-in duration-200 hover:text-gray-500"
              >
                Log In
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-indigo-500 tracking-wide font-semibold transition ease-in duration-200 hover:text-indigo-400"
              >
                Sign Up
              </a>
            </li>
          </ul>

          <button
            type="button"
            className="focus:outline-none md:pt-1.5 lg:hidden"
            onClick={handleNavMenuToggle}
          >
            <Burger />
          </button>
        </div>

        {/* XS to SM views */}
        <button
          type="button"
          className="focus:outline-none md:hidden"
          onClick={handleNavMenuToggle}
        >
          <Burger />
        </button>
      </nav>

      <Transition
        show={isNavMenuOpen}
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed z-30 inset-0 px-8 py-4 flex flex-col overflow-hidden bg-gray-900 md:py-6 md:px-14">
          <div className="flex justify-end">
            <button
              type="button"
              className="focus:outline-none"
              onClick={handleNavMenuToggle}
            >
              <CloseIcon className="h-8 w-8 text-gray-700 transition ease-in duration-200 hover:text-gray-600" />
            </button>
          </div>
          <div className="flex flex-col m-auto space-y-10 md:space-y-16">
            <ul className="text-center space-y-3 md:space-y-5">
              <li>
                <a
                  href="/"
                  className="text-2xl font-medium tracking-wide text-gray-700 md:text-4xl transition ease-in duration-200 hover:text-gray-600"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-2xl font-medium tracking-wide text-gray-700 md:text-4xl transition ease-in duration-200 hover:text-gray-600"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-2xl font-medium tracking-wide text-gray-700 md:text-4xl transition ease-in duration-200 hover:text-gray-600"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-2xl font-medium tracking-wide text-gray-700 md:text-4xl transition ease-in duration-200 hover:text-gray-600"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-2xl font-medium tracking-wide text-gray-700 md:text-4xl transition ease-in duration-200 hover:text-gray-600"
                >
                  Support
                </a>
              </li>
            </ul>

            <ul className="text-center space-y-3 md:space-y-5">
              <li>
                <a
                  href="/"
                  className="text-2xl font-medium tracking-wide text-gray-700 md:text-4xl transition ease-in duration-200 hover:text-gray-600"
                >
                  Log In
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-2xl font-medium text-indigo-700 tracking-wide md:text-4xl transition ease-in duration-200 hover:text-indigo-500"
                >
                  Sign Up
                </a>
              </li>
            </ul>

            <a
              href="/"
              className="inline-flex items-center pt-5 space-x-2 md:space-x-4"
            >
              <span className="select-none text-transparent text-xl font-bold bg-gradient-to-r from-blue-500 Okash-bg-color bg-clip-text md:text-4xl">
                Okash
              </span>
              <div className="blue-hexagon"></div>
            </a>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Nav;
