import React, { useEffect, useState } from 'react';
import GlobalStyles from '@modules/globalStyles';
import RouterWrapper from '@src/Router/RouterWrapper';
import { AppProvider } from '@context/appContext';
import { NaversProvider } from '@context/naversContext';
import Modal from '@components/organisms/Modal';
import CheatPage from '@pages/CheatPage';

const App = () => {
  const [cheatActivated, activateCheat] = useState(false);

  useEffect(() => {
    let input = '';
    const key = '38384040373937396665';

    // This is just a fun feature to show you guys that for me, programming is more than my function() it is also my therapy!
    // Coffee, Code, Eat, Have fun, Sleep and Repeat.

    function konamiCodeCheck(e) {
      input = `${input}${e.keyCode}`;

      if (input === key) {
        // eslint-disable-next-line
        alert('Haha... You found Nyan!');
        return activateCheat(true);
      }

      if (!key.indexOf(input)) return false;
      input = e.keyCode;

      return false;
    }

    window.addEventListener('keydown', (e) => konamiCodeCheck(e));
  }, []);

  return (
    <>
      <GlobalStyles />
      <AppProvider>
        <NaversProvider>
          {!cheatActivated ? (
            <RouterWrapper>
              <Modal />
            </RouterWrapper>
          ) : (
            <CheatPage />
          )}
        </NaversProvider>
      </AppProvider>
    </>
  );
};

export default App;
