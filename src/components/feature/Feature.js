import React from 'react';

const Feature = ({ Icon, heading, subHeading }) => {
  return (
    <article className="flex flex-col items-center space-y-4">
      <div className="flex flex-col items-center green-hexagon h-10 w-10">
        <Icon className="h-8 w-8 text-gray-800" />
      </div>
      <h4 className="leading-5 text-lg font-bold text-gray-900 md:text-base lg:text-xl">
        {heading}
      </h4>
      <p className="leading-5 tracking-wider text-sm font-medium text-gray-700 text-center w-72 md:w-48 md:text-xs lg:text-sm lg:w-64">
        {subHeading}
      </p>
    </article>
  );
};

export default Feature;
