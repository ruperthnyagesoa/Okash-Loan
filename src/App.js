import { Transition } from '@tailwindui/react';
import { useState, useEffect } from 'react';

import { NavContext } from './utils/NavContext';

import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';

import { ReactComponent as ArrowUpIcon } from 'heroicons/solid/arrow-narrow-up.svg';

const App = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [isBackToTopShown, setIsBackToTopShown] = useState(false);

  const handleNavMenuToggle = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  const handleBackToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setIsBackToTopShown(true);
      } else {
        setIsBackToTopShown(false);
      }
    });

    return () => window.removeEventListener('scroll', null);
  }, [isBackToTopShown]);

  return (
    <div className={isNavMenuOpen ? 'fixed' : 'relative'}>
      <NavContext.Provider
        value={{
          isNavMenuOpen,
          handleNavMenuToggle,
        }}
      >
        <Header />
      </NavContext.Provider>
      <Main />
      <Footer />

      <Transition
        show={isBackToTopShown}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed bottom-0 right-0 p-4 opacity-75">
          <button
            type="button"
            className="flex items-center bg-teal-300 p-3 focus:outline-none rounded-full"
            onClick={handleBackToTop}
          >
            <ArrowUpIcon className="h-5 w-5 text-black" />
          </button>
        </div>
      </Transition>
    </div>
  );
};

export default App;
