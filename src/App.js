import React from 'react';
import GlobalStyles from '@modules/globalStyles'
import RouterWrapper from '@src/Router/RouterWrapper'
import { AppProvider } from '@context/appContext';
import Modal from '@components/organisms/Modal';


const App = () => {
  return (
    <>
      <GlobalStyles />
      <AppProvider>
        <RouterWrapper />
        <Modal />
      </AppProvider>
    </ >
  )
}

export default App;
