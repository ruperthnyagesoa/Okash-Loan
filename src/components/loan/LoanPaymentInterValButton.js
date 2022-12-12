import React from 'react';

const LoanPaymentInterValButton = ({
  id,
  interval,
  value,
  interest,
  isSelected,
  handlePaymentIntervalButtonOnClick,
}) => {
  let buttonCSSClasses =
    'py-1 text-blue-700 rounded-md focus:outline-none transition ease-in duration-200 hover:bg-blue-100 focus:text-gray-800 focus:bg-blue-200';

  if (isSelected) {
    buttonCSSClasses =
      'py-1 rounded-md focus:outline-none transition ease-in duration-200 text-gray-800 bg-blue-200';
  }

  return (
    <button
      type="button"
      className={buttonCSSClasses}
      onClick={() => handlePaymentIntervalButtonOnClick(id)}
    >
      <span className="select-none font-semibold tracking-wide">
        {interval}
      </span>
    </button>
  );
};

export default LoanPaymentInterValButton;
