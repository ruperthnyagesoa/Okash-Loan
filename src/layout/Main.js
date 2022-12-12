import React from 'react';
import Hero from '../components/Hero';
import LoanPlan from '../components/loan/LoanPlan';
import Processes from '../components/process/Processes';
import Features from '../components/feature/Features';
import Support from '../components/Support';
import Vignettes from '../components/Vignettes';
import ActivePitching from '../components/ActivePitching';

const Main = () => {
  return (
    <main>
      <Hero />
      <LoanPlan />
      <Processes />
      <Features />
      <Support />
      <Vignettes />
      <ActivePitching />
    </main>
  );
};

export default Main;
