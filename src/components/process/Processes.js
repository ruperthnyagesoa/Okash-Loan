import React from 'react';
import Process from './Process';
import { dataProcesses } from '../../utils/data';

const Processes = () => {
  return (
    <div className="flex flex-col p-8 md:px-14 mmd:px-20 mmmd:px-32 lg:px-20 llg:px-40 xl:px-56 xxl:px-72 xxxl:px-88 4xl:px-96 5xl:px-104 6xl:px-120">
      <section className="flex flex-col space-y-12">
        {dataProcesses.map((process) => {
          return <Process key={process.number} {...process} />;
        })}
      </section>
    </div>
  );
};

export default Processes;
