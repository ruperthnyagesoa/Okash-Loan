import React from 'react';

const LoanAmountButton = ({
  id,
  value,
  isSelected,
  handleAmountButtonOnClick,
}) => {
  let buttonCSSClasses =
    'flex items-center justify-center h-16 w-16 border-b border-blue-200 text-blue-700 rounded-full focus:outline-none transition ease-in duration-200 hover:bg-blue-100 focus:bg-blue-200 focus:text-gray-800';

  if (isSelected) {
    buttonCSSClasses =
      'flex items-center justify-center h-16 w-16 border-b border-blue-200 rounded-full focus:outline-none transition ease-in duration-200 bg-blue-200 text-gray-800';
  }

  return (
    <button
      type="button"
      className={buttonCSSClasses}
      onClick={() => handleAmountButtonOnClick(id)}
    >
      <span className="select-none leading-5 tracking-wider font-semibold">
        {'Ksh.' + value}
      </span>
    </button>
  );
};

export default LoanAmountButton;
