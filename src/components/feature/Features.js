import React from 'react';
import Feature from './Feature';

import { dataFeatures } from '../../utils/data';

const Features = () => {
  return (
    <div className="flex flex-col items-center justify-between p-8 bg-gradient-to-tl from-blue-200 via-blue-100 md:px-14 md:py-10 mmmd:px-32 lg:px-20 llg:px-32 xl:px-48 xxl:px-72 4xl:px-88 5xl:px-96 6xl:px-104">
      <section className="flex flex-col items-center space-y-10 w-full lg:space-y-12">
        <div className="flex flex-col items-center space-y-5">
          <a href="/">
            <div className="blue-hexagon"></div>
          </a>
          <h3 className="leading-5 text-xl tracking-wide font-extrabold text-black lg:text-3xl">
            The{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-500 okash-bg-color bg-clip-text">
              Okash
            </span>{' '}
            difference
          </h3>
        </div>

        <div className="space-y-10 w-full md:flex md:space-y-0 justify-between">
          {dataFeatures.map((feature, index) => {
            return <Feature key={index} {...feature} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Features;
