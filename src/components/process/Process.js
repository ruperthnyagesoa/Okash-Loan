import React, { useState, useEffect } from 'react';
import useWindowInnerWidth from '../../utils/useWindowInnerWidth';

import { ReactComponent as CheckIcon } from 'heroicons/solid/check.svg';

const Process = ({ number, heading, subHeading, imgSrc, descriptions }) => {
  const [imageSize, setImageSize] = useState('');
  let windowInnerWidth = useWindowInnerWidth();

  useEffect(() => {
    if (windowInnerWidth < 768) {
      setImageSize('sm');
    }

    if (windowInnerWidth >= 768) {
      setImageSize('md');
    }
  }, [windowInnerWidth]);

  return (
    <article className="flex flex-col items-center md:items-stretch space-y-5">
      <div className="flex justify-center">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-tr from-blue-700 to-indigo-500">
          <span className="select-none text-white text-xl leading-5 font-bold text-center">
            {number}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-1 md:space-y-3">
        <h3 className="leading-8 text-xl font-bold justify text-gray-900 md:text-2xl">
          {heading}
        </h3>
        <p className="leading-5 text-sm font-medium text-gray-600 md:text-base text-center">
          {subHeading}
        </p>
      </div>

      <div
        className={`space-y-5 md:flex ${
          number % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
        } justify-between items-center`}
      >
        <div className="flex justify-center">
          <img
            src={imgSrc[imageSize]}
            alt="icon"
            className="h-24 w-24 md:h-64 md:w-64 object-cover lg:h-80 lg:w-80"
          />
        </div>
        <div className="flex flex-col space-y-5 pt-1 px-2 w-72 md:w-88 md:space-y-6 lg:space-y-12 lg:w-120">
          {descriptions.map((description, index) => {
            return (
              <div key={index} className="flex space-x-4">
                <div className="bg-teal-400 rounded-full h-5 w-5">
                  <CheckIcon className="h-5 w-5 text-white" />
                </div>
                <p className="leading-5 tracking-wide text-sm font-medium text-gray-700 md:text-base">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default Process;
