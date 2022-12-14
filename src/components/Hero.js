import React from 'react';
import { ReactComponent as HeroPattern } from '../assets/heropatternpad.svg';
import { ReactComponent as PhoneIcon } from 'heroicons/outline/phone.svg';
import { ReactComponent as Wallet } from '../assets/wallet.svg';

const Hero = () => {
  return (
    <div className="relative overflow-hidden flex flex-col justify-between px-8 space-y-8 md:flex-row md:px-14 md:pt-4 md:pb-6 mmd:px-24 mmmd:px-32 lg:px-28 llg:px-44 xl:px-48 xl:pt-24 xxl:px-52 xxxl:px-72 4xl:px-80 5xl:px-96 6xl:px-104 bg-gradient-to-bl from-teal-100 via-blue-100">
      <div className="hidden llg:block absolute z-0 top-0 right-auto bottom-0 left-0 transform -rotate-45 llg:-ml-68 xl:-ml-80 xxl:-ml-80 4xl:-ml-96 5xl:-ml-88">
        <HeroPattern className="h-40 w-40 opacity-50 lg:h-80 lg:w-80 xl:h-104 xl:w-104 xxl:h-112 xxl:w-112 xxxl:h-120 xxxl:w-120 4xl:h-128 4xl:w-128" />
      </div>

      <div className="absolute z-0 top-0 right-0 bottom-0 left-auto transform mt-24 -mr-16 rotate-45 md:-mr-48 md:mt-6 lg:-mr-64 xl:-mr-88">
        <HeroPattern className="h-64 w-64 opacity-25 lg:h-80 lg:w-80 xl:h-104 xl:w-104 xxxl:h-112 xxxl:w-112 5xl:h-120 5xl:w-120" />
      </div>

      <div className="hidden md:block absolute z-0 top-auto right-0 bottom-0 left-0 transform -mt-30 -mr-16 -rotate-45 md:-mr-30">
        <HeroPattern className="h-40 w-40 opacity-25 lg:h-80 lg:w-80 xl:h-104 xl:w-104 xxl:h-112 xxl:w-112 xxxl:h-120 xxxl:w-120 4xl:h-128 4xl:w-128" />
      </div>

      <div className="space-y-10 md:space-y-20">
        <div className="space-y-4 lg:space-y-8">
          <h1 className="select-none text-3xl font-extrabold text-gray-900 leading-8 md:text-4xl lg:text-4.5xl xl:text-5xl xxl:text-6xl">
            Time To Help Yourself!
          </h1>
          <div className="flex flex-col space-y-2">
            <span className="select-none text-base md:text-lg font-semibold text-gray-600 leading-5 lg:text-xl">
              Get it in 30 mins. No credit check.
            </span>
            <span className="text-lg font-bold text-gray-600 leading-5"></span>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="">
            <button className="select-none uppercase text-xs py-3 px-6 bg-gradient-to-bl from-indigo-500 rounded-md font-bold tracking-widest okash-bg-color text-white md:px-10 focus:outline-none transition ease-in duration-200 transform hover:scale-105">
              Apply now
            </button>
          </div>
          <div className="flex items-center space-x-1">
            <div className="flex items-center rounded-full p-2 bg-teal-200 md:p-3">
              <PhoneIcon className="h-3.5 w-3.5 text-gray-900 md:h-4 md:w-4" />
            </div>

            <span className="text-xs text-gray-700 font-medium tracking-wide md:text-sm">
              (254)-700-2234
            </span>
          </div>
        </div>
      </div>

      <Wallet className="h-64 w-64 md:pb-10 md:h-72 md:w-72 lg:h-88 lg:w-88 lg:pb-24 xl:h-112 xl:w-112 xl:pb-48 xl:-mr-20" />
    </div>
  );
};

export default Hero;
