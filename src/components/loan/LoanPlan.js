import React, { useState } from 'react';
import { dataLoanPlans } from '../../utils/data';

import LoanAmountButton from './LoanAmountButton';
import LoanPaymentInterValButton from './LoanPaymentInterValButton';

const LoanPlan = () => {
  const [amounts, setAmounts] = useState([...dataLoanPlans.amounts]);
  const [paymentIntervals, setPaymentIntervals] = useState([
    ...dataLoanPlans.paymentIntervals,
  ]);
  const [loanAmount, setLoanAmount] = useState(0);
  const [paymentIntervalValue, setpaymentIntervalValue] = useState(0);
  const [paymentIntervalInterest, setPaymentIntervalInterest] = useState(0);
  const [paymentPerCutOff, setPaymentPerCutOff] = useState(0);

  const computePaymentPerCutOff = () => {
    const amount = amounts.find((a) => a.isSelected === true);
    const paymentInterval = paymentIntervals.find((p) => p.isSelected === true);

    if (amount === undefined || paymentInterval === undefined) {
      return;
    }

    const totalLoanInCentsWithInterest =
      convertToCents(amount.value) +
      convertToCents(amount.value) * paymentInterval.interest;

    const _paymentPerCutOff =
      totalLoanInCentsWithInterest / convertToCents(paymentInterval.value);

    setLoanAmount(amount.value);
    setpaymentIntervalValue(paymentInterval.value);
    setPaymentIntervalInterest(paymentInterval.interest);
    setPaymentPerCutOff(_paymentPerCutOff);
  };

  const toggleIsSelected = (flag, id) => {
    let copyOfEntities;

    if (flag === 'amounts') {
      copyOfEntities = [...amounts];
    }

    if (flag === 'intervals') {
      copyOfEntities = [...paymentIntervals];
    }

    const allEntitiesExcludingTheSelected = copyOfEntities.filter(
      (entity) => entity.id !== id
    );
    allEntitiesExcludingTheSelected.forEach(
      (entity) => (entity.isSelected = false)
    );

    const selectedEntity = copyOfEntities.find((a) => a.id === id);

    if (selectedEntity.isSelected && selectedEntity.id === id) {
      return copyOfEntities;
    }

    selectedEntity.isSelected = selectedEntity.isSelected ? false : true;

    computePaymentPerCutOff();

    // Sort by their id
    copyOfEntities = [
      selectedEntity,
      ...allEntitiesExcludingTheSelected,
    ].sort((a, b) => (a.id > b.id ? 1 : -1));

    return copyOfEntities;
  };

  const convertToCents = (value) => {
    return value * 100;
  };

  const handleAmountButtonOnClick = (id) => {
    const copyOfAmounts = toggleIsSelected('amounts', id);

    setAmounts(copyOfAmounts);
  };

  const handlePaymentIntervalButtonOnClick = (id) => {
    let copyOfPaymentIntervals = toggleIsSelected('intervals', id);

    setPaymentIntervals(copyOfPaymentIntervals);
  };

  return (
    <div className="p-8 md:px-14 mmd:px-24 mmmd:px-32 lg:px-32 llg:px-48 xl:px-56 xxl:px-72 xxxl:px-96 4xl:px-112 5xl:px-120 6xl:px-136 bg-blue-100">
      <div className="flex flex-col bg-white rounded-lg px-4 py-8 shadow-md">
        <form className="flex flex-col items-center space-y-8">
          <div className="flex flex-col items-center space-y-8">
            <h2 className="text-3xl font-extrabold text-gray-900 leading-8">
              Get started
            </h2>

            <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-20 lg:space-x-40">
              <div className="flex flex-col items-center">
                <span className="leading-5 text-base font-semibold tracking-wide text-gray-600">
                  Select your loan amount
                </span>
                <div className="flex items-center space-x-4 py-2">
                  {amounts.map((amount) => {
                    return (
                      <LoanAmountButton
                        key={amount.id}
                        {...amount}
                        handleAmountButtonOnClick={handleAmountButtonOnClick}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col items-center space-y-3">
                <span className="leading-5 text-base font-semibold tracking-wide text-gray-600 text-center">
                  How often do you get paid at work?
                </span>
                <div className="flex flex-col w-48">
                  {paymentIntervals.map((paymentInterval) => {
                    return (
                      <LoanPaymentInterValButton
                        key={paymentInterval.id}
                        {...paymentInterval}
                        handlePaymentIntervalButtonOnClick={
                          handlePaymentIntervalButtonOnClick
                        }
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <span className="leading-5 text-sm font-semibold tracking-wide text-gray-600 md:text-base">
              Every cut-off, you'll pay
            </span>
            <div className="flex flex-col items-center space-y-1">
              <span className="font-bold text-gray-800 text-lg md:text-xl">
                {'Ksh.' + paymentPerCutOff.toFixed(2)}
              </span>

              {paymentPerCutOff !== 0 && (
                <span className="leading-5 font-medium tracking-widest text-gray-700 text-xs md:text-sm">
                  {`(${loanAmount} + (${loanAmount} * `}

                  <span className="leading-5 font-medium tracking-widest text-orange-500 text-xs md:text-sm">
                    {`${paymentIntervalInterest}`}
                  </span>

                  {`)) / `}

                  <span className="leading-5 font-medium tracking-widest text-orange-500 text-xs md:text-sm">
                    {`${paymentIntervalValue}`}
                  </span>
                </span>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="select-none uppercase py-3 w-56 rounded-lg font-extrabold tracking-widest text-xs border border-black text-gray-50 bg-gray-800 md:w-64 transition ease-in duration-200 transform focus:outline-none hover:bg-white focus:bg-white hover:text-black focus:text-black focus:-translate-y-1"
            onClick={(e) => e.preventDefault()}
          >
            Apply for this loan
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoanPlan;
