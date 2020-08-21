import React from 'react';
import GlobalStyles from '@modules/globalStyles'
import RouterWrapper from '@src/Router/RouterWrapper'
import { AppProvider } from '@context/appContext';
import { NaversProvider } from '@context/naversContext'
import Modal from '@components/organisms/Modal';


const App = () => {
  return (
    <>
      <GlobalStyles />
      <AppProvider>
        <NaversProvider>
          <RouterWrapper />
          <Modal />
        </NaversProvider>
      </AppProvider>
    </ >
  )
}

export default App;
