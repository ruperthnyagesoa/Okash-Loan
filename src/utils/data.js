import smFirstProcessImg from '../assets/process1.png';
import smSecondProcessImg from '../assets/process2.png';
import smThirdProcessImg from '../assets/process3.png';

import mdFirstProcessImg from '../assets/mdprocess1.png';
import mdSecondProcessImg from '../assets/mdprocess2.png';
import mdThirdProcessImg from '../assets/mdprocess3.png';

import { ReactComponent as ClockIcon } from 'heroicons/outline/clock.svg';
import { ReactComponent as ChipIcon } from 'heroicons/outline/chip.svg';
import { ReactComponent as HeartIcon } from 'heroicons/outline/heart.svg';

export const dataLoanPlans = {
  amounts: [
    {
      id: 1,
      value: 250,
      isSelected: false,
    },
    {
      id: 2,
      value: 500,
      isSelected: false,
    },
    {
      id: 3,
      value: 750,
      isSelected: false,
    },
  ],
  paymentIntervals: [
    {
      id: 1,
      interval: 'Weekly',
      value: 4,
      interest: 0.1,
      isSelected: false,
    },
    {
      id: 2,
      interval: 'Every Two Weeks',
      value: 3,
      interest: 0.15,
      isSelected: false,
    },
    {
      id: 3,
      interval: 'Twice a month',
      value: 2,
      interest: 0.2,
      isSelected: false,
    },
    {
      id: 4,
      interval: 'Monthly',
      value: 1,
      interest: 0.25,
      isSelected: false,
    },
  ],
};

export const dataProcesses = [
  {
    number: 1,
    heading: 'Apply in 2 mins',
    subHeading: 'No credit check, no paperwork.',
    imgSrc: {
      sm: smFirstProcessImg,
      md: mdFirstProcessImg,
    },
    descriptions: [
      'No credit check required in the application process.',
      'Apply online or by phone within 2 minutes.',
      'Skip all the paperwork with electronic signature.',
    ],
  },
  {
    number: 2,
    heading: 'Get approved in 10 mins',
    subHeading: 'The process is safe, secure, and confidential.',
    imgSrc: {
      sm: smSecondProcessImg,
      md: mdSecondProcessImg,
    },
    descriptions: [
      'Highest security standard in the financial industry.',
      'We never have access to your bank account or your password.',
      'Your personal information is safeguarded and never shared.',
    ],
  },
  {
    number: 3,
    heading: 'Get your loan in 30 mins',
    subHeading: 'Deposited directly into your account.',
    imgSrc: {
      sm: smThirdProcessImg,
      md: mdThirdProcessImg,
    },
    descriptions: [
      'Receive an e-transfer you can use right away.',
      'You can also receive a direct deposit into your bank account.',
      'No waiting or travel necessary to receive your money.',
    ],
  },
];

export const dataFeatures = [
  {
    Icon: ClockIcon,
    heading: 'Fastest deposit time',
    subHeading:
      'Okash approves and deposits your loan in the shortest amount of time comparing to other lenders.',
  },
  {
    Icon: ChipIcon,
    heading: 'Latest technologies',
    subHeading:
      'Okash provides an easy and secure experience with latest internet technologies.',
  },
  {
    Icon: HeartIcon,
    heading: 'Great customer service',
    subHeading:
      'Our excellent agents are ready to help you resolve your concerns with a single call, chat or email.',
  },
];

export const dataQuestions = [
  {
    id: 1,
    title: 'Responsible lending policies',
    info:
      'All online loan applications are reviewed to ensure that you are able to repay the loan amount. Your request will therefore also be analyzed. After analysis, if your file meets all our requirements, your request will be ACCEPTED.',
    isOpen: false,
  },
  {
    id: 2,
    title: 'Missed payments and credit score',
    info:
      'You will have to pay a fee of Ksh.40 at the end of your contract if a payment is refused for insufficient funds or otherwise. However, this will not affect your credit score at Pretexpress.ca. Note that we will not report your file to the credit bureaus. If you should delay a payment, notify us by phone 48 hours in advance. A fee of Ksh.25 will be added to the end of your contract. Repay your loan assidously and we assure you unparalled service during your next renewal.',
    isOpen: false,
  },
  {
    id: 3,
    title: 'Annual percentage rate (APR)',
    info: 'The APR on the amount borrowed from the lender is 22%.',
    isOpen: false,
  },
  {
    id: 4,
    title: 'Responsible Collection',
    info:
      'Our collection practices are responsible and comply with the legal provisions enforced in Kenya. In the event of a problem during the repayment of your personal loan, our collection agents will make sure to find an agreement according to your repayment capacity. Interest is added to the unpaid balance when you fail to make the required payments. As a borrower, you are responsible for your loan and all associated legal fees',
    isOpen: false,
  },
  {
    id: 5,
    title: 'Renewals',
    info:
      'Renewing your loan does not happen automatically. You must request it.',
    isOpen: false,
  },
  {
    id: 6,
    title: 'Repayment term',
    info: 'The repayment terms for our lons are between 3 and 5 months.',
    isOpen: false,
  },
  {
    id: 7,
    title: 'Example of reimbursement',
    info:
      'A loan granted of Ksh.500, including principal, membership fees and interest, will amount to a repayment of approximately Ksh.750.',
    isOpen: false,
  },
];
