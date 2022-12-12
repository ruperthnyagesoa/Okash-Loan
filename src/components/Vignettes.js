import { Transition } from '@tailwindui/react';
import React, { useState } from 'react';
import { dataQuestions } from '../utils/data';

import { ReactComponent as ChevronDownIcon } from 'heroicons/solid/chevron-down.svg';
import { ReactComponent as ChevronUpIcon } from 'heroicons/solid/chevron-up.svg';

const Vignettes = () => {
  const [questions, setQuestions] = useState(dataQuestions);

  const handleQuestionToggle = (id) => {
    let allQuestions = [...questions];

    const allQuestionsExcludingTheSelected = allQuestions.filter(
      (q) => q.id !== id
    );
    allQuestionsExcludingTheSelected.forEach((q) => (q.isOpen = false));

    let selectedQuestion = allQuestions.find((q) => q.id === id);

    selectedQuestion.isOpen = selectedQuestion.isOpen ? false : true;

    // Sort by their id
    allQuestions = [
      selectedQuestion,
      ...allQuestionsExcludingTheSelected,
    ].sort((a, b) => (a.id > b.id ? 1 : -1));

    setQuestions(allQuestions);
  };

  return (
    <div className="p-8 flex flex-col items-center bg-gradient-to-br from-indigo-100 via-blue-100 space-y-3 md:space-y-5">
      <h3 className="leading-8 text-2xl text-gray-900 font-bold md:text-3xl">
        Good to know
      </h3>
      <section className="flex flex-col space-y-4 xl:items-center">
        {questions.map((question) => {
          return (
            <article
              key={question.id}
              className="flex flex-col justify-start p-4 bg-white rounded-md shadow-md space-y-3 xl:w-120 transition ease-in duration-200 hover:bg-gray-50"
            >
              <div className="flex">
                <div className="flex space-x-4">
                  <p className="leading-5 tracking-wide text-sm font-medium break-words w-56 text-gray-700 md:w-72 md:text-base lg:w-104">
                    {question.title}
                  </p>
                  <button
                    onClick={(e) => handleQuestionToggle(question.id)}
                    className="bg-blue-400 rounded-full h-5 w-5 focus:outline-none transition ease-in duration-200 transform hover:scale-110 hover:bg-blue-500"
                  >
                    {question.isOpen ? (
                      <ChevronUpIcon className="h-5 w-5 text-white" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-white" />
                    )}
                  </button>
                </div>
              </div>

              <Transition
                show={question.isOpen}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <p className="leading-6 text-xs font-medium text-gray-600 tracking-wider w-56 md:w-72 md:text-sm lg:w-104">
                  {question.info}
                </p>
              </Transition>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Vignettes;
